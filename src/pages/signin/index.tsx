import { Flex, Text, Box, Heading, Link, Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Input } from "components/Input";
import Head from 'next/head'
import {  FaFacebookSquare, FaGoogle, FaTwitch } from 'react-icons/fa'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignin } from "hooks/useSignin";
import { withSSTGuest } from "../../utils/withsSSRGuest";
import { verifyLogin } from "utils/gerals";

type SigninProps = {
    email: string;
    password: string;
    confirmationPassword: string;
};

interface Props {
    acess: boolean;
}

const signInFormSchema = yup.object().shape({
    email: yup
        .string()
        .required("E-mail obrigatório")
        .email("E-mail inválido."),
    password: yup
        .string()
        .required("Senha obrigatória."),
});

const SigninPage = ({ acess }: Props) => {
    const { register, handleSubmit, formState } = useForm<SigninProps>({
        resolver: yupResolver(signInFormSchema),
    });
    const { errors } = formState;
    const { signIn, loading } = useSignin();

    const onSubmit: SubmitHandler<SigninProps> = async ({
        email,
        password,
    }) => {
        const data = { email, password, type: "USERPASS" };
        signIn(data);
    };

    return (
        <>
            <Flex maxW={"100vw"} h={"98vh"} align={"center"} flexDir={"column"}>
                <Head>
                    <title> Entrar - SimaCheck</title>
                    <meta name="description" content="" />
                </Head>
                <Header page={""} acess={acess} />
                <Flex
                    maxW={"330px"}
                    h={"100%"}
                    align={"center"}
                    justify={"center"}
                >
                    <Flex
                        flexDir={"column"}
                        boxShadow={"0px 4px 10px rgba(0,0,0,0.2)"}
                        p={"2rem 2rem"}
                        borderRadius={"8px"}
                        maxW={"100%"}
                        transition={"all 0.2s"}
                        _hover={{ boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
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
                            Entrar
                        </Heading>
                        <Input
                            label={"login"}
                            error={errors.email}
                            {...register("email")}
                            placeholder={"Endereço de e-mail"}
                            mb={"1rem"}
                        />
                        <Input
                            label={"senha"}
                            error={errors.password}
                            {...register("password")}
                            type={"password"}
                            placeholder={"Senha"}
                            autoComplete={"on"}
                        />
                        <Link
                            href={"/signup/forgot"}
                            textAlign={"right"}
                            fontSize={"0.7rem"}
                        >
                            Esqueceu a senha?
                        </Link>
                        <Button
                            mt={"1rem"}
                            type={"submit"}
                            background={"#18181B"}
                            color={"#FEFEFE"}
                            _hover={{ bg: "#4E4E52" }}
                            isLoading={loading === true ? true : false}
                        >
                            Entrar
                        </Button>
                        <Flex p={"0.5rem 0rem"} justify={"center"}>
                            <Text fontSize={"0.9rem"}>
                                Não tem conta?{" "}
                                <Link fontSize={"1rem"} href={"/signup"}>
                                    Cadastre-se já!
                                </Link>
                            </Text>
                        </Flex>
                        <Flex align={"center"} justify={"center"}>
                            <Box
                                width={"30%"}
                                borderBottom={"1px solid #d2d2d2"}
                            />
                            <Text p={"1rem 1rem 0rem"}> ou </Text>
                            <Box
                                width={"30%"}
                                borderBottom={"1px solid #d2d2d2"}
                            />
                        </Flex>
                        <Flex
                            justify={"center"}
                            align={"center"}
                            flexDir={"column"}
                        >
                            <Text fontSize={"0.7rem"}>
                                Entrar com as redes sociais
                            </Text>
                            <ButtonGroup p={"1rem 0rem 0rem"}>
                                <IconButton
                                    bg={"none"}
                                    fontSize={"2rem"}
                                    icon={<FaTwitch />}
                                    aria-label={"Entrar com conta Twitch"}
                                    _hover={{ bg: "#4E4E52", color: "#fff" }}
                                />
                                <IconButton
                                    bg={"none"}
                                    fontSize={"2rem"}
                                    icon={<FaFacebookSquare />}
                                    aria-label={"Entrar com conta Facebook"}
                                    _hover={{ bg: "#4E4E52", color: "#fff" }}
                                />
                                <IconButton
                                    bg={"none"}
                                    fontSize={"2rem"}
                                    icon={<FaGoogle />}
                                    aria-label={"Entrar com conta Google"}
                                    _hover={{ bg: "#4E4E52", color: "#fff" }}
                                />
                            </ButtonGroup>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
        </>
    );
};

export default SigninPage;

export const getServerSideProps = withSSTGuest(async (ctx) => {
    return {
        props: {
            acess: verifyLogin(ctx),
        },
    };
});
