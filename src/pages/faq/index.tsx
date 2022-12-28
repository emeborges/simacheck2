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
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Button
} from "@chakra-ui/react";
import Head from "next/head";

import { Header } from "components/Header";
import { Footer } from "components/Footer";
import Link from "next/link";

const Index = () => {


    return (
        <Flex
            minH={"100vh"}
            align={"space-between"}
            flexDir={"column"}
            justify={"space-between"}
        >
            <Head>
                <title>Dúvidas - SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Box>
                <Header page={"faq"} />
            </Box>

            <Box w={"100%"} maxW={"1300px"} margin={"0 auto"}>
                <Flex
                    align={"center"}
                    direction={"column"}
                    textAlign={"center"}
                    p={{ base: "2rem 0 4rem 0", md: "0rem 0 4rem 0" }}
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
                <Box>
                    <Flex justify={"space-between"} m={"3rem 0"}>
                        <Button
                            bg={"#18181b"}
                            color={"#fff"}
                            w={"49%"}
                            display={"flex"}
                            justify-content={"center"}
                            p={"2rem"}
                            filter={"brightness(0.5)"}
                            transition={"all 0.5s"}
                            _hover={{ filter: "brightness(1)" }}
                        >
                            <Text>Conheça nosso premium</Text>
                        </Button>
                        <Button
                            bg={"red"}
                            color={"#fff"}
                            w={"49%"}
                            justify-content={"center"}
                            p={"2rem"}
                            filter={"brightness(0.5)"}
                            transition={"all 0.5s"}
                            _hover={{ filter: "brightness(1)" }}
                        >
                            <Text>Conheça nossa equipe</Text>
                        </Button>
                    </Flex>
                    <Tabs isFitted variant="line" w={"100%"} align={"center"}>
                        <TabList>
                            <Tab _selected={{ borderColor: "red" }}>
                                <Heading
                                    fontSize={{ base: "0.8rem", md: "1rem" }}
                                    position={"relative"}
                                    _after={{
                                        content: "''",
                                        width: "15px",
                                        height: "8%",
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        bg: "red.400",
                                        zIndex: -1,
                                    }}
                                >
                                    Dúvidas Gerais
                                </Heading>
                            </Tab>
                            <Tab _selected={{ borderColor: "red" }}>
                                <Heading
                                    fontSize={{ base: "0.8rem", md: "1rem" }}
                                    position={"relative"}
                                    _after={{
                                        content: "''",
                                        width: "15px",
                                        height: "8%",
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        bg: "red.400",
                                        zIndex: -1,
                                    }}
                                >
                                    Como usar
                                </Heading>
                            </Tab>
                            <Tab _selected={{ borderColor: "red" }}>
                                <Heading
                                    fontSize={{ base: "0.8rem", md: "1rem" }}
                                    position={"relative"}
                                    _after={{
                                        content: "''",
                                        width: "15px",
                                        height: "8%",
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        bg: "red.400",
                                        zIndex: -1,
                                    }}
                                >
                                    Dúvidas do premium
                                </Heading>
                            </Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <Accordion allowToggle width={"100%"}>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box
                                                flex="1"
                                                textAlign="left"
                                                display={"flex"}
                                            >
                                                O que é o Simacheck?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>

                                        <AccordionPanel pb={4}>
                                            <Text mb={"1rem"}>
                                                Somos uma ferramenta de apoio ao
                                                tibiano, trazendo desde
                                                ferramentas para cálculos
                                                estruturados de skill e
                                                rastreamento de bosses. Com
                                                nossa tecnologia, conseguimos
                                                trazer, de modo rápido e
                                                preciso, as melhores
                                                experiências para o jogador.
                                            </Text>
                                            <Link href={"/tools/"}>
                                                Conheça nossas ferramentas
                                            </Link>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Vocês são pagos?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Text mb={"1rem"}>
                                                Nossas ferramentas são
                                                desenvolvidas tanto para o uso
                                                premium, quanto para usuários
                                                não Premiuns, conheça nosso
                                                sistema premium a seguir:
                                            </Text>
                                            <Link href={"/"}>
                                                Conheça nosso premium
                                            </Link>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <Box flex="1" textAlign="left">
                                                Como vocês funcionam?
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            <Text mb={"1rem"}>
                                                Nossas ferramentas são
                                                desenvolvidas tanto para o uso
                                                premium, quanto para usuários
                                                não Premiuns, conheça nosso
                                                sistema premium a seguir:
                                            </Text>
                                            <Link href={"/"}>
                                                Conheça nosso premium
                                            </Link>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </TabPanel>
                            <TabPanel>
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
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat.
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
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </Flex>
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>

            <Footer />
        </Flex>
    );
};

export default Index;
