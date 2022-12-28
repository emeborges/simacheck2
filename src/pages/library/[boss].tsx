import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Head from 'next/head'

import { Container } from "../../styles/pages/tools";
import { Header } from 'components/Header';
import { useRouter } from 'next/router';
import { FaExchangeAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { api } from 'utils/services';
import { BossDetailsProps } from "utils/types";

const Index = () => {
    const route = useRouter();
    const pid: any = route.query.boss;
    const [load, setLoad] = useState(true);
    const [boss, setBosses] = useState<BossDetailsProps>();

    useEffect(() => {
        setLoad(true);
        async function getBoss() {
            const { data } = await api.get(`bosses/Ferumbras`, {
                headers: { Locale: `${route.locale}` },
            });

            setBosses(data);

            setLoad(false);
        }
        getBoss();
    }, [pid]);

    return (
        <Container>
            <Box maxW={"100vw"} h={"100vh"}>
                <Head>
                    <title>{pid} - Radar SimaCheck</title>
                    <meta name="description" content="" />
                </Head>
                <Header page={"library"} />
                <Box w={"100%"} maxW={"1300px"} margin={"0 auto"}>
                    <Flex
                        flexDir={{ base: "column", md: "row" }}
                        justify={"space-between"}
                        align={"center"}
                        p={"0.5rem 0rem"}
                        minH={"5rem"}
                    >
                        <Flex
                            m={{ base: "0.25rem 0rem", md: "none" }}
                            borderRadius={"5px"}
                            boxShadow={"0px 0px 5px #323238"}
                            p={"0.5rem"}
                            h={"10rem"}
                            w={{ base: "99%", md: "30%" }}
                            align={"center"}
                            justify={"space-around"}
                        >
                            <Flex
                                w={"50%"}
                                direction={"column"}
                                align={"center"}
                                textAlign={"center"}
                            >
                                <Image src={boss?.gif_url} height={"8rem"} />
                            </Flex>

                            <Flex
                                w={"50%"}
                                direction={"column"}
                                align={"center"}
                                h={"70%"}
                                justify={"space-between"}
                                textAlign={"center"}
                            >
                                <Box>
                                    <Text
                                        fontSize={"1.1rem"}
                                        fontWeight={"600"}
                                    >
                                        {boss?.boss}
                                    </Text>
                                    <Text
                                        fontSize={"0.8rem"}
                                        fontWeight={"500"}
                                    >
                                        {boss?.lore}
                                    </Text>
                                </Box>

                                <Text
                                    fontSize={"0.8rem"}
                                    fontWeight={"600"}
                                    color={"#FF6600"}
                                    fontFamily={"Verdana,Tahoma"}
                                    textShadow={
                                        "0.1em 0.1em 0.08em #000, -0.1em -0.1em 0.08em #000, 0.1em -0.1em 0.08em #000, -0.1em 0.1em 0.08em #000, -0.1em 0 0.08em #000, 0.1em 0 0.08em #000"
                                    }
                                >
                                    "NO ONE WILL STOP ME THIS TIME!"
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex
                            m={{ base: "0.25rem 0rem", md: "none" }}
                            borderRadius={"5px"}
                            boxShadow={"0px 0px 5px #323238"}
                            h={"10rem"}
                            minH={"10rem"}
                            w={{ base: "99%", md: "69%" }}
                            align={"center"}
                            justify={"space-around"}
                            direction={"column"}
                        >
                            <Flex
                                align={"center"}
                                justify={"center"}
                                flexWrap={"wrap"}
                                minW={"100%"}
                                css={{
                                    "&::-webkit-scrollbar": {
                                        width: "10px",
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        background: "#ffffff",
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        background: "#323238",
                                        border: "3px solid #ffffff",
                                    },
                                }}
                                overflowY={"auto"}
                                overflowX={"hidden"}
                            >
                                asdfasd
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </Container>
    );}

export default Index
