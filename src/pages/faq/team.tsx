import {
    Box,
    Flex,
    Accordion,
    Heading,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from "@chakra-ui/react";
import Head from "next/head";

import { Header } from "components/Header";
import { useRouter } from "next/router";
import { Footer } from "components/Footer";

const Team = () => {


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
                        Quem somos
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
                    asdfasd
                </Flex>
            </Box>

            <Footer />
        </Box>
    );
};

export default Team;
