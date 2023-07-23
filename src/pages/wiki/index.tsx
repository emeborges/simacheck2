import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    SimpleGrid,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    useDisclosure,
    Button
} from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { withsLogin } from "utils/withsLogin";
import Chart from "react-google-charts";
import { useEffect, useState } from "react";
import { schemaWikiIndex } from "utils/textObjs";
import ModalBossSelect from "components/ModalBossSelect";

interface Props {
    acess: boolean;
}

export function getData() {
    return [
        ["Label", "Value"],
        ["%", schemaWikiIndex.indiceGeral],
    ];
}

const Index = ({ acess }: Props) => {
    const [data, setData] = useState(getData);
    const { isOpen, onOpen, onClose } = useDisclosure();


    useEffect(() => {
        setData(getData);
    },[])
    const options = {
        width: 120,
        height: 120,
        redFrom: 90,
        redTo: 100,
        yellowFrom: 75,
        yellowTo: 90,
        minorTicks: 5,
    };

    return (
        <Flex
            minH={"100vh"}
            align={"space-between"}
            flexDir={"column"}
            justify={"space-between"}
        >
            <Head>
                <title>SimaWiki - SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Box>
                <Header page={"library"} acess={acess} />
            </Box>
            <Box w={"100%"} maxW={"1300px"} margin={"0 auto"}>
                <Flex
                    align={"center"}
                    direction={"column"}
                    textAlign={"center"}
                    p={{ base: "2rem 0 4rem 0", md: "0rem 0 4rem 0" }}
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
                        SimaWiki
                    </Heading>
                    <Heading
                        as={"h3"}
                        fontSize={"1rem"}
                        fontWeight={"400"}
                        maxW={"600px"}
                    >
                        Com base em alguns anos de análise, trouxemos
                        estatísticas que poucos podem ter, prever ou até
                        arriscar, vamos lá:
                    </Heading>
                </Flex>

                <SimpleGrid columns={{base: 1, md: 2}} gap={"1rem"} mb={'1rem'}>
                    <Flex
                        m={{ base: "0.25rem 0rem", md: "none" }}
                        shadow={"0 0 1px 0 "}
                        p={"0.5rem"}
                        w={"100%"}
                        backdropFilter={"brightness(150%)"}
                    >
                        <Flex
                            flexDir={"column"}
                            h={"100%"}
                            justify={"space-around"}
                        >
                            <Heading
                                as={"h3"}
                                fontSize={"1.4rem"}
                                position={"relative"}
                                _after={{
                                    content: "''",
                                    width: "20px",
                                    height: "8%",
                                    position: "absolute",
                                    bottom: 1,
                                    left: 0,
                                    bg: "red.400",
                                    zIndex: -1,
                                }}
                            >
                                GeralCheck
                            </Heading>
                            <Box>
                                <Text>
                                    O índice de conversão geral nada mais é que
                                    a quantidade de bosses achados comparados a
                                    quantidade de bosses que tinham
                                    possibilidade de acontecer, em todos os
                                    servidores tibianos.
                                </Text>
                            </Box>
                        </Flex>

                        <Chart
                            chartType="Gauge"
                            loader={<Text>Carregando</Text>}
                            data={data}
                            options={options}
                        />
                    </Flex>
                    <Flex
                        m={{ base: "0.25rem 0rem", md: "none" }}
                        shadow={"0 0 1px 0 "}
                        p={"0.5rem"}
                        backdropFilter={"brightness(150%)"}
                        align={"center"}
                    >
                        <Flex
                            flexDir={"column"}
                            h={"100%"}
                            maxW={"80%"}
                            justify={"space-around"}
                        >
                            <Heading
                                as={"h3"}
                                fontSize={"1.4rem"}
                                position={"relative"}
                                _after={{
                                    content: "''",
                                    width: "20px",
                                    height: "8%",
                                    position: "absolute",
                                    bottom: 1,
                                    left: 0,
                                    bg: "red.400",
                                    zIndex: -1,
                                }}
                            >
                                BestCheck
                            </Heading>
                            <Box>
                                <Text>
                                    Compilando todos os dados de todos os
                                    servidores, o boss com maior número de morte
                                    considerado é:
                                </Text>
                            </Box>
                        </Flex>
                        <Flex justify={"center"}>
                            <Image
                                src={schemaWikiIndex.bestCheck}
                                height={"5rem"}
                                filter={"grayscale(1)"}
                            />
                        </Flex>
                    </Flex>
                </SimpleGrid>
                <SimpleGrid columns={{base: 1, md: 2, lg: 4}} gap={"1rem"} flexWrap={"wrap"} mb={'1rem'}>
                    <Flex
                        m={{ base: "0.25rem 0rem", md: "none" }}
                        shadow={"0 0 1px 0 "}
                        p={"0.5rem"}
                        w={"100%"}
                        flexDir={"column"}
                        backdropFilter={"brightness(150%)"}
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
                        >
                            Top 5 Servers Checkers
                        </Heading>
                        <TableContainer pt={"1rem"}>
                            <Table variant="striped" size="sm">
                                <Thead>
                                    <Tr>
                                        <Th isNumeric>Or.</Th>
                                        <Th>Server</Th>
                                        <Th>Regi</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {schemaWikiIndex.topcheckers.map(
                                        (server, idx) => (
                                            <Tr>
                                                <Td isNumeric>{idx + 1}.</Td>
                                                <Td>{server.server}</Td>
                                                <Td>{server.region}</Td>
                                            </Tr>
                                        )
                                    )}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Flex>
                    <Flex
                        m={{ base: "0.25rem 0rem", md: "none" }}
                        shadow={"0 0 1px 0 "}
                        p={"0.5rem"}
                        w={"100%"}
                        flexDir={"column"}
                        backdropFilter={"brightness(150%)"}
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
                        >
                            Bottom 5 Servers Checkers
                        </Heading>
                        <TableContainer pt={"1rem"}>
                            <Table variant="striped" size="sm">
                                <Thead>
                                    <Tr>
                                        <Th isNumeric>Or.</Th>
                                        <Th>Server</Th>
                                        <Th>Regi</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {schemaWikiIndex.bottomCheckers.map(
                                        (server, idx) => (
                                            <Tr>
                                                <Td isNumeric>{idx + 1}.</Td>
                                                <Td>{server.server}</Td>
                                                <Td>{server.region}</Td>
                                            </Tr>
                                        )
                                    )}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Flex>
                    <Flex
                        m={{ base: "0.25rem 0rem", md: "none" }}
                        shadow={"0 0 1px 0 "}
                        p={"0.5rem"}
                        w={"100%"}
                        flexDir={"column"}
                        backdropFilter={"brightness(150%)"}
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
                        >
                            Top 5 Bosss Checked
                        </Heading>
                        <TableContainer pt={"1rem"} pl={0}>
                            <Table variant="striped" size="sm" >
                                <Thead>
                                    <Tr>
                                        <Th isNumeric>Or.</Th>
                                        <Th>Server</Th>
                                        <Th>Regi</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {schemaWikiIndex.topBossCheck.map(
                                        (boss, idx) => (
                                            <Tr>
                                                <Td isNumeric>{idx + 1}.</Td>
                                                <Td>{boss.boss}</Td>
                                                <Td>
                                                    <Image
                                                        src={boss.gif_url}
                                                        height={"1.1rem"}
                                                        filter={"grayscale(1)"}
                                                    />
                                                </Td>
                                            </Tr>
                                        )
                                    )}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Flex>
                    <Flex
                        m={{ base: "0.25rem 0rem", md: "none" }}
                        shadow={"0 0 1px 0 "}
                        p={"0.5rem"}
                        w={"100%"}
                        flexDir={"column"}
                        backdropFilter={"brightness(150%)"}
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
                        >
                            WikiSelect
                        </Heading>
                        <Flex h={'100%'} w={'100%'}  align={'center'} justify={'center'}>
                            <Button onClick={onOpen}>Selecionar Boss</Button>
                        </Flex>
                    </Flex>
                </SimpleGrid>
            </Box>
            <Footer />
            <ModalBossSelect isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
};

export default Index;

export const getServerSideProps = withsLogin();
