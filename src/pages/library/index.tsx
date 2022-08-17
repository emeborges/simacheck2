import {
    Box,
    Heading,
    Text,
    Button,
    useDisclosure,
    Flex,
} from "@chakra-ui/react";
import Head from 'next/head'


import { Header } from 'components/Header';
import { useRouter } from 'next/router';
import ModalBossSelect from "components/ModalBossSelect";

const Index = () => {
    const route = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const pid: any = route.query.boss;

    console.log(pid)

    return (
        <Box maxW={"100vw"} h={"100vh"}>
            <Head>
                <title>{pid} - Radar SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Header page={"library"} />
            <Box w={"100%"} maxW={"1300px"} margin={"0 auto"}>
                <Flex
                    align={"center"}
                    direction={"column"}
                    textAlign={"center"}
                    p={"5rem 0 4rem 0"}
                >
                    <Text>Todo conteúdo em um lugar só </Text>
                    <Heading as={"h1"}>Conheça nossa biblioteca</Heading>
                    <Heading as={"h3"} fontSize={"1rem"} fontWeight={"400"}>
                        Artigos, blogs, estatisticas e muita informação!
                    </Heading>
                </Flex>
                <Flex justifyContent={"space-between"}>
                    <Flex
                        borderRadius={"5px"}
                        boxShadow={"0px 4px 20px rgba(0,0,0,0.2)"}
                        flexDir={"column"}
                        align={"center"}
                        textAlign={"center"}
                        maxW={"24rem"}
                        p={"1rem 0.5rem"}
                        mt={{ base: "1rem", md: "0" }}
                    >
                        <Box>
                            <Heading fontSize={"1.5rem"} as={"h2"}>
                                SimaWiki
                            </Heading>
                            <Box w={"2rem"} borderBottom={"2px solid red"} />
                        </Box>

                        <Text p={"1rem 1rem"} fontSize={"0.9rem"}>
                            {" "}
                            Já pensou em um BossWiki com as maiores e melhores
                            informações de cada boss? Aqui separamos os melhores conteúdos e informações analíticas colhetadas por mais de 600 dias, confira já!
                        </Text>

                        <Button
                            mt={"0.5rem"}
                            bg={"#e1e1e6"}
                            w={"10rem"}
                            h={"2.5rem"}
                            p={"0.5rem 0rem"}
                            display={"flex"}
                            flexDir={"column"}
                            justifyContent={"space-around"}
                            _hover={{ bg: "#737380", color: "#fff" }}
                            onClick={onOpen}
                        >
                            Selecione Boss
                        </Button>
                        <ModalBossSelect isOpen={isOpen} onClose={onClose} />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );}

export default Index
