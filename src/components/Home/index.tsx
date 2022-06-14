import { Box, Button, Flex, Heading, Text, useDisclosure, Image } from '@chakra-ui/react';
import Head from 'next/head'
import { useState } from 'react';

import { GiRadarSweep, GiCalculator } from 'react-icons/gi'
import { IoTimerOutline, IoLibraryOutline } from 'react-icons/io5'

import HomeSimaBossesText from 'components/HomeSimaBossesText/SimaBosses';
import HomeSimaCalcText from 'components/HomeSimaBossesText/SimaCalc';
import HomeSimaTimer from 'components/HomeSimaBossesText/SimaTimer';
import HomeSimaLibrary from 'components/HomeSimaBossesText/SimaLibrary';
import { Header } from 'components/Header';
import ModalSelectServer from 'components/ModalServerSelect';
import { Footer } from 'components/Footer'
import { useTranslation } from 'hooks/useTranslation';

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
                p={{ base: "5rem 0.5rem", lg: "10rem 0rem" }}
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
                            justify={"space-between"}
                            flexWrap={"wrap"}
                            className="conteinerBtns"
                        >
                            <Button
                                mt={"0.5rem"}
                                bg={"#e1e1e6"}
                                w={"10rem"}
                                h={"5rem"}
                                p={"0.5rem 0rem"}
                                display={"flex"}
                                flexDir={"column"}
                                justifyContent={"space-around"}
                                _hover={{ bg: "#737380" }}
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
                                w={"10rem"}
                                h={"5rem"}
                                p={"0.5rem"}
                                display={"flex"}
                                flexDir={"column"}
                                justifyContent={"space-around"}
                                _hover={{ bg: "#737380" }}
                            >
                                <GiCalculator
                                    style={{ height: "2rem", width: "2rem" }}
                                />
                                SimaCalculadora
                            </Button>
                            <Button
                                mt={"0.5rem"}
                                bg={"#e1e1e6"}
                                w={"10rem"}
                                h={"5rem"}
                                p={"0.5rem"}
                                display={"flex"}
                                flexDir={"column"}
                                justifyContent={"space-around"}
                                _hover={{ bg: "#737380" }}
                            >
                                <IoTimerOutline
                                    style={{ height: "2rem", width: "2rem" }}
                                />
                                SimaTimer
                            </Button>
                            <Button
                                mt={"0.5rem"}
                                bg={"#e1e1e6"}
                                w={"10rem"}
                                h={"5rem"}
                                p={"0.5rem"}
                                display={"flex"}
                                flexDir={"column"}
                                justifyContent={"space-around"}
                                _hover={{ bg: "#737380" }}
                            >
                                <IoLibraryOutline
                                    style={{ height: "2rem", width: "2rem" }}
                                />
                                SimaLibrary
                            </Button>
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
                    <Box w={"60%"} m={"0 auto"} textAlign={"center"}>
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
                                SimaCalc
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
                                className={
                                    conteinerNum == 3 ? "btns ativo" : "btns"
                                }
                            >
                                SimaTimer
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
                            {conteinerNum == 2 ? <HomeSimaCalcText /> : null}
                            {conteinerNum == 3 ? <HomeSimaTimer /> : null}
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
                    p={"1rem 0.5rem"}
                >
                    <Heading as="h1">Quem somos?</Heading>
                    <Heading as="h2" fontSize={"140%"}>
                        SimaGuild ou SimaEquipe?!
                    </Heading>
                    <Text p={"0.5rem 0rem"}>
                        Chegamos aqui não tão só, tudo aqui foi na base da raça
                        e do KS em hunt!
                    </Text>

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
                        Conheça nossa equipe!
                    </Button>
                </Flex>
                <Flex
                    textAlign={"center"}
                    flexDir={"column"}
                    align={"center"}
                    w={{ base: "100%", md: "45%" }}
                    p={"1rem 0.5rem"}
                >
                    <Heading as="h1">Tá com dúvida?</Heading>
                    <Heading as="h2" fontSize={"140%"}>
                        Como funciona, o que é DLD, quando aparece?!
                    </Heading>
                    <Text p={"0.5rem 0rem"}>
                        Já que as informações não são poucas, fizemos um guia
                        ideal para você entender todos os relatórios
                    </Text>

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
                        Saiba mais
                    </Button>
                </Flex>
            </Flex>
            <Footer />
            <ModalSelectServer isOpen={isOpen} onClose={onClose} />
        </>
    );
}
