import { parseCookies, setCookie } from "nookies";
import axios, { AxiosError } from "axios"
import { signOut } from "hooks/useSignin";

let cookies = parseCookies();

let isRefreshing = false
let failedRequestQueue: { onSucess: ({ AccessToken, IdToken }: onSucessProps) => void; onFail: (err: AxiosError<unknown, any>) => void; }[] = []

interface onSucessProps {
    AccessToken: string,
    IdToken:string
}

export const api = axios.create({
    baseURL: "https://dev.simacheck.com/",

    headers: {
        Authorization: `${cookies["simacheck.idToken"]}`,
        AccessToken: `${cookies["simacheck.accessToken"]}`,

    },
});

api.interceptors.response.use(
    response => response
    , (error) => {
        if(error.response?.status == 401){
            let mensage = error.response.data.Message;
            console.log(mensage !== "The password is incorrect");

            if (
                mensage === "Access Token Expired" ||
                mensage === "The incoming token has expired"

            ) {
                console.log("bateu aqui veio");
                const { "simacheck.accessToken": acessToken } = parseCookies();
                const { "simacheck.refreshToken": refreshToken } =
                    parseCookies();

                const originalConfig = error.config;

                if (!isRefreshing) {
                    isRefreshing = true;

                    api.post("/auth/refresh", {
                        RefreshToken: refreshToken,
                        AccessToken: acessToken,
                    })
                        .then((response) => {
                            const { AccessToken, IdToken } = response.data;
                            console.log("refresh deu certo");
                            setCookie(undefined, "simacheck.idToken", IdToken, {
                                maxAge: 60 * 60 * 24 * 30, // 30days
                                path: "/",
                            });
                            setCookie(
                                undefined,
                                "simacheck.accessToken",
                                AccessToken,
                                {
                                    maxAge: 60 * 60 * 24 * 30, // 30days
                                    path: "/",
                                }
                            );

                            api.defaults.headers.common["Authorization"] =
                                IdToken;
                            api.defaults.headers.common["AccessToken"] =
                                AccessToken;

                            let data = { IdToken, AccessToken };

                            failedRequestQueue.forEach((request) =>
                                request.onSucess(data)
                            );
                        })
                        .catch((err) => {
                            failedRequestQueue.forEach((request) =>
                                request.onFail(err)
                            );
                            failedRequestQueue = [];

                            if (process.browser) {
                                signOut();
                                console.log("refresh deu errado");
                            }
                        })
                        .finally(() => {
                            isRefreshing = false;
                        });
                }

                return new Promise((resolve, reject) => {
                    failedRequestQueue.push({
                        onSucess: ({ AccessToken, IdToken }: onSucessProps) => {
                            originalConfig.headers["Authorization"] = IdToken;
                            originalConfig.headers["AccessToken"] = AccessToken;

                            resolve(api(originalConfig));
                        },
                        onFail: (err: AxiosError) => {
                            reject(err);
                        },
                    });
                });
            } else if(mensage !== "The password is incorrect"){
                signOut();
            }
        }

        return Promise.reject(error)
    })


