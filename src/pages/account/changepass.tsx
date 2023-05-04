import {
    Flex,

    Heading,
    Link,

    Button,
    useToast,

} from "@chakra-ui/react";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Input } from "components/Input";
import Head from 'next/head'
import { withsSSRAuth } from "utils/withsSSRAuth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "utils/services";
import Router from "next/router";
import { verifyLogin } from "utils/gerals";

type changePassProps = {
    password: string;
    new_password: string;
    new_passwordConfirmation: string;
};

interface Props {
    acess: boolean;
}

const signUpFormSchema = yup.object().shape({
    password: yup
        .string()
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])[0-9a-zA-Z-+_!@#$%^&*.,?]{8,}$/,
            "A senha deve ser composta de letras minusculas e maiusculas, números e caracteres especiais."
        )
        .required("Senha obrigatória."),
    new_password: yup
        .string()
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])[0-9a-zA-Z-+_!@#$%^&*.,?]{8,}$/,
            "A senha deve ser composta de letras minusculas e maiusculas, números e caracteres especiais."
        )
        .required("Senha obrigatória."),
    new_passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("new_password"), null], "As senhas devem ser iguais"),
});



const Account = ({ acess }: Props) => {
    const { register, handleSubmit, formState } = useForm<changePassProps>({
        resolver: yupResolver(signUpFormSchema),
    });
    const { errors } = formState;
    const toast = useToast();

    const onSubmit: SubmitHandler<changePassProps> = async ({
        password,
        new_password,
    }) => {
        await api
            .post("/auth/password/change", {
                password: password,
                new_password: new_password,
            })
            .then((resp) => {
                console.log(resp);

                toast({
                    title: "Senha trocada com sucesso.",
                    description:
                        "Senha alterado com sucesso, você será redirecionado",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
                setTimeout(() => Router.push("/account"), 9000);
            })
            .catch((error) => {
                if (error.response.status == 401) {
                    toast({
                        title: "Senha incorreta",
                        description:
                            "Senha anterior ou a nova senha está incorreta, por favor, tente novamente.",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                        position: "top",
                    });
                } else {
                    toast({
                        title: "Hmm! Algo deu errado.",
                        description:
                            "Por favor, tente novamente mais tarde, ou entre em contato com o suporte.",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                        position: "top",
                    });
                }
            });
    };

    console.log('ace', acess)

    return (
        <>
            <Flex minH={"98vh"} align={"center"} flexDir={"column"}>
                <Head>
                    <title> Trocas Senha - SimaCheck</title>
                    <meta name="description" content="" />
                </Head>
                <Header page={""} acess={acess} />
                <Flex
                    justifyContent={"center"}
                    align={"center"}
                    flexDir={{ base: "column", md: "row" }}
                    p={"5rem 0rem 1rem"}
                >
                    <Flex
                        w={"100%"}
                        h={"100%"}
                        align={"center"}
                        justify={"center"}
                    >
                        <Flex
                            flexDir={"column"}
                            boxShadow={"0px 4px 10px rgba(0,0,0,0.2)"}
                            p={"2rem 2rem"}
                            maxW={"100%"}
                            minW={{ base: "300px", md: "330px" }}
                            borderRadius={"8px"}
                            transition={"all 0.2s"}
                            _hover={{
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                            }}
                            as={"form"}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Heading
                                fontSize={"1.5rem"}
                                pb={"1rem"}
                                position={"relative"}
                                _after={{
                                    content: "''",
                                    width: "10%",
                                    height: "8%",
                                    position: "absolute",
                                    bottom: 5,
                                    left: 0,
                                    bg: "red.400",
                                    zIndex: -1,
                                }}
                            >
                                Trocar Senha
                            </Heading>
                            <Input
                                label={"Senha Atual"}
                                type={"password"}
                                placeholder={"Senha"}
                                autoComplete={"on"}
                                size={"sm"}
                                error={errors.password}
                                {...register("password")}
                            />
                            <Input
                                label={"Nova Senha"}
                                type={"password"}
                                placeholder={"Nova Senha"}
                                autoComplete={"on"}
                                size={"sm"}
                                error={errors.new_password}
                                {...register("new_password")}
                            />
                            <Input
                                label={"Repitir Nova Senha"}
                                type={"password"}
                                placeholder={"Nova Senha"}
                                autoComplete={"on"}
                                size={"sm"}
                                error={errors.new_passwordConfirmation}
                                {...register("new_passwordConfirmation")}
                            />

                            <Button
                                mt={"1rem"}
                                background={"#18181B"}
                                color={"#FEFEFE"}
                                _hover={{ bg: "#4E4E52" }}
                                type={"submit"}
                            >
                                Entrar
                            </Button>
                            <Link onClick={() => Router.back()}>Voltar</Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
        </>
    );
};

export default Account;

export const getServerSideProps = withsSSRAuth(async (ctx) => {
    return {
        props: {
            acess: verifyLogin(ctx),
        },
    };
});
