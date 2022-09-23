import { Box, Button, Flex, Heading, Text, useDisclosure, Image, Link as LinkChakra } from '@chakra-ui/react';
import Head from 'next/head'
import { useState } from 'react';

import { GiRadarSweep, GiCalculator } from 'react-icons/gi'
import { IoLibraryOutline } from 'react-icons/io5'
import { FaWhatsappSquare } from "react-icons/fa";

import HomeSimaBossesText from 'components/HomeSimaBossesText/SimaBosses';
import HomeSimaCalcText from 'components/HomeSimaBossesText/SimaCalc';
import HomeSimaLibrary from 'components/HomeSimaBossesText/SimaLibrary';
import { Header } from 'components/Header';
import ModalSelectServer from 'components/ModalServerSelect';
import { Footer } from 'components/Footer'
import { useTranslation } from 'hooks/useTranslation';
import Link from 'next/link';
import HomeSimaBot from 'components/HomeSimaBossesText/SimaBot';

export function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [conteinerNum, setConteinerNum] = useState<number>(2)
    const { t } = useTranslation();

    function selectConteiner(num:number) {
        setConteinerNum(num)
    }

    /*const imagensPatro = ['https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/SimaCapa.png',
    'https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/CyfCapa.png',
    'https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/bttCapa.png']
    */
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
                        <Text>{t("Home_Call")}</Text>

                        <Flex
                            pt={"1rem"}
                            justify={{
                                base: "space-evenly",
                                md: "space-between",
                            }}
                            flexWrap={"wrap"}
                        >
                            <Button
                                mt={"0.5rem"}
                                bg={"#e1e1e6"}
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
                                bg={"#e1e1e6"}
                                w={{ base: "8rem", md: "10rem" }}
                                h={"5rem"}
                                p={"0.5rem"}
                                display={"flex"}
                                flexDir={"column"}
                                justifyContent={"space-around"}
                                transition={"all 0.4s"}
                                _hover={{ bg: "#737380", color: "#fff" }}
                            >
                                <FaWhatsappSquare
                                    style={{ height: "2rem", width: "2rem" }}
                                />
                                SimaBot
                            </Button>

                            <Button
                                mt={"0.5rem"}
                                bg={"#e1e1e6"}
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
                                bg={"#e1e1e6"}
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

                        <Flex justify={"center"} pt={"3rem"}>
                            <LinkChakra
                                href={"/"}
                                bg={"#121214"}
                                p={"0.5rem 2rem"}
                                borderRadius={"5px"}
                                color={"#fff"}
                                fontSize={"1.5rem"}
                                transition={"all 0.2s"}
                                textDecor={"none"}
                            >
                                {t("Home_CallRegister")}!
                            </LinkChakra>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
            <Box
                bg={"linear-gradient(to top, #121214 50%, #F5F6FA 50%)"}
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

            <Box p={"3rem 0rem"} bg={"#121214"} w={"100%"} color={"#F5F6FA"}>
                <Box maxW={"1300px"} margin={"0 auto"}>
                    <Box
                        w={"60%"}
                        minW={"300px"}
                        m={"0 auto"}
                        textAlign={"center"}
                    >
                        <Heading as="h1" color={"#FEFEFE"} fontWeight={"900"}>
                            {t("Home_Tolls")}
                        </Heading>
                        <Text p={"0.5rem"}>{t("Home_TollsDescription")}</Text>
                        <Text>{t("Home_Call")}</Text>
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
                            gridTemplateColumns={"repeat(4,1fr)"}
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
                                SimaBosses
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
                                textDecoration={
                                    conteinerNum === 2 ? "underline" : "none"
                                }
                                textDecorationColor={"#BA1813"}
                                fontWeight={conteinerNum === 2 ? "700" : "400"}
                                onClick={() => selectConteiner(2)}
                            >
                                SimaBot
                            </Box>
                            <Box
                                fontSize={{ base: "90%", md: "18px" }}
                                p={"1rem 0"}
                                border={"1px solid #323238"}
                                background={
                                    conteinerNum === 3
                                        ? "rgba(245,246,250,0.1)"
                                        : "none"
                                }
                                textAlign={"center"}
                                cursor={"pointer"}
                                textDecoration={
                                    conteinerNum === 3 ? "underline" : "none"
                                }
                                textDecorationColor={"#BA1813"}
                                fontWeight={conteinerNum === 3 ? "700" : "400"}
                                onClick={() => selectConteiner(3)}
                            >
                                SimaCalc
                            </Box>
                            <Box
                                fontSize={{ base: "90%", md: "18px" }}
                                p={"1rem 0"}
                                border={"1px solid #323238"}
                                background={
                                    conteinerNum === 4
                                        ? "rgba(245,246,250,0.1)"
                                        : "none"
                                }
                                textAlign={"center"}
                                cursor={"pointer"}
                                borderTopRightRadius={"5px"}
                                textDecoration={
                                    conteinerNum === 4 ? "underline" : "none"
                                }
                                textDecorationColor={"#BA1813"}
                                fontWeight={conteinerNum === 4 ? "700" : "400"}
                                onClick={() => selectConteiner(4)}
                                className={
                                    conteinerNum == 4 ? "btns ativo" : "btns"
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
                            {conteinerNum == 2 ? <HomeSimaBot /> : null}
                            {conteinerNum == 3 ? <HomeSimaCalcText /> : null}
                            {conteinerNum == 4 ? <HomeSimaLibrary /> : null}
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Flex
                maxW={"1300px"}
                margin={"0 auto"}
                justifyContent={"space-between"}
                alignContent={"center"}
                p={"1rem 0rem"}
                flexWrap={"wrap"}
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
                            w={"20rem"}
                            bg={"#121214"}
                            color={"#F5F6FA"}
                            _hover={{
                                color: "#121214",
                                bg: "#F5F6FA",
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
                    <Text p={"0.5rem 0rem"}>{t("Home_QuestionsDescribe")}</Text>

                    <Link href={"/faq/"}>
                        <Button
                            mt={"1rem"}
                            w={"20rem"}
                            bg={"#121214"}
                            color={"#F5F6FA"}
                            _hover={{
                                color: "#121214",
                                bg: "#F5F6FA",
                                border: "1px solid #121214",
                            }}
                        >
                            {t("Home_QuestionsButton")}
                        </Button>
                    </Link>
                </Flex>
            </Flex>
            <Footer />
            <ModalSelectServer isOpen={isOpen} onClose={onClose} />
        </>
    );
}
