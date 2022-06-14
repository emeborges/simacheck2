import { Flex, Heading, Link, Button, Checkbox, Text } from "@chakra-ui/react";
import { Header } from "components/Header";
import { Input } from "components/Input";
import Head from 'next/head'
import { useRouter } from "next/router";
import { useState } from "react";


const Signup = () => {
    const router = useRouter()
    const [valueCheck, setValeuCheck ] = useState(false)

    console.log(valueCheck)


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
                        Cadastrar-se
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
                        mb={"1rem"}
                    />
                    <Input
                        label={"repita a senha"}
                        name={"password"}
                        minW={"330px"}
                        type={"password"}
                        placeholder={"Senha"}
                    />
                    <Checkbox
                        colorScheme={"gray"}
                        onChange={() => setValeuCheck(!valueCheck)}
                        pt={'1rem'}
                    >
                        <Text fontSize={"0.8rem"}>
                            Concordo com os <Link href={""}>Termos de Uso</Link>{" "}
                            e com a{" "}
                            <Link href={""}>Política de Privacidade</Link>.
                        </Text>
                    </Checkbox>
                    <Button
                        mt={"1rem"}
                        background={"#18181B"}
                        color={"#FEFEFE"}
                        _hover={{ bg: "#4E4E52" }}
                        isDisabled={valueCheck === false ? true : false}
                    >
                        Entrar
                    </Button>
                    <Link onClick={() => router.back()}>Voltar</Link>
                </Flex>
            </Flex>
        </Flex>
    );}

export default Signup
