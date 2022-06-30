import {
    Box,
    Flex,
    Accordion,
    Heading,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Text,
} from "@chakra-ui/react";
import Head from "next/head";

import { Header } from "components/Header";
import { useRouter } from "next/router";
import { Footer } from "components/Footer";
import Link from "next/link";

const Index = () => {


    return (
        <Box maxW={"100vw"} h={"100vh"}>
            <Head>
                <meta name="description" content="" />
            </Head>
            <Header page={"faq"} />
            <Box w={"100%"} maxW={"1300px"} margin={"0 auto"}>
                <Flex
                    align={"center"}
                    direction={"column"}
                    textAlign={"center"}
                    p={"5rem 0 4rem 0"}
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
                            left: 0,
                            bg: "red.400",
                            zIndex: -1,
                        }}
                    >
                        FAQ
                    </Heading>
                    <Heading
                        as={"h3"}
                        fontSize={"1rem"}
                        fontWeight={"400"}
                        maxW={"600px"}
                    >
                        Tá com dúvida? Quer conhecer mais a gente? Saca só a
                        seleção de dúvidas que a gente fez para vocês!
                    </Heading>
                </Flex>
                <Flex justify={"space-between"}>
                    <Flex width={"49%"}>
                        <Accordion allowToggle width={"100%"}>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Quem criou o Simacheck?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                    <Text mb={'1rem'}>
                                        Nem tudo é resolvido na base do hunted, e também, nem tudo é construido sozinho. Por esse motivo, criamos uma página específica para contar um pouco dessa história.
                                    </Text>
                                    <Link href={'/faq/team'} >
                                        Conhecer já!
                                    </Link>

                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Dúvida 1
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Flex>
                    <Flex width={"49%"}>
                        <Accordion allowToggle width={"100%"}>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Dúvida 1
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        Dúvida 1
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Flex>
                </Flex>
            </Box>

            <Footer />
        </Box>
    );
};

export default Index;
