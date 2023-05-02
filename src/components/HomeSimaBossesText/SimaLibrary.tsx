import { Flex, Heading, Text, List, ListIcon, ListItem, Button, useColorMode, Badge } from "@chakra-ui/react"

import { MdDashboard } from 'react-icons/md'
import { FiBookOpen } from 'react-icons/fi'
import { BsJournalBookmark } from 'react-icons/bs'
import { useTranslation } from "hooks/useTranslation"



const HomeSimaLibrary: React.FC = () => {
    const { t } = useTranslation();
    const { colorMode } = useColorMode();

    return (
        <>
            <Flex justify={"space-around"}>
                <Flex
                    direction={"column"}
                    p={"1rem"}
                    width={{ base: "100%", md: "70%" }}
                >
                    <Heading as="h3" textAlign={"center"} fontSize={"1.5rem"}>
                        A biblioteca de dados e informações coletadas por mais
                        de 10 anos.
                    </Heading>
                    <Text
                        fontSize="md"
                        wordBreak={"break-word"}
                        align={"center"}
                        pt={"1rem"}
                    >
                        Um local especial, guardado a sete chaves, trazendo das
                        informações mais básicas a informações extremamente
                        complexas, coletadas diariamente, processadas e
                        entendidas por várias mentes, em um só lugar.
                    </Text>
                    <Flex direction={"column"} pt={"1rem"}>
                        <List spacing={5} fontSize={"90%"}>
                            <ListItem>
                                <ListIcon as={BsJournalBookmark} />
                                Artigos com dados inéditos de todo o game;
                                <Badge ml={"0.25rem"}>Free</Badge>
                                <Badge variant="outline" ml={"0.25rem"}>
                                    Premium
                                </Badge>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdDashboard} />
                                Indicadores por boss, servidor e lores;
                                <Badge ml={"0.25rem"}>Free</Badge>
                                <Badge variant="outline" ml={"0.25rem"}>
                                    Premium
                                </Badge>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FiBookOpen} />O bosswiki mais
                                completo que você já viu;
                                <Badge ml={"0.25rem"}>Free</Badge>
                                <Badge variant="outline" ml={"0.25rem"}>
                                    Premium
                                </Badge>
                            </ListItem>

                            <ListItem>...</ListItem>
                        </List>
                    </Flex>

                    <Flex
                        justifyContent={"center"}
                        align={"center"}
                        direction={{ base: "column", md: "row" }}
                    >
                        <Button
                            mt={"1rem"}
                            w={{ base: "100%", md: "30rem" }}
                            fontSize={{ base: "90%", md: "90%" }}
                            wordBreak={"break-all"}
                            variant={"outline"}
                            whiteSpace={"normal"}
                            _hover={{
                                color: "#121214",
                                bg: "#fff",
                                border: "1px solid #121214",
                            }}
                        >
                            {t("Home_LibraryLib")}
                        </Button>

                        <Button
                            mt={"1rem"}
                            w={{ base: "100%", md: "30rem" }}
                            ml={{ md: "0rem", lg: "1rem" }}
                            whiteSpace={"normal"}
                            variant={"solid"}
                            color={colorMode === "light" ? "#121214" : "#fff"}
                            _hover={{
                                color: "#121214",
                                bg: "#fff",
                                border: "1px solid #121214",
                            }}
                        >
                            {t("Home_TollsButtonPremium")}
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}

export default HomeSimaLibrary
