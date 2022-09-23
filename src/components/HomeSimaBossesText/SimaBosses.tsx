import { Flex, Heading, Text, List, ListIcon, ListItem, Button } from "@chakra-ui/react"

import { IoMapSharp } from 'react-icons/io5'
import { MdOutlineGroups } from 'react-icons/md'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { BsArrowDownUp } from 'react-icons/bs'
import { useTranslation } from "hooks/useTranslation"



const HomeSimaBossesText: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Flex justify={"space-around"} width={{ base: "100%", md: "100%" }}>
            <Flex
                direction={"column"}
                p={"1rem"}
                width={{ base: "100%", md: "70%" }}
            >
                <Heading as="h2" textAlign={"center"}>
                    {t("Home_RadarDefine")}
                </Heading>
                <Text
                    fontSize="md"
                    wordBreak={"break-word"}
                    align={"center"}
                    pt={"1rem"}
                >
                    {t("Home_RadarObjetive")}
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
                            <ListIcon as={BsArrowDownUp} />
                            {t("Home_RadarChance")}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdOutlineGroups} />
                            {t("Home_RadarGroupingLores")}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMapSharp} />
                            {t("Home_RadarGroupingCities")}
                        </ListItem>
                        <ListItem>
                            <ListIcon as={AiTwotoneCalendar} />
                            {t("Home_RadarPreview")}
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
                        {t("Home_RadarButton")}
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

export default HomeSimaBossesText
