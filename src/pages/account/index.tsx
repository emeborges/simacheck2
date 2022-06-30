import {
    Flex,
    Text,
    Box,
    Heading,
    Link,
    Badge,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    Button,
    MenuItem,
} from "@chakra-ui/react";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import ModalSelectBossesRotationPremium from "components/ModalSelectBossesRotationPremium";
import ModalSelectServerPremiumProfile from "components/ModalSelectServerPremiumProfile";
import { useCan } from "hooks/useCan";
import { useSignin } from "hooks/useSignin";
import Head from 'next/head'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { withsSSRAuth } from "utils/withsSSRAuth";


const Account = () => {
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
                                fontWeight={'700'}
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
                                href={'/account'}
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
                                <Text fontWeight={"600"}>{user?.email}</Text>
                            </Text>
                            <Text>
                                Sua premium time expira em:
                                <Text fontWeight={"600"}>24 anos.</Text>
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
                                href={'/account/changepass'}
                            >
                                Trocar senha
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
                                href={'/account/requests'}
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
                            Premium Console
                        </Heading>

                        <Flex direction={{ base: "column", md: "row" }}>
                            <Box minW={"260px"} maxW={"280px"}>
                                <Text
                                    fontSize={"0.8rem"}
                                    pt={"0.5rem"}
                                    textAlign={"center"}
                                >
                                    Servers Cadastrados
                                </Text>
                                <Text textAlign={"center"} fontSize={"0.6rem"}>
                                    (1/3)
                                </Text>

                                <Box>
                                    <Flex
                                        w={"100%"}
                                        align={"center"}
                                        p={"0.1rem 0.5rem"}
                                        mt={"0.2rem"}
                                        borderRadius={"2px"}
                                        justify={"center"}
                                        border={"1px solid #d9d9d9"}
                                        cursor={"pointer"}
                                        _hover={{
                                            bg: "#d4d4d4",
                                            border: "1px solid #d4d4d4",
                                        }}
                                    >
                                        <Text fontSize={"1rem"}>Servidor</Text>
                                    </Flex>

                                    <Flex
                                        w={"100%"}
                                        align={"center"}
                                        p={"0.1rem 1rem"}
                                        mt={"0.2rem"}
                                        borderRadius={"2px"}
                                        fontSize={"0.7rem"}
                                        justify={"center"}
                                    >
                                        <ModalSelectServerPremiumProfile />
                                    </Flex>
                                </Box>
                            </Box>
                            <Box pl={"1rem"} minW={"260px"} maxW={"280px"}>
                                <Text
                                    fontSize={"0.8rem"}
                                    pt={"0.5rem"}
                                    textAlign={"center"}
                                >
                                    Rotações Cadastrados
                                </Text>
                                <Text textAlign={"center"} fontSize={"0.6rem"}>
                                    (1/3)
                                </Text>

                                <Box>
                                    <Flex
                                        w={"100%"}
                                        align={"center"}
                                        p={"0.1rem 0.5rem"}
                                        mt={"0.2rem"}
                                        borderRadius={"2px"}
                                        justify={"space-between"}
                                        border={"1px solid #d9d9d9"}
                                        cursor={"pointer"}
                                        _hover={{
                                            bg: "#d4d4d4",
                                            border: "1px solid #d4d4d4",
                                        }}
                                    >
                                        <Text
                                            textAlign={"center"}
                                            fontSize={"0.8rem"}
                                        >
                                            RotaçãoName
                                        </Text>

                                        <Text fontSize={"1rem"}>Servidor</Text>

                                        <Flex>
                                            <IconButton
                                                variant="ghost"
                                                colorScheme="black"
                                                aria-label="Send email"
                                                size={"xs"}
                                                icon={<AiOutlineEdit />}
                                            />
                                            <IconButton
                                                variant="ghost"
                                                colorScheme="black"
                                                aria-label="Send email"
                                                size={"xs"}
                                                icon={<AiOutlineDelete />}
                                            />
                                        </Flex>
                                    </Flex>
                                    <Flex
                                        w={"100%"}
                                        align={"center"}
                                        p={"0.1rem 1rem"}
                                        mt={"0.2rem"}
                                        borderRadius={"2px"}
                                        fontSize={"0.7rem"}
                                        justify={"center"}
                                    >
                                        <ModalSelectBossesRotationPremium />
                                    </Flex>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
            <Footer />
        </>
    );}

export default Account;

export const getServerSideProps = withsSSRAuth(async () => {
    return {
        props: {},
    };
});
