import { useToast } from "@chakra-ui/react";
import Router, { NextRouter, useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "utils/services";
import { setCookie, parseCookies, destroyCookie } from 'nookies'


interface providerProps {
    children: ReactNode
}

interface credentialProps {
    email: string;
    password?: string;
    type?: string
}

export interface userProps {
    email: string;
    premium_until?: string;
    phone_number?: string | null;
    name?: string;
    is_verified?: boolean;
    premium?: boolean;
}

interface contextProps {
    signIn(credentials: credentialProps): Promise<void>;
    Router: NextRouter;
    loading: boolean;
    isAthenticated: boolean;
    user: userProps | undefined;
    signOut: () => void;
    globalSignOut: () => void;
}

const SigninContext = createContext({} as contextProps);

export async function signOut() {
    const { "simacheck.refreshToken": refreshToken } = parseCookies();

    if(refreshToken != undefined){
        await api
            .post("/auth/logout", {
                RefreshToken: refreshToken,
            })
        destroyCookie(undefined, "simacheck.idToken");
        destroyCookie(undefined, "simacheck.accessToken");
        destroyCookie(undefined, "simacheck.refreshToken");

        Router.reload;
    }

    Router.push("/");
    setTimeout(() => Router.reload(), 2000)
}

export async function globalSignOut() {

    await api.post("/auth/signout").then(()=>{
        destroyCookie(undefined, "simacheck.idToken");
        destroyCookie(undefined, "simacheck.accessToken");
        destroyCookie(undefined, "simacheck.refreshToken");

        Router.push("/");
        setTimeout(() => Router.reload(), 2000)
    }).catch(error => console.log(error));


}



export function SigninProvider({ children }: providerProps) {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<userProps>();
    const isAthenticated = !!user;
    const toast = useToast();
    const route = useRouter()

    useEffect(() => {
        const { "simacheck.accessToken": token } = parseCookies();
        if (token != undefined) {
            api.get("/users/me")
                .then((resp) => {
                    console.log(resp.data);
                    const {
                        email,
                        premium_until,
                        phone_number,
                        name,
                        is_verified,
                    } = resp.data;

                    const premium = new Date(user?.premium_until!) > new Date();

                    setUser({
                        email,
                        premium_until,
                        phone_number,
                        name,
                        is_verified,
                        premium,
                    });
                })
                .catch(() => {
                    signOut();
                });
        }
    }, [route.pathname]);

    async function signIn({ email, password, type }: credentialProps) {
        setLoading(true);

        await api
            .post("/auth/signin", {
                email: email,
                password: password,
                type: type,
            })
            .then((resp) => {
                const { AccessToken, IdToken, RefreshToken } = resp.data;
                setCookie(undefined, "simacheck.idToken", IdToken, {
                    maxAge: 60*60*24 *30, // 30days
                    path: '/'
                });
                setCookie(undefined, "simacheck.accessToken", AccessToken, {
                    maxAge: 60*60*24 *30, // 30days
                    path: '/'
                });
                setCookie(undefined, "simacheck.refreshToken", RefreshToken, {
                    maxAge: 60 * 60*24 * 30, // 30days
                    path: "/",
                });
                setUser({email})

                api.defaults.headers.common["Authorization"] = IdToken;
                api.defaults.headers.common["AccessToken"] = AccessToken;

                return (
                    Router.push("/account"),
                    setTimeout(() => Router.reload(), 2000))

            })
            .catch(() => {

                return toast({
                    title: "Email ou senha incorretos",
                    description:
                        "Por favor, verifique seu email e senha e tente novamente",
                    status: "error",
                    position: "top",
                    duration: 9000,
                    isClosable: true,
                });
            });
        setLoading(false);
    }

    return (
        <SigninContext.Provider
            value={{
                signIn,
                signOut,
                globalSignOut,
                Router,
                loading,
                isAthenticated,
                user,
            }}
        >
            {children}
        </SigninContext.Provider>
    );
}

export function useSignin() {
    const context = useContext(SigninContext);

    return context
}

