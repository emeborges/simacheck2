import { Box, Flex, Text, Image, Popover, useDisclosure, PopoverTrigger, PopoverContent, PopoverCloseButton, Tabs, TabList, Tab, TabPanels, TabPanel, Heading, Divider, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";
import Head from 'next/head'
import { color } from "../../utils/gerals";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { api } from 'utils/services';
import { BossDetailsProps } from "utils/types";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { withsLogin } from "utils/withsLogin";

interface Props {
    acess: boolean;
}

const Index = ({ acess }: Props) => {
    const route = useRouter();
    const pid: any = route.query.boss;
    const [load, setLoad] = useState(true);
    const { onOpen, onClose, isOpen } = useDisclosure();
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

    console.log(load);

    return (
        <Flex
            minH={"100vh"}
            align={"space-between"}
            flexDir={"column"}
            justify={"space-between"}
        >
            <Head>
                <title>{pid} - Wiki SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Box>
                <Header page={"library"} acess={acess} />
            </Box>
            <Flex
                w={"100%"}
                minH={"100vh"}
                maxW={"1300px"}
                margin={"0 auto"}
                direction={{ base: "column", md: "row" }}
            >
                <Flex
                    flexDir={{ base: "column", md: "column" }}
                    justify={"space-between"}
                    align={"center"}
                    p={"0.5rem 0rem"}
                    gap={"0.25rem"}
                    maxW={{ base: "100%", md: "20rem" }}
                >
                    <Flex
                        m={{ base: "0.25rem 0rem", md: "none" }}
                        shadow={
                            "0 0 5px 0 rgb(0 0 0 / 20%), 0 0 5px 0 rgb(0 0 0 / 20%)"
                        }
                        p={"0.5rem"}
                        h={"8rem"}
                        w={{ base: "99%", md: "100%" }}
                        align={"center"}
                        justify={"space-around"}
                        gap={"0.25rem"}
                    >
                        <Flex align={"center"} textAlign={"center"}>
                            <Image src={boss?.gif_url} height={"8rem"} />
                        </Flex>
                    </Flex>
                    <Flex
                        m={{ base: "0.25rem 0rem", md: "none" }}
                        shadow={
                            "0 0 5px 0 rgb(0 0 0 / 20%), 0 0 5px 0 rgb(0 0 0 / 20%)"
                        }
                        h={"100%"}
                        p={"0.5rem"}
                        w={{ base: "100%", md: "100%" }}
                        align={"center"}
                        justify={"space-around"}
                        direction={"column"}
                        gap={"0.5rem"}
                    >
                        <Flex
                            w={"100%"}
                            direction={"column"}
                            align={"center"}
                            justify={"space-between"}
                            textAlign={"center"}
                            whiteSpace={"normal"}
                            maxW={"15rem"}
                            gap={"0.5rem"}
                            m={"1rem 0"}
                        >
                            <Heading
                                as={"h3"}
                                fontSize={"1rem"}
                                position={"relative"}
                                _after={{
                                    content: "''",
                                    width: "20px",
                                    height: "8%",
                                    position: "absolute",
                                    bottom: 0.5,
                                    left: 0,
                                    bg: "red.400",
                                    zIndex: -1,
                                }}
                                mb={"0.5rem"}
                                w={"100%"}
                                textAlign={"left"}
                            >
                                Boss:
                            </Heading>
                            <Box>
                                <Text fontSize={"1.1rem"} fontWeight={"600"}>
                                    {boss?.boss}
                                </Text>
                                <Text fontSize={"0.8rem"} fontWeight={"500"}>
                                    {boss?.lore}
                                </Text>
                            </Box>

                            <Text
                                fontSize={"0.75rem"}
                                fontWeight={"600"}
                                color={"#FF6600"}
                                fontFamily={"Verdana,Tahoma"}
                                whiteSpace={"normal"}
                                textShadow={
                                    "0.1em 0.1em 0.08em #000, -0.1em -0.1em 0.08em #000, 0.1em -0.1em 0.08em #000, -0.1em 0.1em 0.08em #000, -0.1em 0 0.08em #000, 0.1em 0 0.08em #000"
                                }
                            >
                                "NO ONE WILL STOP ME THIS TIME!"
                            </Text>
                        </Flex>
                        <Flex
                            w={"100%"}
                            align={"center"}
                            justify={"space-around"}
                            textAlign={"center"}
                        >
                            <Flex
                                h={"100%"}
                                direction={"column"}
                                justify={"center"}
                                maxW={"5rem"}
                                w={"100%"}
                                gap={"0.5rem"}
                            >
                                <Flex
                                    justify={"center"}
                                    w={"100%"}
                                    align={"center"}
                                >
                                    <Flex h={"12px"} w={"12px"} mr={"0.25rem"}>
                                        <Image src={"/img/Hearthp.png"} />
                                    </Flex>
                                    <Flex
                                        borderTop={`3px solid ${color(1)}`}
                                        w={"70%"}
                                        justify={"center"}
                                    >
                                        <Text
                                            color={color(1)}
                                            fontWeight={"bold"}
                                            fontSize={"0.8rem"}
                                        >
                                            90.000
                                        </Text>
                                    </Flex>
                                </Flex>
                                <Flex
                                    justify={"center"}
                                    w={"100%"}
                                    align={"center"}
                                >
                                    <Flex h={"12px"} w={"12px"} mr={"0.25rem"}>
                                        <Image src={"/img/Xpbestiary.png"} />
                                    </Flex>
                                    <Flex w={"70%"} justify={"center"}>
                                        <Text
                                            color={"#fff"}
                                            textShadow={
                                                "-1.5px 0 black, 0 1.5px black, 1.5px 0 black, 0 -1.5px black"
                                            }
                                            fontSize={"0.8rem"}
                                        >
                                            12.000
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex>
                                <Flex
                                    h={"100%"}
                                    direction={"column"}
                                    justify={"center"}
                                    maxW={"5rem"}
                                    w={"100%"}
                                >
                                    <Flex direction={"column"}>
                                        <Text
                                            fontSize={"0.6rem"}
                                            textAlign={"left"}
                                        >
                                            Categoria:
                                        </Text>
                                        <Flex align={"center"} gap={"0.25rem"}>
                                            <Popover
                                                isOpen={isOpen}
                                                onOpen={onOpen}
                                                onClose={onClose}
                                                placement="right"
                                                closeOnBlur={false}
                                            >
                                                <PopoverTrigger>
                                                    <Flex align={"center"}>
                                                        <Image
                                                            src={
                                                                "/img/nemesis.png"
                                                            }
                                                            maxH={"12px"}
                                                        />
                                                        <Text
                                                            cursor={"pointer"}
                                                        >
                                                            Nemesis
                                                        </Text>
                                                    </Flex>
                                                </PopoverTrigger>
                                                <PopoverContent p={"1rem"}>
                                                    <PopoverCloseButton />
                                                    <Flex direction={"column"}>
                                                        <Box>
                                                            1 Morte - 10 pontos
                                                        </Box>
                                                        <Box>
                                                            10 Morte - 100
                                                            pontos
                                                        </Box>
                                                        <Box>
                                                            100 Morte - 1000
                                                            pontos
                                                        </Box>
                                                    </Flex>
                                                </PopoverContent>
                                            </Popover>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        m={{ base: "0.25rem 0rem", md: "none" }}
                        shadow={
                            "0 0 5px 0 rgb(0 0 0 / 20%), 0 0 5px 0 rgb(0 0 0 / 20%)"
                        }
                        p={"0.5rem"}
                        h={"100%"}
                        w={{ base: "99%", md: "100%" }}
                        align={"center"}
                        justify={"space-around"}
                        gap={"0.25rem"}
                        flexDir={"column"}
                    >
                        <Heading
                            as={"h5"}
                            fontSize={"1rem"}
                            position={"relative"}
                            _after={{
                                content: "''",
                                width: "20px",
                                height: "8%",
                                position: "absolute",
                                bottom: 0.5,
                                left: 0,
                                bg: "red.400",
                                zIndex: -1,
                            }}
                            mb={"0.5rem"}
                        >
                            Cidade Base
                        </Heading>
                        <iframe
                            height={"350px"}
                            src={`https://tibiamaps.io/map/embed#32368,32198,7:1`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </Flex>
                </Flex>
                <Flex
                    flexDir={{ base: "column", md: "column" }}
                    justify={"space-between"}
                    align={"center"}
                    p={"0.5rem 0.75rem"}
                    gap={"0.25rem"}
                    w={"100%"}
                >
                    <Flex
                        m={{ base: "0.25rem 0rem", md: "none" }}
                        shadow={
                            "0 0 5px 0 rgb(0 0 0 / 20%), 0 0 5px 0 rgb(0 0 0 / 20%)"
                        }
                        p={"0.5rem"}
                        h={"100%"}
                        w={"100%"}
                        gap={"0.25rem"}
                    >
                        <Tabs w={"100%"} variant={"line"}>
                            <TabList>
                                <Tab
                                    _selected={{
                                        fontWeight: "bold",
                                        borderColor: "red",
                                    }}
                                >
                                    Geral
                                </Tab>
                                <Tab
                                    _selected={{
                                        fontWeight: "bold",
                                        borderColor: "red",
                                    }}
                                >
                                    Stats
                                </Tab>
                                <Tab
                                    _selected={{
                                        fontWeight: "bold",
                                        borderColor: "red",
                                    }}
                                    isDisabled
                                >
                                    Respawns
                                </Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel p={"1rem"}>
                                    <Flex
                                        h={"100%"}
                                        w={"100%"}
                                        direction={"column"}
                                    >
                                        <Flex
                                            m={"0.5rem 0"}
                                            justifyContent={"space-between"}
                                            w={"100%"}
                                        >
                                            <Stat>
                                                <StatLabel>
                                                    RankingCheck
                                                </StatLabel>
                                                <StatNumber>Top4</StatNumber>
                                                <StatHelpText>
                                                    <StatArrow type="increase" />
                                                    23.36%
                                                </StatHelpText>
                                            </Stat>
                                            <Stat>
                                                <StatLabel>
                                                    RankingCheck
                                                </StatLabel>
                                                <StatNumber>Top4</StatNumber>
                                                <StatHelpText>
                                                    <StatArrow type="increase" />
                                                    23.36%
                                                </StatHelpText>
                                            </Stat>
                                            <Stat>
                                                <StatLabel>
                                                    RankingCheck
                                                </StatLabel>
                                                <StatNumber>Top4</StatNumber>
                                                <StatHelpText>
                                                    <StatArrow type="increase" />
                                                    23.36%
                                                </StatHelpText>
                                            </Stat>
                                        </Flex>
                                        <Heading
                                            as={"h3"}
                                            fontSize={"1rem"}
                                            position={"relative"}
                                            _after={{
                                                content: "''",
                                                width: "20px",
                                                height: "8%",
                                                position: "absolute",
                                                bottom: 0.5,
                                                left: 0,
                                                bg: "red.400",
                                                zIndex: -1,
                                            }}
                                            mb={"0.5rem"}
                                        >
                                            História
                                        </Heading>

                                        <Text fontSize={"14px"}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Donec
                                            in blandit erat. Fusce massa leo,
                                            euismod eget tristique vel,
                                            convallis eu lectus. Pellentesque id
                                            lorem ut eros scelerisque pulvinar a
                                            non mi. Mauris in maximus dolor, et
                                            elementum ante. Cras scelerisque in
                                            erat nec lobortis. Proin non
                                            pulvinar nisl, eu malesuada metus.
                                            Morbi vitae erat lobortis, tempus
                                            dui at, tincidunt nisi. In hac
                                            habitasse platea dictumst. Integer
                                            vulputate vel sem eu accumsan. Fusce
                                            vel mattis dui, ut viverra nisi.
                                            Duis sodales quis metus quis
                                            iaculis. Nulla volutpat nec risus
                                            eget faucibus. Nullam et sapien
                                            imperdiet, consequat est eget,
                                            accumsan ligula. Vestibulum ante
                                            ipsum primis in faucibus orci luctus
                                            et ultrices posuere cubilia curae;
                                            Etiam fringilla nisl a cursus
                                            malesuada. Integer diam urna,
                                            commodo in vestibulum in, commodo
                                            quis diam. Aliquam faucibus est
                                            molestie lorem semper efficitur ac
                                            sed quam. Fusce sed ligula semper,
                                            fringilla eros in, vulputate dolor.
                                            Morbi eu nibh eget tortor pharetra
                                            tristique. Phasellus elementum eu
                                            purus at pulvinar. Sed sed sem ac
                                            quam sollicitudin sagittis in
                                            sodales libero. Nam in faucibus
                                            massa. Donec mauris mi, posuere quis
                                            sapien eu, vulputate hendrerit mi.
                                            Phasellus tristique lobortis tellus,
                                            ut tristique urna lacinia et.
                                            <br />
                                            Phasellus ligula lacus, lobortis non
                                            porttitor nec, bibendum vel augue.
                                            Aliquam a consequat neque, id
                                            feugiat dolor. In tincidunt odio
                                            lorem, vel fermentum lectus varius
                                            a. Nulla libero metus, porttitor
                                            vitae vulputate nec, sagittis quis
                                            ante. Fusce elementum at tellus ac
                                            ornare. Fusce eu magna dictum,
                                            imperdiet nisi nec, sollicitudin
                                            nisl. Donec purus nibh, ultricies eu
                                            tortor at, tempor tempor leo.
                                        </Text>
                                        <Flex justify={"center"} w={"100%"}>
                                            <Divider
                                                m={"1rem 0"}
                                                width={"50%"}
                                                textAlign={"center"}
                                            />
                                        </Flex>
                                        <Heading
                                            as={"h3"}
                                            fontSize={"1rem"}
                                            position={"relative"}
                                            _after={{
                                                content: "''",
                                                width: "20px",
                                                height: "8%",
                                                position: "absolute",
                                                bottom: 0.5,
                                                left: 0,
                                                bg: "red.400",
                                                zIndex: -1,
                                            }}
                                            mb={"0.5rem"}
                                        >
                                            Prints
                                        </Heading>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <p>two!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>three!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Flex>
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    );
};

export default Index

export const getServerSideProps = withsLogin();
