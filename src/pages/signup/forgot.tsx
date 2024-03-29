import {
    Flex,
    Heading,
    Link,
    Button,
    Text

} from "@chakra-ui/react";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Input } from "components/Input";
import Head from "next/head";
import { useRouter } from "next/router";
import { verifyLogin } from "utils/gerals";
import { withSSTGuest } from "utils/withsSSRGuest";

interface Props {
    acess: boolean;
}

const Signup = ({ acess }: Props) => {
    const router = useRouter();

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
                        maxW={"100%"}
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
                            Recuperar senha
                        </Heading>
                        <Text color={"#8D8D8D"} fontSize={"80%"} pb={"1rem"}>
                            Insira o endereço de e-mail. Você receberá uma
                            mensagem de e-mail com as instruções necessárias
                            para redefinir a senha.
                        </Text>
                        <Input
                            name={"login"}
                            placeholder={"Endereço de e-mail"}
                        />

                        <Button
                            mt={"1rem"}
                            background={"#18181B"}
                            color={"#FEFEFE"}
                            _hover={{ bg: "#4E4E52" }}
                        >
                            Entrar
                        </Button>
                        <Link onClick={() => router.back()}>Voltar</Link>
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
        </>
    );
};

export default Signup;

export const getServerSideProps = withSSTGuest(async (ctx) => {
    return {
        props: {
            acess: verifyLogin(ctx),
        },
    };
});
