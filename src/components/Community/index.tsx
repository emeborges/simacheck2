import { MoonIcon, SettingsIcon, SunIcon } from "@chakra-ui/icons";
import {
    Flex,
    Button,
    Box,
    Text,
    ButtonGroup,
    Link as LinkChakra,
    useColorMode,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
} from "@chakra-ui/react";
import { useTranslation } from "hooks/useTranslation";
import Link  from 'next/link'
import { useRouter } from "next/router";
import Marquee from "react-fast-marquee";
import { BsInstagram, BsTwitch, BsYoutube } from "react-icons/bs";

export const Community = () => {
    const { locale, setLocale } = useTranslation();
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const route = useRouter()

    return (
        <Box w={"100%"} bg={"#424244"}>
            <Flex
                justify={"space-between"}
                maxWidth={"1300px"}
                width={"100%"}
                margin={"0 auto"}
                p={"0.5rem"}
            >
                <Flex w={"85%"} maxW={"85%"} pr={"0.5rem"}>
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
                <Flex
                    display={["none", "none", "flex", "flex"]}
                    justify={"right"}
                >
                    <ButtonGroup position={"relative"}>
                        {route.locales?.map((loc) => (
                            <Link href={route.asPath} key={loc} locale={loc}>
                                <Button
                                    size={"xs"}
                                    variant={loc === locale ? "solid" : "ghost"}
                                    onClick={() => setLocale(loc)}
                                    colorScheme="gray"
                                    fontWeight={
                                        loc === locale ? "semibold" : "light"
                                    }
                                >
                                    {loc.toLocaleUpperCase()}
                                </Button>
                            </Link>
                        ))}
                        {colorMode === "light" ? (
                            <IconButton
                                size={"xs"}
                                onClick={() => toggleColorMode()}
                                aria-label={""}
                                icon={<SunIcon />}
                            />
                        ) : (
                            <IconButton
                                size={"xs"}
                                onClick={() => toggleColorMode()}
                                aria-label={""}
                                icon={<MoonIcon />}
                            />
                        )}
                    </ButtonGroup>
                </Flex>
                <Flex
                    display={["flex", "flex", "none", "none"]}
                    justify={"right"}
                >
                    <IconButton
                        size={"sm"}
                        onClick={onOpen}
                        aria-label={""}
                        icon={<SettingsIcon />}
                    >
                        a
                    </IconButton>

                    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Configurações</DrawerHeader>

                            <DrawerBody
                                display={"flex"}
                                flexDir={"column"}
                                gap={"1rem"}
                            >
                                <Box>
                                    <Text fontSize={"0.8rem"}>Linguagem</Text>
                                    <ButtonGroup width={"100%"} isAttached>
                                        {route.locales?.map((loc) => (
                                            <Button
                                                width={"50%"}
                                                variant={
                                                    loc === locale
                                                        ? "solid"
                                                        : "outline"
                                                }
                                                onClick={() => (
                                                    route.push(route.asPath),
                                                    setLocale(loc)
                                                )}
                                                colorScheme="gray"
                                                fontWeight={
                                                    loc === locale
                                                        ? "semibold"
                                                        : "light"
                                                }
                                            >
                                                {loc.toLocaleUpperCase()}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </Box>
                                <Box>
                                    <Text fontSize={"0.8rem"}>ColorMode</Text>
                                    <ButtonGroup width={"100%"} isAttached>
                                        <IconButton
                                            onClick={() => toggleColorMode()}
                                            width={"50%"}
                                            aria-label={""}
                                            icon={<SunIcon />}
                                            variant={
                                                colorMode === "light"
                                                    ? "solid"
                                                    : "outline"
                                            }
                                        />
                                        <IconButton
                                            onClick={() => toggleColorMode()}
                                            aria-label={""}
                                            width={"50%"}
                                            icon={<MoonIcon />}
                                            variant={
                                                colorMode != "light"
                                                    ? "solid"
                                                    : "outline"
                                            }
                                        />
                                    </ButtonGroup>
                                </Box>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            </Flex>
        </Box>
    );
};
