import { Box, Heading, Text, Button, useDisclosure, Flex, Badge, Link as LinkChakra } from '@chakra-ui/react';
import Head from 'next/head'

import { Header } from 'components/Header';
import { Container } from "../../styles/pages/tools"

import ModalSelectServer from 'components/ModalServerSelect';
import { Footer } from 'components/Footer';
import { Router, useRouter } from 'next/router';

const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()

    return (
        <Flex
            minH={"100vh"}
            align={"space-between"}
            flexDir={"column"}
            justify={"space-between"}
        >
            <Head>
                <title>Ferramentas - SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Box>
                <Header page={"tools"} />
            </Box>
            <Box w={"100%"} maxW={"1300px"} h={"100%"} margin={"0 auto"}>
                <Flex
                    align={"center"}
                    direction={"column"}
                    textAlign={"center"}
                    p={{ base: "2rem 0 4rem 0", md: "0rem 0 4rem 0" }}
                >
                    <Text>Bem mais que uma "rastreador" de bosses... </Text>
                    <Heading as={"h1"}>
                        Conheça todas nossas ferramentas abaixo
                    </Heading>
                    <Heading as={"h3"} fontSize={"1rem"} fontWeight={"400"}>
                        Rastreie, calcule, cronometre e aprenda.{" "}
                    </Heading>
                </Flex>
                <Flex
                    justifyContent={"space-around"}
                    wrap={"wrap"}
                    gap={"1rem"}
                >
                    <Flex
                        borderRadius={"5px"}
                        boxShadow={"0px 4px 20px rgba(0,0,0,0.2)"}
                        flexDir={"column"}
                        align={"center"}
                        textAlign={"center"}
                        justify={"center"}
                        maxW={"24rem"}
                        p={"1rem 0.5rem"}
                        mt={{ base: "1rem", md: "0" }}
                    >
                        <Box>
                            <Heading fontSize={"1.5rem"} as={"h2"}>
                                SimaBosses
                            </Heading>
                            <Box w={"2rem"} borderBottom={"2px solid red"} />
                        </Box>
                        <Box m={"0.2rem 0"}>
                            <Badge colorScheme="green" fontSize={"0.7rem"}>
                                FREE
                            </Badge>
                            <Badge
                                fontSize={"0.7rem"}
                                colorScheme="red"
                                ml={"0.5rem"}
                            >
                                Premium
                            </Badge>
                        </Box>

                        <Text p={"0rem 1rem"} fontSize={"0.9rem"}>
                            {" "}
                            Aqui você será capaz de acompanhar, rastrear e
                            planejar seu BossCheck.
                        </Text>

                        <Button
                            mt={"0.5rem"}
                            bg={"transparent"}
                            border={"1px solid #000"}
                            color={"#000"}
                            w={"9rem"}
                            h={"3rem"}
                            p={"0.5rem 0rem"}
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"space-around"}
                            onClick={onOpen}
                            _hover={{ bg: "#000", color: "#fff" }}
                        >
                            Entrar no Radar
                        </Button>
                        <ModalSelectServer isOpen={isOpen} onClose={onClose} />
                    </Flex>
                    <Flex
                        borderRadius={"5px"}
                        boxShadow={"0px 4px 20px rgba(0,0,0,0.2)"}
                        flexDir={"column"}
                        align={"center"}
                        justify={"center"}
                        textAlign={"center"}
                        maxW={"24rem"}
                        p={"1rem 0.5rem"}
                        mt={{ base: "1rem", md: "0" }}
                    >
                        <Box>
                            <Heading fontSize={"1.5rem"} as={"h2"}>
                                SimaBot
                            </Heading>
                            <Box w={"2rem"} borderBottom={"2px solid red"} />
                        </Box>

                        <Box m={"0.2rem 0"}>
                            <Badge fontSize={"0.7rem"} colorScheme="red">
                                Premium
                            </Badge>
                        </Box>

                        <Text p={"0rem 1rem"} fontSize={"0.9rem"}>
                            Ter acesso a todas as calculadoras e informações dos
                            bosses diretamente do seu WhatsApp agora é mais do
                            que possível!
                        </Text>

                        <ModalSelectServer isOpen={isOpen} onClose={onClose} />
                    </Flex>
                    <Flex
                        borderRadius={"5px"}
                        boxShadow={"0px 4px 20px rgba(0,0,0,0.2)"}
                        flexDir={"column"}
                        align={"center"}
                        justify={"center"}
                        textAlign={"center"}
                        maxW={"24rem"}
                        p={"1rem 0.5rem"}
                        mt={{ base: "1rem", md: "0" }}
                    >
                        <Box>
                            <Heading fontSize={"1.5rem"} as={"h2"}>
                                SimaCalc
                            </Heading>
                            <Box w={"2rem"} borderBottom={"2px solid red"} />
                        </Box>

                        <Box m={"0.2rem 0"}>
                            <Badge colorScheme="green" fontSize={"0.7rem"}>
                                FREE
                            </Badge>
                            <Badge
                                fontSize={"0.7rem"}
                                colorScheme="red"
                                ml={"0.5rem"}
                            >
                                Premium
                            </Badge>
                        </Box>

                        <Text p={"0rem 1rem"} fontSize={"0.9rem"}>
                            A jornada tibiana nunca foi tão bem analisada..
                            Pensando nisso, construimos uma calculadora para os
                            principais itens do tibia.
                        </Text>

                        <Button
                            mt={"0.5rem"}
                            bg={"transparent"}
                            border={"1px solid #000"}
                            color={"#000"}
                            h={"3rem"}
                            p={"0.5rem 1rem"}
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"space-around"}
                            onClick={() => router.push('/tools/calculadora')}
                            _hover={{ bg: "#101010", color: "#fff" }}
                        >
                            Entrar na Calculadora
                        </Button>

                        <ModalSelectServer isOpen={isOpen} onClose={onClose} />
                    </Flex>
                </Flex>
                <Flex
                    m={"2rem auto"}
                    maxW={"1000px"}
                    w={"100%"}
                    justify={"space-evenly"}
                    wrap={"wrap"}
                    gap={"1rem"}
                >
                    <LinkChakra
                        href={"/signup"}
                        bg={"#121214"}
                        p={"0.5rem 2rem"}
                        borderRadius={"5px"}
                        color={"#fff"}
                        fontSize={"1rem"}
                        textDecor={"none"}
                        maxW={"320px"}
                        w={"100%"}
                        textAlign={"center"}
                    >
                        Cadastre-se já!
                    </LinkChakra>
                    <LinkChakra
                        href={"/premium"}
                        bg={"#b01816"}
                        p={"0.5rem 2rem"}
                        borderRadius={"5px"}
                        color={"#fff"}
                        fontSize={"1rem"}
                        textDecor={"none"}
                        maxW={"320px"}
                        w={"100%"}
                        textAlign={"center"}
                    >
                        Conhecer o premium
                    </LinkChakra>
                </Flex>
            </Box>
            <Footer />
        </Flex>
    );}

export default Index
