import { useState } from 'react'
import {
  Text,
  Flex,
  Button,
  IconButton,
  Image,
  Box,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Community } from 'components/Community'
import { useRouter } from 'next/router'
import Link from 'next/link'


export const Header = ({ page }:any) => {
  const [display, setChangeDisplay] = useState('none')
  const router = useRouter()




    const links = [
        {
            'link': 'home',
            'escrita': 'Home',
            'referencia':'/'
        },
        {
            'link': 'tools',
            'escrita': 'SimaTools',
            'referencia':'/tools'
        },
        {
            'link': 'blog',
            'escrita': 'SimaJournal',
            'referencia':'/'
        },

        {
            'link': 'faq',
            'escrita': 'FAQ',
            'referencia':'/'
        }
    ]

    return (
        <>
            <Community />
            <Box>
                <Flex
                    right="0"
                    bg={"#18181B"}
                    w={"100vw"}
                    h={"5.5rem"}
                    align={"center"}
                >
                    {/* Desktop */}
                    <Flex
                        display={["none", "none", "flex", "flex"]}
                        justify={"space-around"}
                        maxW={"1300px"}
                        m={"0 auto"}
                        boxShadow={"0px 5px 20px 0px rgba(0,0,0,0.25)"}
                    >
                        <Image src={"/img/logo.svg"} w={"30%"} />
                        {links.map((link, key) => {
                            return (
                                <NextLink href={link.referencia}>
                                    <Flex
                                        key={key}
                                        align={"center"}
                                        justifyContent={"center"}
                                        cursor={"pointer"}
                                        borderWidth={{
                                            base: "80%",
                                            md: "100%",
                                        }}
                                        borderBottom={{
                                            md:
                                                page === link.link
                                                    ? "4px solid #BA1813"
                                                    : "none",
                                        }}
                                        _hover={{
                                            borderBottom:
                                                page !== link.link
                                                    ? "2px solid #BA1813"
                                                    : "4px solid #BA1813",
                                        }}
                                        m={{
                                            base: "1rem 0rem",
                                            md: "0rem 0.5rem 0rem",
                                        }}
                                    >
                                        <Text
                                            width={"100%"}
                                            minW={"6rem"}
                                            textAlign={"center"}
                                            fontSize={"1rem"}
                                            color={
                                                page === link.link
                                                    ? "#FEFEFE"
                                                    : "#4E4E52"
                                            }
                                            _hover={{
                                                color: "#eae9e9",
                                                textDecoration: "none",
                                            }}
                                            cursor={"pointer"}
                                        >
                                            {link.escrita}
                                        </Text>
                                    </Flex>
                                </NextLink>
                            );
                        })}

                        <Flex
                            align={"center"}
                            justifyContent={"center"}
                            mr={"1rem"}
                        >
                            <Link href={"/signup"}>
                                <Text
                                    fontSize={"0.8rem"}
                                    color={"#FEFEFE"}
                                    mr={"0.5rem"}
                                    cursor={"pointer"}
                                >
                                    Cadastrar-se
                                </Text>
                            </Link>
                            <Button onClick={() => router.push("/signin")}>
                                Entrar
                            </Button>
                        </Flex>
                    </Flex>

                    {/* Mobile */}
                    <Flex
                        w={"100vw"}
                        justify={"space-between"}
                        p={"0rem 0.5rem"}
                        display={["flex", "flex", "none", "none"]}
                    >
                        <Image src={"/img/logo.svg"} w={"60%"} />
                        <IconButton
                            aria-label="Open Menu"
                            size="lg"
                            position={"fixed"}
                            bg={"black"}
                            right={"5"}
                            zIndex={"21"}
                            top={"12"}
                            color={"#fff"}
                            fontSize={"2rem"}
                            icon={<HamburgerIcon />}
                            onClick={() => setChangeDisplay("flex")}
                            display={
                                display === "flex"
                                    ? "none"
                                    : ["flex", "flex", "none", "none"]
                            }
                        />
                    </Flex>
                </Flex>

                {/* Mobile Content */}

                <Flex
                    w="100vw"
                    display={display}
                    bgColor="gray.50"
                    zIndex={20}
                    h="100vh"
                    pos="fixed"
                    top="0"
                    left="0"
                    bg={"black"}
                    overflowY="auto"
                    flexDir="column"
                >
                    <Flex justify="flex-end">
                        <IconButton
                            mt={2}
                            mr={2}
                            aria-label="Open Menu"
                            size="lg"
                            bg={"black"}
                            color={"#fff"}
                            icon={<CloseIcon />}
                            onClick={() => setChangeDisplay("none")}
                        />
                    </Flex>

                    <Flex flexDir="column" align="center" bg={"black"}>
                        {links.map((link, key) => {
                            return (
                                <NextLink href={link.referencia}>
                                    <Flex
                                        key={key}
                                        align={"center"}
                                        justifyContent={"center"}
                                        cursor={"pointer"}
                                        borderWidth={{
                                            base: "80%",
                                            md: "100%",
                                        }}
                                        borderBottom={{
                                            md:
                                                page === link.link
                                                    ? "4px solid #BA1813"
                                                    : "none",
                                        }}
                                        _hover={{
                                            borderBottom:
                                                page !== link.link
                                                    ? "2px solid #BA1813"
                                                    : "4px solid #BA1813",
                                        }}
                                        m={{
                                            base: "1rem 0rem",
                                            md: "0rem 0.5rem 0rem",
                                        }}
                                    >
                                        <Text
                                            width={"100%"}
                                            minW={"6rem"}
                                            textAlign={"center"}
                                            fontSize={"1rem"}
                                            color={
                                                page === link.link
                                                    ? "#FEFEFE"
                                                    : "#4E4E52"
                                            }
                                            _hover={{
                                                color: "#eae9e9",
                                                textDecoration: "none",
                                            }}
                                            cursor={"pointer"}
                                        >
                                            {link.escrita}
                                        </Text>
                                    </Flex>
                                </NextLink>
                            );
                        })}
                        <Flex
                            align={"center"}
                            justifyContent={"space-around"}
                            mr={"1rem"}
                        >
                            <Text
                                fontSize={"0.8rem"}
                                color={"#FEFEFE"}
                                mr={"0.5rem"}
                                cursor={"pointer"}
                            >
                                Cadastrar-se
                            </Text>
                            <Button>Entrar</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
