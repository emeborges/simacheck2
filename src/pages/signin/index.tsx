import { Flex, Text, Box, Heading, Link, Button, ButtonGroup, IconButton } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Input } from "components/Input";
import Head from 'next/head'
import {  FaFacebookSquare, FaGoogle, FaTwitch } from 'react-icons/fa'


const Signin = () => {


    return (
        <Flex maxW={"100vw"} h={"100vh"} align={"center"} flexDir={"column"}>
            <Head>
                <title> Entrar - SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Header />
            <Flex maxW={"330px"} h={"100%"} align={"center"} justify={"center"}>
                <Flex
                    flexDir={"column"}
                    boxShadow={"0px 4px 10px rgba(0,0,0,0.2)"}
                    p={"2rem 2rem"}
                    borderRadius={"8px"}
                    transition={"all 0.2s"}
                    _hover={{ boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
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
                        name={"login"}
                        minW={"330px"}
                        placeholder={"Endereço de e-mail"}
                        mb={"1rem"}
                    />
                    <Input
                        label={"senha"}
                        name={"password"}
                        minW={"330px"}
                        type={"password"}
                        placeholder={"Senha"}
                    />
                    <Link href={"/signup/forgot"} textAlign={"right"} fontSize={"0.7rem"}>
                        Esqueceu a senha?
                    </Link>
                    <Button
                        mt={"1rem"}
                        background={"#18181B"}
                        color={"#FEFEFE"}
                        _hover={{ bg: "#4E4E52" }}
                    >
                        Entrar
                    </Button>
                    <Flex p={"0.5rem 0rem"} justify={"center"}>
                        <Text fontSize={"0.9rem"}>
                            Não tem conta?{" "}
                            <Link fontSize={"1rem"} href={'/signup'}>Cadastre-se já!</Link>
                        </Text>
                    </Flex>
                    <Flex align={"center"} justify={"center"}>
                        <Box width={"30%"} borderBottom={"1px solid #d2d2d2"} />
                        <Text p={"1rem 1rem 0rem"}> ou </Text>
                        <Box width={"30%"} borderBottom={"1px solid #d2d2d2"} />
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
    );}

export default Signin;
