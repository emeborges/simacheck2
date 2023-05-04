import {
    Flex,
    Text,
    Box,
    Heading,
    Link,
    Badge,
    MenuButton,
    MenuList,
    Button,
    MenuItem,
    Menu,
} from "@chakra-ui/react";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { IncompletRegistration, TelphoneNotCheck } from "components/PerfilFlags";

import { useSignin } from "hooks/useSignin";
import Head from "next/head";
import { IoSettingsSharp } from "react-icons/io5";
import { verifyLogin } from "utils/gerals";
import { withsSSRAuth } from "utils/withsSSRAuth";

interface Props {
    acess: boolean;
}

const Account = ({ acess }: Props) => {
    const { user, signOut, globalSignOut } = useSignin();
    const dataVenc = new Date(user?.premium_until!);

    return (
        <>
            <Flex align={"center"} flexDir={"column"} h={"100vh"}>
                <Head>
                    <title> Perfil - SimaCheck</title>
                    <meta name="description" content="" />
                </Head>
                <Header page={""} acess={acess} />
                <Flex
                    flexDir={"column"}
                    p={"2rem 0rem 1rem"}
                    w={"100%"}
                    maxW={"920px"}
                    h={"100%"}
                >
                    {user?.premium && !user?.phone_number === false ? (
                        !user?.is_verified && <TelphoneNotCheck />
                    ) : (
                        <IncompletRegistration />
                    )}

                    <Flex w={"100%"} justify={"space-between"}>
                        <Box
                            boxShadow={"0px 4px 10px rgba(0,0,0,0.2)"}
                            p={"1.5rem 1.5rem"}
                            mt={"2rem"}
                            borderRadius={"8px"}
                            transition={"all 0.2s"}
                            _hover={{
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                            }}
                            minW={"300px"}
                        >
                            <Flex justify={"space-between"} align={"center"}>
                                <Link
                                    fontSize={"1.5rem"}
                                    position={"relative"}
                                    fontWeight={"700"}
                                    _after={{
                                        content: "''",
                                        width: "20px",
                                        height: "8%",
                                        position: "absolute",
                                        bottom: 1.5,
                                        left: 0,
                                        bg: "red.400",
                                        zIndex: -1,
                                    }}
                                    href={"/account"}
                                >
                                    Perfil
                                </Link>
                                {user?.premium ? (
                                    <Badge colorScheme="green" maxH={"1rem"}>
                                        #PremiumChecker
                                    </Badge>
                                ) : (
                                    <Badge maxH={"1rem"}>#FreeUser</Badge>
                                )}
                            </Flex>
                            <Flex
                                flexDir={"column"}
                                p={"1rem 0rem"}
                                fontSize={"0.8rem"}
                            >
                                <Text pb={"0.5rem"}>
                                    Olá,
                                    <span style={{ fontWeight: "600" }}>
                                        {user?.name ? user?.name : user?.email}
                                    </span>
                                </Text>
                                <Text pb={"0.5rem"}>
                                    Sua premium time{" "}
                                    {dataVenc > new Date()
                                        ? " expira "
                                        : " expirou "}{" "}
                                    em: <br />
                                    <span style={{ fontWeight: "600" }}>
                                        {dataVenc.toLocaleDateString()}
                                    </span>
                                </Text>
                                <Text>
                                    WhatsApp:
                                    <span style={{ fontWeight: "600" }}>
                                        {" "}
                                        {user?.phone_number
                                            ? user?.phone_number
                                            : "Não cadastrado"}
                                    </span>
                                </Text>
                                <Flex flexDirection={"column"} pt={"1rem"}>
                                    <Link
                                        mt={"0.5rem"}
                                        background={"#B61917"}
                                        color={"#FEFEFE"}
                                        borderRadius={"6px"}
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        fontWeight={"400"}
                                        h={"2rem"}
                                        minW={"12rem"}
                                        _hover={{ bg: "#da1d1a" }}
                                    >
                                        Assinar Premium
                                    </Link>
                                    <Flex
                                        mt={"0.5rem"}
                                        justify={"space-between"}
                                        align={"center"}
                                    >
                                        <Button
                                            background={"#18181B"}
                                            color={"#FEFEFE"}
                                            borderRadius={"6px"}
                                            display={"flex"}
                                            alignItems={"center"}
                                            justifyContent={"center"}
                                            fontWeight={"400"}
                                            fontSize={"0.9rem"}
                                            h={"2rem"}
                                            _hover={{ bg: "#4E4E52" }}
                                            width={"80%"}
                                            onClick={() => signOut()}
                                        >
                                            Sair
                                        </Button>
                                        <Menu>
                                            <MenuButton
                                                as={Button}
                                                size={"sm"}
                                                bg={"#18181B"}
                                                _hover={{ color: "#18181B" }}
                                                _selected={{ color: "red" }}
                                            >
                                                <IoSettingsSharp
                                                    color={"#fff"}
                                                />
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem
                                                    onClick={() =>
                                                        globalSignOut()
                                                    }
                                                >
                                                    Sair de todos os
                                                    dispositivos
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>

                        <Box
                            boxShadow={"0px 4px 10px rgba(0,0,0,0.2)"}
                            p={"1.5rem 1.5rem"}
                            m={"2rem 0 0 1rem"}
                            borderRadius={"8px"}
                            transition={"all 0.2s"}
                            minW={"300px"}
                            w={"100%"}
                            _hover={{
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                            }}
                        >
                            <Heading
                                fontSize={"1.5rem"}
                                position={"relative"}
                                _after={{
                                    content: "''",
                                    width: "20px",
                                    height: "8%",
                                    position: "absolute",
                                    bottom: 1,
                                    left: 0,
                                    bg: "red.400",
                                    zIndex: -1,
                                }}
                            >
                                Painel do Usuário
                            </Heading>
                            <Flex
                                flexWrap={"wrap"}
                                justify={"space-between"}
                                align={"center"}
                                pt={"0.5rem"}
                            >
                                <Link
                                    mt={"0.5rem"}
                                    border={"1px solid #18181B"}
                                    background={"#18181B"}
                                    color={"#FEFEFE"}
                                    borderRadius={"6px"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    fontWeight={"400"}
                                    fontSize={"0.8rem"}
                                    transition={"0.2s all"}
                                    variant="outline"
                                    h={"2rem"}
                                    minW={"11rem"}
                                    _hover={{
                                        bg: "#4E4E52",
                                        fontWeight: "400",
                                    }}
                                    href={"/account/changeprofile"}
                                >
                                    Atualizar Perfil
                                </Link>

                                <Link
                                    mt={"0.5rem"}
                                    ml={"0.5rem"}
                                    background={"#18181B"}
                                    color={"#FEFEFE"}
                                    borderRadius={"6px"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    fontWeight={"400"}
                                    fontSize={"0.8rem"}
                                    h={"2rem"}
                                    minW={"11rem"}
                                    _hover={{ bg: "#4E4E52" }}
                                    href={"/account/changepass"}
                                >
                                    Trocar senha
                                </Link>

                                <Link
                                    ml={"0.5rem"}
                                    mt={"0.5rem"}
                                    background={"#18181B"}
                                    color={"#FEFEFE"}
                                    borderRadius={"6px"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    fontWeight={"400"}
                                    fontSize={"0.8rem"}
                                    h={"2rem"}
                                    minW={"11rem"}
                                    _hover={{ bg: "#4E4E52" }}
                                    href={"/account/requests"}
                                >
                                    Pedidos e pagamentos
                                </Link>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
                <Footer />
            </Flex>
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
