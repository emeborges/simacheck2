import { useToast } from "@chakra-ui/react";
import Router, { NextRouter } from "next/router";
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

interface userProps {
    email: string;
    premium_until?: string;
    phone_number?: string | null;
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

    useEffect(()=> {
        const { 'simacheck.accessToken': token } = parseCookies();
        if(token != undefined){
            api.get("/users/me").then( resp => {

                const { email, premium_until, phone_number } = resp.data;
                setUser({ email, premium_until, phone_number });

            }).catch(() => {
                signOut();
            });
        }
    },[])

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

