import { Box, Heading, Text, Button, useDisclosure, Flex } from '@chakra-ui/react';
import Head from 'next/head'

import { Header } from 'components/Header';
import { Container } from "../../styles/pages/tools"

import ModalSelectServer from 'components/ModalServerSelect';

const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container>
            <Head>
                <title>SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Header page={"tools"} />
            <Box w={"100%"} maxW={"1300px"} margin={"0 auto"}>
                <Box>
                    <Flex
                        align={"center"}
                        direction={"column"}
                        textAlign={"center"}
                        p={"5rem 0 4rem 0"}
                    >
                        <Text>Bem mais que uma "rastreador" de bosses... </Text>
                        <Heading as={"h1"}>
                            Conheça todas nossas ferramentas abaixo
                        </Heading>
                        <Heading as={"h3"} fontSize={"1rem"} fontWeight={"400"}>
                            Rastreie, calcule, cronometre e aprenda.{" "}
                        </Heading>
                    </Flex>
                    <Flex justifyContent={"space-between"}>
                        <Flex
                            borderRadius={"5px"}
                            boxShadow={"0px 4px 20px rgba(0,0,0,0.2)"}
                            flexDir={'column'}
                            align={'center'}
                            textAlign={'center'}
                            maxW={'24rem'}
                            p={'1rem 0.5rem'}
                            mt={{base:'1rem', md:'0'}}
                        >
                            <Box>
                                <Heading fontSize={"1.5rem"} as={"h2"} >
                                    SimaBosses
                                </Heading>
                                <Box w={'2rem'} borderBottom={'2px solid red'}/>
                            </Box>

                            <Text p={"0rem 1rem"} fontSize={"0.9rem"}>
                                {" "}
                                Aqui você será capaz de verificar todas as
                                informações de bosses tibianos, filtrados desde
                                a possibilidade de aparecimento, da cidade de
                                aparecimento ou separados por Lore..
                            </Text>

                            <Button
                                mt={"0.5rem"}
                                bg={"#e1e1e6"}
                                w={"8rem"}
                                h={"4rem"}
                                p={"0.5rem 0rem"}
                                display={"flex"}
                                flexDir={"column"}
                                justifyContent={"space-around"}
                                _hover={{ bg: "#737380", color: "#fff" }}
                                onClick={onOpen}
                            >
                                Entrar já!
                            </Button>
                            <ModalSelectServer
                                isOpen={isOpen}
                                onClose={onClose}
                            />
                        </Flex>


                    </Flex>
                </Box>
            </Box>
        </Container>
    );}

export default Index
