import { Flex, Heading, Text, List, ListIcon, ListItem, Button } from "@chakra-ui/react"

import { GiSwordsEmblem, GiShieldReflect } from 'react-icons/gi'
import { BsCalculator } from 'react-icons/bs'
import { FiDivideCircle } from 'react-icons/fi'
import { useTranslation } from "hooks/useTranslation"



const HomeSimaCalcText: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Flex justify={"space-around"} width={{ base: "100%", md: "100%" }}>
            <Flex
                direction={"column"}
                p={"1rem"}
                width={{ base: "100%", md: "70%" }}
            >
                <Heading as="h2" textAlign={"center"}>
                    {t("Home_CalcDefine")}
                </Heading>
                <Text
                    fontSize="md"
                    wordBreak={"break-word"}
                    align={"center"}
                    pt={"1rem"}
                >
                    {t("Home_CalcDefine")}
                </Text>
                <Flex direction={"column"}>
                    <Text
                        fontSize="md"
                        wordBreak={"break-word"}
                        align={"center"}
                        pt={"0.5rem"}
                    >
                        {t("Home_Find")}
                    </Text>
                    <List spacing={3} fontSize={"90%"}>
                        <ListItem>
                            <ListIcon as={FiDivideCircle} />
                            {t("Home_CalcLoot")}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsCalculator} />
                            {t("Home_CalcTraining")}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GiSwordsEmblem} />
                            {t("Home_CalcHunts")}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GiShieldReflect} />
                            {t("Home_CalcImbui")}
                        </ListItem>
                        <ListItem>...</ListItem>
                    </List>
                </Flex>

                <Flex
                    justifyContent={"center"}
                    direction={{ base: "column", md: "row" }}
                >
                    <Button
                        mt={"1rem"}
                        w={{ base: "100%", md: "30rem" }}
                        border={"1px solid #fff"}
                        fontSize={{ base: "90%", md: "90%" }}
                        bg={"#121214"}
                        wordBreak={"break-all"}
                        color={"#fff"}
                        whiteSpace={"normal"}
                        _hover={{
                            color: "#121214",
                            bg: "#fff",
                            border: "1px solid #121214",
                        }}
                    >
                        {t("Home_CalcButton")}
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
    );
}

export default HomeSimaCalcText
