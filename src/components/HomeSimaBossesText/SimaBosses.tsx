import { Flex, Heading, Text, List, ListIcon, ListItem, Button, useColorMode, Badge } from "@chakra-ui/react"

import { TbRoute } from "react-icons/tb";
import {
    BsCalendarRange,
    BsFillCalculatorFill,
    BsWhatsapp,
} from "react-icons/bs";
import { GiRadarSweep } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { useTranslation } from "hooks/useTranslation"



const HomeSimaBossesText: React.FC = () => {
    const { t } = useTranslation();
    const { colorMode } = useColorMode();

    return (
        <Flex justify={"space-around"} width={{ base: "100%", md: "100%" }}>
            <Flex
                direction={"column"}
                p={"1rem"}
                width={{ base: "100%", md: "70%" }}
            >
                <Heading as="h3" textAlign={"center"} fontSize={"1.5rem"}>
                    As ferramentas necessárias para qualquer tibiano!
                </Heading>
                <Text
                    fontSize="md"
                    wordBreak={"break-word"}
                    align={"center"}
                    pt={"1rem"}
                >
                    Construidas com a mais pura e sensível matemática, juntamos
                    as ferramentas mais básicas até as mais específicas capazes
                    de entregar diretamente o que o tibiano mais precisa, dentre
                    elas:
                </Text>
                <Flex direction={"column"} pt={"1rem"}>
                    <List spacing={3} fontSize={"90%"}>
                        <ListItem>
                            <ListIcon as={GiRadarSweep} />
                            Monitoramento de bosses;
                            <Badge ml={"0.25rem"}>Free</Badge>
                            <Badge variant="outline" ml={"0.25rem"}>
                                Premium
                            </Badge>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsCalendarRange} />
                            Previsão de bosses;
                            <Badge variant="outline" ml={"0.25rem"}>
                                Premium
                            </Badge>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsFillCalculatorFill} />
                            Calculdoras de alta precisão;
                            <Badge ml={"0.25rem"}>Free</Badge>
                            <Badge variant="outline" ml={"0.25rem"}>
                                Premium
                            </Badge>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={TbRoute} />
                            Planejamento e rotas de bosscheck;
                            <Badge variant="outline" ml={"0.25rem"}>
                                Premium
                            </Badge>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsWhatsapp} />
                            WhatsApp Simabot;
                            <Badge variant="outline" ml={"0.25rem"}>
                                Premium
                            </Badge>
                        </ListItem>
                        <ListItem color={"gray.500"}>
                            <ListIcon as={RiTeamFill} />
                            Grupo de checagem de boss
                            <Badge
                                variant="subtle"
                                ml={"0.25rem"}
                                colorScheme="purple"
                            >
                                Em breve
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
                        {t("Home_RadarButton")}
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
    );
}

export default HomeSimaBossesText
