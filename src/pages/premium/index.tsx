import {
    Box,
    Flex,
    Heading,
    Text,
    HStack,
    List,
    VStack,
    ListItem,
    ListIcon,
    Button,
} from "@chakra-ui/react";
import Head from "next/head";


import { Header } from "components/Header";

import { Footer } from "components/Footer";

import { FaCheckCircle } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
/* import { useTranslation } from "hooks/useTranslation"; */

const Index = () => {
    /*const { t } = useTranslation();*/

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
                    p={"3rem 0 3rem 0"}
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
                        PREMIUM TIME
                    </Heading>
                    <Heading
                        as={"h3"}
                        fontSize={"1rem"}
                        fontWeight={"400"}
                        maxW={"600px"}
                    >
                        Quer ter acesso a todas as previsões e as ferramentas
                        mais precisas do mundo tibiano?
                        <br />
                        <Text fontWeight={"700"}>Assine já!</Text>
                    </Heading>
                </Flex>
                <Flex
                    justify={"space-evenly"}
                    flexDir={{ base: "column", lg: "row" }}
                >
                    <Box
                        mb={4}
                        shadow="base"
                        borderWidth="1px"
                        alignSelf={{ base: "center", lg: "flex-start" }}
                        borderColor={"gray.200"}
                        borderRadius={"xl"}
                        w={"100%"}
                        maxW={"300px"}
                    >
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Free
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="5xl" fontWeight="900">
                                    GRÁTIS
                                </Text>
                            </HStack>
                        </Box>
                        <VStack bg={"gray.50"} py={4} borderBottomRadius={"xl"}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    Radar de bosses
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    Calculadora de Skills
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    Calculadora de Party
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FiXCircle} color="red.500" />
                                    Detalhes globais do boss
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FiXCircle} color="red.500" />
                                    Boletim diário personalizado
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="red">
                                    Cadastre-se já!
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                    <Box
                        mb={4}
                        shadow="base"
                        borderWidth="1px"
                        alignSelf={{ base: "center", lg: "flex-start" }}
                        borderColor={"gray.200"}
                        borderRadius={"xl"}
                        w={"100%"}
                        maxW={"300px"}
                    >
                        <Box position="relative">
                            <Box
                                position="absolute"
                                top="-16px"
                                left="50%"
                                style={{ transform: "translate(-50%)" }}
                            >
                                <Text
                                    textTransform="uppercase"
                                    bg={"red.500"}
                                    px={3}
                                    py={1}
                                    color={"#fff"}
                                    fontSize="sm"
                                    fontWeight="600"
                                    rounded="xl"
                                >
                                    Mais Popular
                                </Text>
                            </Box>
                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl">
                                    Premium
                                </Text>
                                <HStack
                                    justifyContent="center"
                                    alignItems={"baseline"}
                                >
                                    <Text fontSize="3xl" fontWeight="600">
                                        R$
                                    </Text>
                                    <Text fontSize="5xl" fontWeight="900">
                                        12,99
                                    </Text>
                                    <Text
                                        fontSize="1rem"
                                        minWidth={"5rem"}
                                        color="gray.500"
                                    >
                                        /30 dias
                                    </Text>
                                </HStack>
                            </Box>
                            <VStack
                                bg={"gray.50"}
                                py={4}
                                borderBottomRadius={"xl"}
                            >
                                <List spacing={3} textAlign="start" px={12}>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Radar de bosses
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Calculadora de Skills
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Calculadora de Party
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Detalhes globais do boss
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Boletim diário personalizado
                                    </ListItem>
                                </List>
                                <Box w="80%" pt={7}>
                                    <Button w="full" colorScheme="red">
                                        Assinar Já!
                                    </Button>
                                </Box>
                            </VStack>
                        </Box>
                    </Box>
                    <Box
                        mb={4}
                        shadow="base"
                        borderWidth="1px"
                        alignSelf={{ base: "center", lg: "flex-start" }}
                        borderColor={"gray.200"}
                        borderRadius={"xl"}
                        w={"100%"}
                        maxW={"300px"}
                    >
                        <Box position="relative">
                            <Box
                                position="absolute"
                                top="-16px"
                                left="50%"
                                style={{ transform: "translate(-50%)" }}
                            >
                                <Text
                                    textTransform="uppercase"
                                    border={"1px solid red"}
                                    px={3}
                                    background={"#fff"}
                                    py={1}
                                    color={"red.500"}
                                    fontSize="xs"
                                    fontWeight="600"
                                    rounded="xl"
                                >
                                    Mais Econômico
                                </Text>
                            </Box>
                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl">
                                    Premium Tri
                                </Text>
                                <HStack
                                    justifyContent="center"
                                    alignItems={"baseline"}
                                >
                                    <Text fontSize="3xl" fontWeight="600">
                                        R$
                                    </Text>
                                    <Text fontSize="5xl" fontWeight="900">
                                        32,99
                                    </Text>
                                    <Text
                                        fontSize="1rem"
                                        minWidth={"5rem"}
                                        color="gray.500"
                                    >
                                        /90 dias
                                    </Text>
                                </HStack>
                            </Box>
                            <VStack
                                bg={"gray.50"}
                                py={4}
                                borderBottomRadius={"xl"}
                            >
                                <List spacing={3} textAlign="start" px={12}>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Radar de bosses
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Calculadora de Skills
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Calculadora de Party
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Detalhes globais do boss
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Boletim diário personalizado
                                    </ListItem>
                                </List>
                                <Box w="80%" pt={7}>
                                    <Button w="full" colorScheme="red">
                                        Assinar Já!
                                    </Button>
                                </Box>
                            </VStack>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Footer />
        </Box>
    );
};

export default Index;
