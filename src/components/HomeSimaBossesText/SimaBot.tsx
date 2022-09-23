import { Flex, Heading, Text, List, ListIcon, ListItem, Button } from "@chakra-ui/react"

import { GiRadarSweep, GiCalculator } from "react-icons/gi";
import { useTranslation } from "hooks/useTranslation"

const HomeSimaBot: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <Flex justify={"space-around"}>
                <Flex
                    direction={"column"}
                    p={"1rem"}
                    width={{ base: "100%", md: "70%" }}
                >
                    <Heading as="h2" textAlign={"center"}>
                        {t("Home_BotDefine")}
                    </Heading>
                    <Text
                        fontSize="md"
                        wordBreak={"break-word"}
                        align={"center"}
                        pt={"1rem"}
                    >
                        {t("Home_BotObjetive")}
                    </Text>
                    <Flex direction={"column"}>
                        <Text
                            fontSize="md"
                            wordBreak={"break-word"}
                            align={"center"}
                            p={"0.5rem"}
                        >
                            {t("Home_BotCall")}
                        </Text>
                        <List spacing={5} fontSize={"90%"}>
                            <ListItem>
                                <ListIcon as={GiRadarSweep} />
                                {t("Home_BotRotes")}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={GiCalculator} />
                                {t("Home_BotCalcs")}
                            </ListItem>
                            <ListItem>{t("Home_BotEnd")}</ListItem>

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
                            border={"1px solid #fff"}
                            fontSize={{ base: "90%", md: "90%" }}
                            bg={"#121214"}
                            whiteSpace={"normal"}
                            color={"#fff"}
                            _hover={{
                                color: "#121214",
                                bg: "#fff",
                                border: "1px solid #121214",
                            }}
                        >
                            {t("Home_BotButton")}
                        </Button>

                        <Button
                            mt={"1rem"}
                            w={{ base: "100%", md: "30rem" }}
                            ml={{ md: "0rem", lg: "1rem" }}
                            color={"#121214"}
                            whiteSpace={"normal"}
                            _hover={{
                                border: "1px solid #fff",
                                bg: "#121214",
                                color: "#fff",
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

export default HomeSimaBot
