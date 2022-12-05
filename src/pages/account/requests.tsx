import {
    Flex,
    Text,
    Box,
    Heading,
    Link,
    Badge,
    Menu,
    MenuButton,
    MenuList,
    Button,
    MenuItem,
} from "@chakra-ui/react";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { useSignin } from "hooks/useSignin";
import Head from 'next/head'
import { IoSettingsSharp } from "react-icons/io5";
import { withsSSRAuth } from "utils/withsSSRAuth";


const Requests = () => {
    const { user, signOut, globalSignOut } = useSignin();

    return (
        <>
            <Flex minH={"98vh"} align={"center"} flexDir={"column"}>
                <Head>
                    <title> Perfil - SimaCheck</title>
                    <meta name="description" content="" />
                </Head>
                <Header />
                <Flex
                    justifyContent={"center"}
                    align={"center"}
                    flexDir={{ base: "column", md: "row" }}
                    p={"5rem 0rem 1rem"}
                >
                    <Box
                        boxShadow={"0px 4px 10px rgba(0,0,0,0.2)"}
                        p={"1.5rem 1.5rem"}
                        borderRadius={"8px"}
                        transition={"all 0.2s"}
                        _hover={{ boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
                        minW={"300px"}
                        maxW={"300px"}
                        minH={"310px"}
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
                            <Badge maxH={"1rem"}>#FreeUser</Badge>
                            <Badge colorScheme="green" maxH={"1rem"}>
                                #Simachecker
                            </Badge>
                        </Flex>
                        <Flex
                            flexDir={"column"}
                            p={"1rem 0rem"}
                            fontSize={"0.8rem"}
                        >
                            <Text pb={"0.5rem"}>
                                Olá,
                                <span style={{ fontWeight: "600" }}>
                                    {user?.email}
                                </span>
                            </Text>
                            <Text>
                                Sua premium time expira em:
                                <span style={{ fontWeight: "600" }}>
                                    24 anos.
                                </span>
                            </Text>
                        </Flex>
                        <Flex flexDirection={"column"} pt={"1rem"}>
                            <Link
                                background={"#B61917"}
                                color={"#FEFEFE"}
                                borderRadius={"6px"}
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                fontWeight={"400"}
                                h={"2rem"}
                                _hover={{ bg: "#da1d1a" }}
                            >
                                Assinar Premium
                            </Link>
                            <Link
                                mt={"0.5rem"}
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
                                href={"/account/changepass"}
                            >
                                Trocar senha
                            </Link>

                            <Link
                                mt={"0.5rem"}
                                border={"1px solid #18181B"}
                                color={"##18181B"}
                                borderRadius={"6px"}
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                fontWeight={"400"}
                                fontSize={"0.9rem"}
                                h={"2rem"}
                                _hover={{ bg: "#4E4E52", color: "#fff" }}
                            >
                                Pedidos e pagamentos
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
                                        <IoSettingsSharp color={"#fff"} />
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem
                                            onClick={() => globalSignOut()}
                                        >
                                            Sair de todos os dispositivos
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box
                        boxShadow={"0px 4px 10px rgba(0,0,0,0.2)"}
                        p={"1.5rem 1.5rem"}
                        m={{ base: "1rem 0 0", md: "0rem 0rem 0rem 2rem" }}
                        borderRadius={"8px"}
                        transition={"all 0.2s"}
                        minH={{ base: "100%", md: "360px" }}
                        minW={"300px"}
                        _hover={{ boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
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
                            Pedidos e Pagamentos
                        </Heading>
                    </Box>
                </Flex>
            </Flex>
            <Footer />
        </>
    );}

export default Requests;

export const getServerSideProps = withsSSRAuth(async () => {
    return {
        props: {},
    };
});
