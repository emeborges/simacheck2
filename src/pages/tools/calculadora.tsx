import {  Box, Flex,} from '@chakra-ui/react';
import Head from 'next/head'
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { withsLogin } from 'utils/withsLogin';

interface Props {
    acess: boolean;
}

const Index = ({ acess }: Props) => {
    return (
        <Flex
            minH={"100vh"}
            align={"space-between"}
            flexDir={"column"}
            justify={"space-between"}
        >
            <Head>
                <title>Calculadoras - SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Box>
                <Header page={"tools"} acess={acess} />
            </Box>
            <Flex
                flexDir={"column"}
                h={"100%"}
                w={"100%"}
                maxW={"1300px"}
                margin={"0 auto"}
            >
                {/* <Flex align={"center"} flexDir={"column"} w={"100%"} mb={'0.5rem'}>
                    <Heading
                        fontSize={{ base: "0.8rem", md: "2rem" }}
                        position={"relative"}
                        _after={{
                            content: "''",
                            width: "35px",
                            height: "8%",
                            position: "absolute",
                            bottom: 1,
                            left: 0,
                            bg: "red.400",
                            zIndex: -1,
                        }}
                    >
                        SimaCalc
                    </Heading>
                    <Text>Você nunca viu tanta precisão!</Text>
                </Flex>
                <Box>
                    <Tabs isFitted variant="line" w={"100%"} align={"center"}>
                        <TabList>
                            <Tab _selected={{ borderColor: "red" }}>
                                <Heading
                                    fontSize={{ base: "0.8rem", md: "1rem" }}
                                    position={"relative"}
                                    _after={{
                                        content: "''",
                                        width: "15px",
                                        height: "8%",
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        bg: "red.400",
                                        zIndex: -1,
                                    }}
                                >
                                    SimaSkills
                                </Heading>
                            </Tab>
                            <Tab _selected={{ borderColor: "red" }}>
                                <Heading
                                    fontSize={{ base: "0.8rem", md: "1rem" }}
                                    position={"relative"}
                                    _after={{
                                        content: "''",
                                        width: "15px",
                                        height: "8%",
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        bg: "red.400",
                                        zIndex: -1,
                                    }}
                                >
                                    SimaLoot
                                </Heading>
                            </Tab>

                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                texte
                            </TabPanel>
                            <TabPanel>
                                <SplitLoot />
                            </TabPanel>

                        </TabPanels>
                    </Tabs>
                </Box>*/}
            </Flex>
            <Footer />
        </Flex>
    );
};

export default Index


export const getServerSideProps = withsLogin();
