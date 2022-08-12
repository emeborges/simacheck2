import {
    Flex,
    Button,
    Box,
    Text,
    ButtonGroup,
    Link as LinkChakra,
} from "@chakra-ui/react";
import { useTranslation } from "hooks/useTranslation";
import Link  from 'next/link'
import { useRouter } from "next/router";
import Marquee from "react-fast-marquee";
import { BsInstagram, BsTwitch, BsYoutube } from "react-icons/bs";

export const Community = () => {
    const { locale, setLocale } = useTranslation();
    const route = useRouter()

     console.log(locale)
    return (
        <Box w={"100%"} bg={"#424244"}>
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
                        <LinkChakra
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
                        </LinkChakra>
                        <LinkChakra
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
                        </LinkChakra>
                        <LinkChakra
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
                        </LinkChakra>
                    </Marquee>
                </Flex>

                <ButtonGroup position={"relative"}>
                    {route.locales?.map((loc) => (
                        <Link href={route.asPath} locale={loc}>
                            <Button
                                size={"xs"}
                                bg={loc === locale ? "#fff" : "#424244"}
                                color={loc === locale ? "#424244" : "#121212"}
                                onClick={() => setLocale(loc)}
                            >
                                {loc.toLocaleUpperCase()}
                            </Button>
                        </Link>
                    ))}
                </ButtonGroup>
            </Flex>
        </Box>
    );
};
