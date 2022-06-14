import {
    Flex,
    Button,
    Box,
    Text,
    ButtonGroup,
    Link,
} from "@chakra-ui/react";
import { useTranslation } from "hooks/useTranslation";
import Marquee from "react-fast-marquee";
import { BsInstagram, BsTwitch, BsYoutube } from "react-icons/bs";

export const Community = () => {
    const { locale, setLocale } = useTranslation();


    return (
        <Box w={"100vw"} bg={"#424244"}>
            <Flex
                justify={"space-between"}
                maxWidth={"1300px"}
                width={"100%"}
                margin={"0 auto"}
                p={"0.5rem"}
            >
                <Flex w={"80%"} maxW={"80%"} pr={"0.5rem"}>
                    <Marquee
                        gradient={false}
                        speed={40}
                        pauseOnClick={true}
                        pauseOnHover={true}
                    >
                        <Link
                            display={"flex"}
                            href={"www.twitch.tv/bttzera"}
                            cursor={"pointer"}
                            alignItems={"center"}
                            flex={"none"}
                            pr={"5rem"}
                            color={"#fff"}
                        >
                            <BsTwitch />
                            <Text fontSize={"0.8rem"} pl={"0.1rem"}>
                                .com/bttzera
                            </Text>
                        </Link>
                        <Link
                            display={"flex"}
                            href={"https://www.youtube.com/c/TibiaFerumbrinha"}
                            cursor={"pointer"}
                            alignItems={"center"}
                            flex={"none"}
                            pr={"5rem"}
                            color={"#fff"}
                        >
                            <BsYoutube />
                            <Text fontSize={"0.8rem"} pl={"0.1rem"}>
                                .com/ferumbrinhas
                            </Text>
                        </Link>
                        <Link
                            display={"flex"}
                            href={"https://www.instagram.com/tibiahome/"}
                            cursor={"pointer"}
                            alignItems={"center"}
                            flex={"none"}
                            pr={"5rem"}
                            color={"#fff"}
                        >
                            <BsInstagram />
                            <Text fontSize={"0.8rem"} pl={"0.1rem"}>
                                .com/tibiahome
                            </Text>
                        </Link>
                    </Marquee>
                </Flex>

                <ButtonGroup position={"relative"}>
                    <Button
                        size={"xs"}
                        bg={locale === "pt" ? "#fff" : "#424244"}
                        color={locale === "pt" ? "#424244" : "#121212"}
                        onClick={() => setLocale("pt")}
                    >
                        PT
                    </Button>
                    <Button
                        size={"xs"}
                        bg={locale === "en" ? "#fff" : "#424244"}
                        color={locale === "en" ? "#424244" : "#121212"}
                        onClick={() => setLocale("en")}
                    >
                        EN
                    </Button>
                </ButtonGroup>
            </Flex>
        </Box>
    );
};
