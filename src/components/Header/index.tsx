import { useEffect, useState } from 'react'
import {
  Text,
  Flex,
  Button,
  IconButton,
  Image,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Badge,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { Community } from 'components/Community'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { FaUserShield } from 'react-icons/fa'
import { GiAxeSword } from 'react-icons/gi'
import { Can } from 'components/Can'
import { signOut, useSignin } from 'hooks/useSignin'
import ModalSelectServer from 'components/ModalServerSelect'


export const Header = ({ page }:any) => {
    const [display, setChangeDisplay] = useState('none')
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [autent, setAutent] = useState(false)
    const { isAthenticated } = useSignin();

    const router = useRouter()

    useEffect(() => {
        setAutent(isAthenticated);
    }, [isAthenticated]);


    const links = [
        {
            texto: "Home",
            rota: "/",
            referencia: "/",
        },
        {
            texto: "SimaTools",
            rota: "tools",
            referencia: [
                {
                    icon: "/",
                    texto: "Teste",
                    rota: "/tools",
                },
                {
                    icon: "/",
                    texto: "Teste",
                    rota: "/tools",
                },
            ],
        },
        {
            rota: "library",
            texto: "SimaLibrary",
            referencia: "/library",
        },
        {
            rota: "faq",
            texto: "FAQ",
            referencia: "/faq",
        },
    ];

    return (
        <>
            <Community />
            <Box bg={"#18181B"} w={"100%"}>
                <Flex right="0" h={"5.5rem"} align={"center"}>
                    {/* Desktop */}
                    <Flex
                        display={["none", "none", "none", "flex"]}
                        justify={"space-around"}
                        maxW={"1300px"}
                        m={"0 auto"}

                    >
                        <Image src={"/img/logo.svg"} w={"30%"} />

                        {links.map((link, key) => {
                            if(typeof link.referencia !== 'string'){
                                return (
                                    <Flex minHeight={'100%'} justify={'center'} flexDir={'column'} >
                                        <Menu isLazy key={key}>
                                            <MenuButton
                                                as={Button}
                                                rightIcon={<ChevronDownIcon />}
                                                borderWidth={{
                                                    base: "80%",
                                                    md: "100%",
                                                }}
                                                color={
                                                    page === link.texto
                                                        ? "#FEFEFE"
                                                        : "#4E4E52"
                                                }
                                                borderRadius={0}
                                                background={"transparent"}
                                                borderBottom={{
                                                    md:
                                                        page === link.texto
                                                            ? "4px solid #BA1813"
                                                            : "none",
                                                }}
                                                _active={{
                                                    background: "transparent",
                                                }}
                                                _hover={{
                                                    borderBottom:
                                                        page !== link.texto
                                                            ? "2px solid #BA1813"
                                                            : "4px solid #BA1813",
                                                    color: "#eae9e9",
                                                    textDecoration: "none",
                                                }}


                                                m={{
                                                    base: "1rem 0rem",
                                                    md: "0rem 0.5rem 0rem",
                                                }}
                                            >
                                                {link.texto}
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem minH="48px">
                                                    <Image
                                                        boxSize="2rem"
                                                        borderRadius="full"
                                                        src="https://placekitten.com/100/100"
                                                        alt="Fluffybuns the destroyer"
                                                        mr="12px"
                                                    />
                                                    <span>
                                                        Fluffybuns the Destroyer
                                                    </span>
                                                </MenuItem>

                                            </MenuList>
                                        </Menu>
                                    </Flex>
                                );}

                            return (
                                <NextLink href={link.rota} key={key} >
                                    <Flex
                                        align={"center"}
                                        justifyContent={"center"}
                                        cursor={"pointer"}
                                        borderWidth={{
                                            base: "80%",
                                            md: "100%",
                                        }}
                                        height={'100%'}
                                        borderBottom={{
                                            md:
                                                page === link.texto
                                                    ? "4px solid #BA1813"
                                                    : "none",
                                        }}
                                        _hover={{
                                            borderBottom:
                                                page !== link.texto
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
                                                page === link.texto
                                                    ? "#FEFEFE"
                                                    : "#4E4E52"
                                            }
                                            _hover={{
                                                color: "#eae9e9",
                                                textDecoration: "none",
                                            }}
                                            cursor={"pointer"}
                                        >
                                            {link.texto}
                                        </Text>
                                    </Flex>
                                </NextLink>
                            );
                        })}


                        {autent == true ? (
                            <Flex
                                align={"center"}
                                justifyContent={"center"}
                                mr={"1rem"}
                            >
                                <Can permissions={new Date()} roles="premium">
                                    <Menu>
                                        <MenuButton
                                            as={IconButton}
                                            aria-label="Options"
                                            icon={<GiAxeSword />}
                                            color={"#4E4E52"}
                                            bg={"none"}
                                            borderRadius={"none"}
                                            borderWidth={"50%"}
                                            _hover={{
                                                color: "#eae9e9",
                                                borderBottom: "2px solid red",
                                            }}
                                            mr={"0.5rem"}
                                            fontSize={"1.5rem"}
                                        />
                                        <MenuList>
                                            <Text
                                                fontSize={"0.7rem"}
                                                textAlign={"center"}
                                            >
                                                Acesso Rápido
                                                <Badge
                                                    colorScheme="green"
                                                    fontSize={"0.7rem"}
                                                    ml={"0.5rem"}
                                                >
                                                    PREMIUM
                                                </Badge>
                                            </Text>
                                            <MenuItem
                                                fontSize={"0.8rem"}
                                                onClick={onOpen}
                                            >
                                                Radar
                                            </MenuItem>
                                            <MenuItem fontSize={"0.8rem"}>
                                                Calculadoras
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Can>
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label="Options"
                                        icon={<FaUserShield />}
                                        color={"#4E4E52"}
                                        bg={"none"}
                                        borderRadius={"none"}
                                        borderWidth={"50%"}
                                        _hover={{
                                            color: "#eae9e9",
                                            borderBottom: "2px solid red",
                                        }}
                                        fontSize={"1.2rem"}
                                    />
                                    <MenuList>
                                        <MenuItem
                                            fontSize={"0.8rem"}
                                            onClick={() =>
                                                router.push("/account")
                                            }
                                        >
                                            Perfil
                                        </MenuItem>
                                        <MenuItem
                                            fontSize={"0.8rem"}
                                            onClick={() =>
                                                router.push("/account/requests")
                                            }
                                        >
                                            Pedidos e Pagamentos
                                        </MenuItem>
                                        <MenuItem
                                            fontSize={"0.8rem"}
                                            fontWeight={"700"}
                                            onClick={() =>
                                                router.push("/premium")
                                            }
                                        >
                                            Assinar Premium
                                        </MenuItem>
                                        <MenuItem
                                            fontSize={"0.8rem"}
                                            onClick={() => signOut()}
                                        >
                                            Sair
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        ) : (
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
                        )}
                    </Flex>

                    {/* Mobile */}
                    <Flex
                        w={"100vw"}
                        justify={"space-between"}
                        p={"0rem 0.5rem"}
                        display={["flex", "flex", "flex", "none"]}
                    >
                        <Image src={"/img/logo.svg"} w={"60%"} />
                        <IconButton
                            aria-label="Open Menu"
                            size="lg"
                            position={"fixed"}
                            bg={"black"}
                            right={"5"}
                            zIndex={"21"}
                            top={"65px"}
                            color={"#fff"}
                            fontSize={"2rem"}
                            icon={<HamburgerIcon />}
                            onClick={() => setChangeDisplay("flex")}
                            display={
                                display === "flex"
                                    ? "none"
                                    : ["flex", "flex", "flex", "none"]
                            }
                        />
                    </Flex>
                </Flex>

                {/* Mobile Content */}

                <Flex
                    w="100vw"
                    display={display}
                    bgColor="#121214"
                    zIndex={20}
                    h="100vh"
                    pos="fixed"
                    top="0"
                    left="0"
                    overflowY="auto"
                    flexDir="column"
                >
                    <Flex justify="flex-end" bg={"#121214"}>

                        <IconButton
                            mt={2}
                            mr={2}
                            aria-label="Open Menu"
                            size="lg"
                            bg={"#121214"}
                            color={"#fff"}
                            icon={<CloseIcon />}
                            onClick={() => setChangeDisplay("none")}
                        />
                    </Flex>

                    <Flex flexDir="column" align="center" bg={"#121214"}>
                        {links.map((link, key) => {

                            if(typeof link.referencia === 'string'){
                                return (
                                    <NextLink href={link.referencia} key={key}>
                                        <Flex
                                            align={"center"}
                                            justifyContent={"center"}
                                            cursor={"pointer"}
                                            borderWidth={{
                                                base: "80%",
                                                md: "100%",
                                            }}
                                            borderBottom={{
                                                md:
                                                    page === link.texto
                                                        ? "4px solid #BA1813"
                                                        : "none",
                                            }}
                                            _hover={{
                                                borderBottom:
                                                    page !== link.texto
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
                                                    page === link.texto
                                                        ? "#FEFEFE"
                                                        : "#4E4E52"
                                                }
                                                _hover={{
                                                    color: "#eae9e9",
                                                    textDecoration: "none",
                                                }}
                                                cursor={"pointer"}
                                            >
                                                {link.texto}
                                            </Text>
                                        </Flex>
                                    </NextLink>
                            )}

                            return (
                                <Accordion
                                    width={"100%"}
                                    borderColor={"#121214"}
                                    defaultIndex={[0]}
                                    allowMultiple
                                >
                                    <AccordionItem>
                                        <AccordionButton border={"none"}>
                                            <Box
                                                as="span"
                                                flex="1"
                                                textAlign="center"
                                                color={
                                                    page === link.texto
                                                        ? "#FEFEFE"
                                                        : "#4E4E52"
                                                }
                                            >
                                                {link.texto}
                                            </Box>

                                        </AccordionButton>

                                        <AccordionPanel pb={4}>
                                            {link.referencia.map(
                                                (link, key) => (
                                                    <NextLink
                                                        href={link.texto}
                                                        key={key}
                                                    >
                                                        <Flex
                                                            align={"center"}
                                                            justifyContent={
                                                                "center"
                                                            }
                                                            cursor={"pointer"}
                                                            borderWidth={{
                                                                base: "80%",
                                                                md: "100%",
                                                            }}
                                                            borderBottom={{
                                                                md:
                                                                    page ===
                                                                    link.texto
                                                                        ? "4px solid #BA1813"
                                                                        : "none",
                                                            }}
                                                            _hover={{
                                                                borderBottom:
                                                                    page !==
                                                                    link.texto
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
                                                                textAlign={
                                                                    "center"
                                                                }
                                                                fontSize={
                                                                    "1rem"
                                                                }
                                                                color={
                                                                    page ===
                                                                    link.texto
                                                                        ? "#FEFEFE"
                                                                        : "#4E4E52"
                                                                }
                                                                _hover={{
                                                                    color: "#eae9e9",
                                                                    textDecoration:
                                                                        "none",
                                                                }}
                                                                cursor={
                                                                    "pointer"
                                                                }
                                                            >
                                                                {link.texto}
                                                            </Text>
                                                        </Flex>
                                                    </NextLink>
                                                )
                                            )}
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            );
                        })}
                        {autent == true ? (
                            <Flex
                                align={"center"}
                                justifyContent={"space-evenly"}
                                w={"100%"}
                                mt={"3rem"}
                            >
                                <Can permissions={new Date()} roles="premium">
                                    <Menu>
                                        <MenuButton
                                            as={IconButton}
                                            aria-label="Options"
                                            icon={<GiAxeSword />}
                                            color={"#fff"}
                                            bg={"none"}
                                            borderRadius={"none"}
                                            borderWidth={"50%"}
                                            _hover={{
                                                color: "#eae9e9",
                                                borderBottom: "2px solid red",
                                            }}
                                            p={"2rem 1rem"}
                                            fontSize={"2.5rem"}
                                        />
                                        <MenuList>
                                            <MenuItem command="⌘T">
                                                New Tab
                                            </MenuItem>
                                            <MenuItem command="⌘N">
                                                New Window
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Can>
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label="Options"
                                        icon={<FaUserShield />}
                                        color={"#fff"}
                                        bg={"none"}
                                        borderRadius={"none"}
                                        borderWidth={"50%"}
                                        _hover={{
                                            color: "#eae9e9",
                                            borderBottom: "2px solid red",
                                        }}
                                        p={"2rem 1rem"}
                                        fontSize={"2.5rem"}
                                    />
                                    <MenuList>
                                        <MenuItem command="⌘T">
                                            New Tab
                                        </MenuItem>
                                        <MenuItem command="⌘N">
                                            New Window
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        ) : (
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
                        )}
                    </Flex>
                </Flex>
            </Box>
            <ModalSelectServer isOpen={isOpen} onClose={onClose} />
        </>
    );
}
