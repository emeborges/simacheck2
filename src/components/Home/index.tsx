import { Box, Button, Flex, Heading, Text, useDisclosure, Image, Link as LinkChakra, Link } from '@chakra-ui/react';
import Head from 'next/head'
import { useState } from 'react';

import { GiRadarSweep, GiCalculator } from 'react-icons/gi'
import { IoLibraryOutline } from 'react-icons/io5'

import HomeSimaBossesText from 'components/HomeSimaBossesText/SimaBosses';
import HomeSimaLibrary from 'components/HomeSimaBossesText/SimaLibrary';
import { Header } from 'components/Header';
import ModalSelectServer from 'components/ModalServerSelect';
import { Footer } from 'components/Footer'
import { useTranslation } from 'hooks/useTranslation';
import UserPlans from 'components/UserPlans';

export function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [conteinerNum, setConteinerNum] = useState<number>(1)

    const { t } = useTranslation();

    function selectConteiner(num:number) {
        setConteinerNum(num)
    }

    return (
        <>
            <Head>
                <title>SimaCheck</title>
                <meta name="description" content="" />
            </Head>

            <Header page={"home"} />
            <Flex
                maxW={"100%"}
                p={{ base: "3rem 0.5rem", lg: "7rem 0rem 4rem" }}
                justify={"center"}
                align={"center"}
            >
                <Box maxW={"1300px"} margin={"0 auto"}>
                    <Box textAlign={"center"} margin={"0 auto"}>
                        <Heading as="h1">{t("Home_MainCall")}</Heading>
                        <Text>{t("Home_SecoundCall")}</Text>

                        <Flex
                            pt={"1rem"}
                            justify={{
                                base: "space-evenly",
                                md: "space-evenly",
                            }}
                            flexWrap={"wrap"}
                        >
                            <Button
                                mt={"0.5rem"}
                                w={{ base: "8rem", md: "10rem" }}
                                h={"5rem"}
                                p={"0.5rem 0rem"}
                                display={"flex"}
                                flexDir={"column"}
                                justifyContent={"space-around"}
                                transition={"all 0.4s"}
                                _hover={{ bg: "#737380", color: "#fff" }}
                                onClick={onOpen}
                            >
                                <GiRadarSweep
                                    style={{ height: "2rem", width: "2rem" }}
                                />
                                SimaBosses
                            </Button>

                            <Button
                                mt={"0.5rem"}
                                w={{ base: "8rem", md: "10rem" }}
                                h={"5rem"}
                                p={"0.5rem"}
                                display={"flex"}
                                flexDir={"column"}
                                justifyContent={"space-around"}
                                transition={"all 0.4s"}
                                _hover={{ bg: "#737380", color: "#fff" }}
                            >
                                <GiCalculator
                                    style={{ height: "2rem", width: "2rem" }}
                                />
                                SimaCalc
                            </Button>

                            <Button
                                mt={"0.5rem"}
                                w={{ base: "8rem", md: "10rem" }}
                                h={"5rem"}
                                p={"0.5rem"}
                                display={"flex"}
                                flexDir={"column"}
                                justifyContent={"space-around"}
                                transition={"all 0.4s"}
                                _hover={{ bg: "#737380", color: "#fff" }}
                            >
                                <IoLibraryOutline
                                    style={{ height: "2rem", width: "2rem" }}
                                />
                                SimaLibrary
                            </Button>
                        </Flex>

                        <Flex justify={"space-evenly"} pt={"3rem"}>
                            <LinkChakra
                                href={"#HomeTolls"}
                                bg={"transparent"}
                                p={"0.5rem 2rem"}
                                borderRadius={"5px"}
                                fontSize={"1.3rem"}
                                transition={"all 0.2s"}
                                border={"1px solid"}
                                textDecor={"none"}
                                maxW={"20rem"}
                                w={"100%"}
                            >
                                {t("Home_Call")}
                            </LinkChakra>

                            <LinkChakra
                                href={"/"}
                                bg={"#18181B"}
                                p={"0.5rem 2rem"}
                                borderRadius={"5px"}
                                color={"#fff"}
                                fontSize={"1.5rem"}
                                transition={"all 0.2s"}
                                textDecor={"none"}
                                maxW={"20rem"}
                                w={"100%"}
                            >
                                {t("Home_CallRegister")}!
                            </LinkChakra>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
            <Box
                bg={"linear-gradient(to top, #18181B 50%, transparent 50%)"}
                w={"100%"}
            >
                <Box
                    p={"0rem 1rem"}
                    maxW={"1300px"}
                    margin={"0 auto"}
                    borderRadius={"15px"}
                >
                    <Image
                        borderRadius={"15px"}
                        src={
                            "https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/SimaCapa.png"
                        }
                    />
                </Box>
            </Box>

            <Box p={"2rem 0rem"} bg={"#18181B"} w={"100%"} color={"#F5F6FA"}>
                <Box maxW={"1300px"} margin={"0 auto"}>
                    <Box
                        w={"60%"}
                        minW={"300px"}
                        m={"0 auto"}
                        textAlign={"center"}
                        id={"HomeTolls"}
                    >
                        <Heading as="h1" color={"#FEFEFE"} fontWeight={"900"}>
                            {t("Home_Tolls")}
                        </Heading>
                        <Text p={"0.5rem"}>{t("Home_TollsDescription")}</Text>
                    </Box>
                    <Flex
                        direction={"column"}
                        alignItems={"center"}
                        className={"contentTools"}
                        p={"2rem 0rem"}
                    >
                        <Box
                            w={{ base: "98%", md: "80%" }}
                            margin={"0 auto"}
                            display={"grid"}
                            gridTemplateColumns={"repeat(2,1fr)"}
                        >
                            <Box
                                fontSize={{ base: "90%", md: "18px" }}
                                p={"1rem 0"}
                                border={"1px solid #323238"}
                                background={
                                    conteinerNum === 1
                                        ? "rgba(245,246,250,0.1)"
                                        : "none"
                                }
                                textAlign={"center"}
                                cursor={"pointer"}
                                textDecoration={
                                    conteinerNum === 1 ? "underline" : "none"
                                }
                                textDecorationColor={"#BA1813"}
                                borderTopLeftRadius={"5px"}
                                onClick={() => selectConteiner(1)}
                            >
                                SimaTools
                            </Box>
                            <Box
                                fontSize={{ base: "90%", md: "18px" }}
                                p={"1rem 0"}
                                border={"1px solid #323238"}
                                background={
                                    conteinerNum === 2
                                        ? "rgba(245,246,250,0.1)"
                                        : "none"
                                }
                                textAlign={"center"}
                                cursor={"pointer"}
                                borderTopRightRadius={"5px"}
                                textDecoration={
                                    conteinerNum === 2 ? "underline" : "none"
                                }
                                textDecorationColor={"#BA1813"}
                                fontWeight={conteinerNum === 2 ? "700" : "400"}
                                onClick={() => selectConteiner(2)}
                                className={
                                    conteinerNum == 2 ? "btns ativo" : "btns"
                                }
                            >
                                SimaLibrary
                            </Box>
                        </Box>
                        <Box
                            m={"0 auto"}
                            w={{ base: "98%", md: "80%" }}
                            borderBottomRightRadius={"5px"}
                            borderBottomLeftRadius={"5px"}
                            border={"1px solid #323238"}
                        >
                            {conteinerNum == 1 ? <HomeSimaBossesText /> : null}
                            {conteinerNum == 2 ? <HomeSimaLibrary /> : null}
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Flex
                maxW={"1200px"}
                margin={"0 auto"}
                justifyContent={"space-between"}
                alignContent={"center"}
                p={"2rem 0rem"}
                flexWrap={"wrap"}
                w={"100%"}
            >
                <Box
                    m={"0 auto"}
                    textAlign={"center"}
                    id={"HomeTolls"}
                    pb={"1rem"}
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
                        PLANOS
                    </Heading>
                </Box>
                <UserPlans />
            </Flex>

            <Box w={"100%"} bg={"#18181B"} color={"#F5F6FA"}>
                <Flex
                    maxW={"1000px"}
                    margin={"0 auto"}
                    justifyContent={"space-between"}
                    alignContent={"center"}
                    flexWrap={"wrap"}
                    w={"100%"}
                >
                    <Flex
                        textAlign={"center"}
                        flexDir={"column"}
                        align={"center"}
                        w={{ base: "100%", md: "45%" }}
                        p={"1rem 0rem"}
                        maxW={"320px"}
                    >
                        <Heading as="h1">{t("Home_WeAre")}</Heading>
                        <Heading as="h2" fontSize={"140%"}>
                            {t("Home_WeAreGuild")}
                        </Heading>
                        <Text p={"0.5rem 0rem"}>{t("Home_WeAreDesc")}</Text>

                        <Link href={"/faq/team"}>
                            <Button
                                mt={"1rem"}
                                w={{ base: "100%", md: "20rem" }}
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
                                {t("Home_WeAreMeet")}
                            </Button>
                        </Link>
                    </Flex>
                    <Flex
                        textAlign={"center"}
                        flexDir={"column"}
                        align={"center"}
                        w={{ base: "100%", md: "45%" }}
                        p={"1rem 0rem"}
                        maxW={"320px"}
                    >
                        <Heading as="h1">{t("Home_Questions")}</Heading>
                        <Heading as="h2" fontSize={"140%"}>
                            {t("Home_Questions2")}
                        </Heading>
                        <Text p={"0.5rem 0rem"}>
                            {t("Home_QuestionsDescribe")}
                        </Text>

                        <Link href={"/faq/"}>
                            <Button
                                mt={"1rem"}
                                w={{ base: "100%", md: "20rem" }}
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
                                {t("Home_QuestionsButton")}
                            </Button>
                        </Link>
                    </Flex>
                </Flex>
            </Box>
            <Footer />
            <ModalSelectServer isOpen={isOpen} onClose={onClose} />
        </>
    );
}
