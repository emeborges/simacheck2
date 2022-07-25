import {
    Box,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";
import Head from "next/head";

import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { useState } from "react";
import Link from "next/link";

const Team = () => {
    const [selected, setSelected] = useState(1)

    return (
        <Box maxW={"100vw"} h={"100vh"}>
            <Head>
                <meta name="description" content="" />
            </Head>
            <Header page={"faq"} />
            <Box w={"100%"} minH={"81.5vh"} maxW={"1300px"} margin={"0 auto"}>
                <Flex
                    align={"center"}
                    direction={"column"}
                    textAlign={"center"}
                    p={"5rem 0 3rem 0"}
                >
                    <Heading
                        as={"h1"}
                        position={"relative"}
                        _after={{
                            content: "''",
                            width: "20px",
                            height: "8%",
                            position: "absolute",
                            bottom: 1.5,
                            left: 2,
                            bg: "red.400",
                            zIndex: -1,
                        }}
                    >
                        Quem somos
                    </Heading>
                    <Heading
                        p={"0.5rem"}
                        as={"h3"}
                        fontSize={"1rem"}
                        fontWeight={"400"}
                        maxW={"900px"}
                    >
                        Simacheck surgiu com a junção dos hobbies com a paixão
                        por dados e análises. Nosso objetivo é, e sempre será,
                        ajudar a comunidade tibiana a ser sempre um lugar
                        melhor! Esse projeto foi criado e gerenciado por:
                    </Heading>
                </Flex>
                <Flex justify={"center"} pb={"1rem"}>
                    <Box
                        as={"button"}
                        p={"7.5rem"}
                        bgPos={"top"}
                        bgRepeat={"no-repeat"}
                        bgImage={"/img/uri.png"}
                        borderRadius={"8px 0 0 8px"}
                        transition={"all 0.2s"}
                        filter={selected == 1 ? "none" : "brightness(0.5)"}
                        onClick={() => setSelected(1)}
                    />
                    <Box
                        as={"button"}
                        p={"7.5rem"}
                        bgRepeat={"no-repeat"}
                        bgPos={"top"}
                        bgImage={"/img/mar.png"}
                        borderRadius={"0 8px 8px 0px"}
                        transition={"all 0.2s"}
                        filter={selected == 2 ? "none" : "brightness(0.5)"}
                        onClick={() => setSelected(2)}
                    />
                </Flex>
                <Flex justify={"space-between"} pb={"1rem"}>
                    <Box
                        maxW={{ base: "100%", md: "50%" }}
                        textAlign={"center"}
                        color={selected == 1 ? "#000" : "#d3d3d3"}
                    >
                        <Heading>Pedro "Uriel" Šimáček</Heading>
                        <Text>
                            Cientista de dados e apaixonado pelo joguinho, o
                            Sima, como é conhecido, estruturou e planejou tudo
                            isso que temos aqui.
                        </Text>
                        <Box p={"1rem"}>
                            <Link
                                href={
                                    "https://www.tibia.com/community/?name=uriel+simacek"
                                }
                            >
                                <Text
                                    textDecor={"underline"}
                                    cursor={"pointer"}
                                    fontSize={"1.2rem"}
                                >
                                    Uriel Simacek
                                </Text>
                            </Link>
                            <Text>Elite Knight</Text>
                            <Text>Kalibra</Text>
                        </Box>
                    </Box>
                    <Box
                        maxW={{ base: "100%", md: "50%" }}
                        textAlign={"center"}
                        color={selected == 2 ? "#000" : "#d3d3d3"}
                    >
                        <Heading>Marcelo "Mar Sio" Borges</Heading>
                        <Text>
                            Desenvolvedor front end, Mar Sio, deve uma grande parte da sua vida a isso aqui, foi o responsável pela primeira e por toda a parte web que temos por aqui hoje.
                        </Text>
                        <Box p={"1rem"}>
                            <Link
                                href={
                                    "https://www.tibia.com/community/?name=mar+sio"
                                }
                            >
                                <Text
                                    textDecor={"underline"}
                                    cursor={"pointer"}
                                    fontSize={"1.2rem"}
                                >
                                    Mar Sio
                                </Text>
                            </Link>
                            <Text>Elder Druid</Text>
                            <Text>Kalibra</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Footer />
        </Box>
    );
};

export default Team;
