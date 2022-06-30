import { useToast } from "@chakra-ui/react";
import Router, { NextRouter} from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "utils/services";


interface providerProps {
    children: ReactNode
}

interface credentialProps {
    email: string;
    password?: string;
    code?: string
}

interface contextProps {
    signUp(credentials: credentialProps): Promise<void>;
    email: string;
    Router: NextRouter;
    signUpConfirmation(credentials: credentialProps): Promise<void>;
    resendConfirmation(): Promise<void>;
    loading: boolean;
}
const SignupContext = createContext({} as contextProps);

export function SignupProvider({ children }: providerProps) {
    const [email, setEmailString] = useState("");
    const [loading, setLoading] = useState(false);

    const toast = useToast();

    async function signUp({ email, password }: credentialProps) {
        setEmailString(email);
        setLoading(true)
        await api
            .post("/auth/signup", {
                email: email,
                password: password,
            })
            .then((resp) => {
                console.log(resp);
                return (
                    localStorage.setItem("email", email),
                    Router.push("signup/confirmation")
                );
            })
            .catch((resp) =>{
                console.log(resp)
                return(
                    toast({
                        title: "Email já cadastrado",
                        description:
                        "Por favor, verifique seu email e tente novamente",
                        status: "error",
                        position: "top",
                        duration: 9000,
                        isClosable: true,
                    })
                )}
            );
        setLoading(false)

    }

    async function signUpConfirmation({ email, code }: credentialProps) {
        setEmailString(email);
        setLoading(true);
        await api
            .post("/auth/signup/confirmation", {
                email: email,
                code: code,
            })
            .then((resp) => {
                console.log(resp)
                return (
                    localStorage.setItem("email", ""), Router.push("/account")
                );
            })
            .catch((resp) =>{
                console.log(resp);
                return(

                    toast({
                        title: "Código de verificação Inválido",
                        description:
                        "Por favor, verifique seu código de verificação e tente novamente",
                        status: "error",
                        position: "top",
                        duration: 9000,
                        isClosable: true,
                    })
                    )}
            );
        setLoading(false);
    }

    async function resendConfirmation() {
        setLoading(true);
        await api
            .post("/auth/signup/resend", {
                email: email,
            })
            .then((resp) => {
                console.log(resp);
                return (
                    toast({
                        title: "Código de verificação reenviado",
                        description:
                            "Por favor, verifique sua caixa de email e spam e preencha o código novamente.",
                        status: "success",
                        position: "top",
                        duration: 9000,
                        isClosable: true,
                    })
                );
            })
            .catch((resp) => {
                console.log(resp);
                return toast({
                    title: "Hmm! Algo deu errado..",
                    description:
                        "Por favor, entre em contato com o atendimento!",
                    status: "error",
                    position: "top",
                    duration: 9000,
                    isClosable: true,
                });
            });
        setLoading(false);
    }

    return (
        <SignupContext.Provider
            value={{
                signUp,
                email,
                Router,
                signUpConfirmation,
                resendConfirmation,
                loading,
            }}
        >
            {children}
        </SignupContext.Provider>
    );
}

export function useSignup() {
    const context = useContext(SignupContext);

    return context
}
