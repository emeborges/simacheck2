
import { PluralOuSing, Porcentagem } from "../../utils/gerals"
import { Badge, Box, Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stat, StatArrow, StatHelpText,  Text, Tooltip, } from "@chakra-ui/react"
import { Chart } from "react-google-charts"
import Link from 'next/link'
import { BossesDetailsProps, Previews } from "utils/types"
import { FaSkull } from "react-icons/fa"
import { BsStopwatchFill } from "react-icons/bs";
import { Can } from "components/Can";
import { IoLibraryOutline } from "react-icons/io5";


const ModalDetailsBoss: React.FC<{
    boss: BossesDetailsProps | undefined;
    isOpen: any;
    onClose: any;
}> = ({ boss, isOpen, onClose }) => {

    console.log(boss)
    function dataChart(prediction_frame?: Previews[] | null) {
        if(prediction_frame){
            let final = [];
            let detalhes = [
                {
                    type: "date",
                    id: "Date",
                },
                {
                    type: "number",
                    id: "Won/Loss",
                },
            ];

            final.push(detalhes);

            for (let ele of prediction_frame!) {
                let cem = ele.colour_frame * 100;
                let arred = cem.toFixed(1);
                final.push([new Date(ele.date), arred]);
            }

            return final;
        }


    };


    function status(n: number) {
        if (n > 0.33) {
            return <Badge colorScheme="purple">Baixa Procura</Badge>;
        } else if (n > -0.33) {
            return <Badge>Média Procura</Badge>;
        } else {
            return (
                <Badge variant="outline" colorScheme="green">
                    Muito Procurado
                </Badge>
            );
        }
    }

    return (
        <Modal
            isCentered
            isOpen={isOpen}
            onClose={onClose}
            size={"xl"}
            blockScrollOnMount={false}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                >
                    <Image
                        src={
                            boss?.oa_current_prob! > 0
                                ? boss?.gif_url
                                : boss?.dead_url
                        }
                    />
                    <Flex direction={"column"} pl={"1rem"} w={"100%"}>
                        <Text
                            fontSize="lg"
                            minW={"100%"}
                            as={"span"}
                            position={"relative"}
                            _after={{
                                content: "''",
                                width: "10%",
                                height: "10%",
                                position: "absolute",
                                bottom: 0.5,
                                left: 0,
                                bg: "#BA1813",
                                zIndex: -1,
                            }}
                        >
                            {boss?.display_name}
                        </Text>
                        <Text fontSize="xs">{boss?.lore}</Text>
                        <Flex
                            w={"100%"}
                            justifyContent={"space-between"}
                            align={"center"}
                            pt={"0.25rem"}
                        >
                            <Text fontSize="sm">
                                Última aparição:{" "}
                                {PluralOuSing(
                                    boss?.oa_days_since_last_view!,
                                    "dia",
                                    "dias"
                                )}
                            </Text>
                            <Text fontSize="sm">Cidade: {boss?.city}</Text>
                        </Flex>
                    </Flex>
                </ModalHeader>

                <ModalCloseButton />

                <ModalBody>
                    <Flex w={"100%"} justify={"space-between"} align={"center"}>
                        <Flex
                            w={"100%"}
                            h={"100%"}
                            justify={"space-between"}
                            flexDir={"column"}
                        >
                            <Flex w={"100%"} justify={"space-around"}>
                                <Flex direction={"column"} align={"center"}>
                                    <Text fontSize={"12px"}>
                                        Chance Geral Hoje:
                                    </Text>

                                    <Flex>
                                        {Porcentagem(boss?.oa_current_prob!)}%
                                    </Flex>
                                </Flex>
                                <Flex direction={"column"} align={"center"}>
                                    <Text fontSize={"12px"}>
                                        Possível aparecimento em:
                                    </Text>

                                    <Flex>
                                        {PluralOuSing(
                                            boss?.oa_expect_in!,
                                            "dia",
                                            "dias"
                                        )}
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex
                                h={"100%"}
                                flexWrap={"wrap"}
                                justify={"space-around"}
                            >
                                {boss?.resp.map((respw, key) => (
                                    <Box
                                        fontSize={"14px"}
                                        minW={"10rem"}
                                        m={"0.5rem 0.5rem 0 0"}
                                        borderBottom={"1px solid #f1f1f1"}
                                    >
                                        <Text
                                            bg={"black"}
                                            color={"#fff"}
                                            textAlign={"center"}
                                        >
                                            Respawn {key + 1}
                                        </Text>
                                        <Flex
                                            align={"center"}
                                            justify={"space-around"}
                                        >
                                            <Tooltip label="Chance Hoje.">
                                                <Stat
                                                    display={"flex"}
                                                    justifyContent={"center"}
                                                    alignItems={"center"}
                                                >
                                                    <StatHelpText margin={"0"}>
                                                        <StatArrow
                                                            type={
                                                                respw.colour_frame! >
                                                                0.5
                                                                    ? "increase"
                                                                    : "decrease"
                                                            }
                                                        />
                                                        {Porcentagem(
                                                            respw.current_prob!
                                                        )}
                                                        %
                                                    </StatHelpText>
                                                </Stat>
                                            </Tooltip>
                                        </Flex>
                                        <Flex
                                            align={"center"}
                                            justify={"space-between"}
                                            bg={"#f1f1f1"}
                                            p={"0 0.5rem"}
                                        >
                                            <Tooltip label="Possível aparecimento em:">
                                                <Text fontSize={"14px"}>
                                                    <BsStopwatchFill />
                                                </Text>
                                            </Tooltip>
                                            <Text
                                                fontSize={
                                                    respw.expect_in == 0
                                                        ? "12px"
                                                        : "14px"
                                                }
                                            >
                                                {respw.expect_in > 0
                                                    ? `Em `
                                                    : null}
                                                {PluralOuSing(
                                                    respw.expect_in,
                                                    "dia",
                                                    "dias"
                                                )}
                                            </Text>
                                        </Flex>
                                        <Flex
                                            align={"center"}
                                            justify={"space-between"}
                                            p={"0 0.5rem"}
                                        >
                                            <Tooltip label="Quantos dias faz que ele apareceu.">
                                                <Text fontSize={"14px"}>
                                                    <FaSkull />
                                                </Text>
                                            </Tooltip>
                                            <Text>
                                                {PluralOuSing(
                                                    respw.days_since_last_view,
                                                    "dia",
                                                    "dias"
                                                )}
                                            </Text>
                                        </Flex>
                                    </Box>
                                ))}
                            </Flex>
                        </Flex>
                        <Flex flexDir={"column"}>
                            <Flex direction={"column"} align={"center"}>
                                <Tooltip label="Status de procura dele no servidor.">
                                    <Text fontSize={"12px"}>
                                        Status Servidor:
                                    </Text>
                                </Tooltip>
                                <Flex>{status(boss?.world_drop!)}</Flex>
                            </Flex>
                            <Flex
                                direction={"column"}
                                align={"center"}
                                pt={"0.5rem"}
                            >
                                <Tooltip label="Status de procura dele em todo o tibia.">
                                    <Text fontSize={"12px"}>Status Geral:</Text>
                                </Tooltip>
                                <Flex>{status(boss?.overall_drop!)}</Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        justify={"space-between"}
                        mt={"2rem"}
                        align={"center"}
                    >
                        <Flex borderBottom={"1px solid #737380"} w={"80%"} />
                        <Text fontSize="sm" textAlign={"center"} pl={"0.5rem"}>
                            Área premium
                        </Text>
                    </Flex>

                    <Can permissions={new Date()} roles="premium">
                        <Box
                            maxH={"200px"}
                            overflowY={"auto"}
                            css={{
                                "&::-webkit-scrollbar": {
                                    width: "4px",
                                },
                                "&::-webkit-scrollbar-track": {
                                    width: "6px",
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    background: "#000",
                                    borderRadius: "24px",
                                },
                            }}
                        >
                            {boss?.resp.map((resp, key) => (
                                <Box h={"150px"} w={"100%"}>
                                    <Chart
                                        chartType="Calendar"
                                        width={500}
                                        loader={<Text>Carregando</Text>}
                                        data={dataChart(
                                            resp?.prediction_frame!
                                        )}
                                        options={{
                                            title: `Respawn ${key + 1}`,
                                            calendar: {
                                                cellSize: 8,
                                            },
                                            colorAxis: {
                                                minValue: 0,
                                                colors: [
                                                    "#c83728",
                                                    "#ebc832",
                                                    "#3cc85a",
                                                ],
                                            },
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Can>

                    <Flex justify={"space-around"} align={"center"}>
                        <Flex cursor={"pointer"}>
                            <Link href={`${boss?.wiki_url}`}>
                                <Image
                                    src={"/img/fandom.svg"}
                                    style={{ width: "80px" }}
                                />
                            </Link>
                        </Flex>
                        <Flex cursor={"pointer"}>
                            <Link href={"/"}>
                                <Button
                                    mt={"0.5rem"}
                                    bg={"transparent"}
                                    w={"10rem"}
                                    h={"5rem"}
                                    p={"0.5rem"}
                                    display={"flex"}
                                    flexDir={"column"}
                                    justifyContent={"space-around"}
                                    _hover={{ bg: "#737380", color: "#fff" }}
                                >
                                    <IoLibraryOutline
                                        style={{
                                            height: "2rem",
                                            width: "2rem",
                                        }}
                                    />
                                    SimaLibrary
                                </Button>
                            </Link>
                        </Flex>
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button mr={2} onClick={onClose}>
                        Fechar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ModalDetailsBoss
