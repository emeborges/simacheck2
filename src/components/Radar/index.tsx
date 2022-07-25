import {
    Box,
    Flex,
    ListItem,
    Text,
    UnorderedList,
    useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";


import { BossesDetailsProps } from "utils/types";
import Filters from "../../components/Filters";
import ConteinerBosses from "components/ConteinerBosses";
import { FaExchangeAlt } from "react-icons/fa";
import ModalSelectServer from "components/ModalServerSelect";
import BossStatus from "components/BossesStatus";
import { useRadarBosses } from "hooks/useRadarBosses";
import ConteinerLores from "components/ConteinerLores";
import ConteinerCitys from "components/ConteinerCitys";

const Radar = () => {
    const [view, setView] = useState("status");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [dadoFiltrado, setDadoFiltrado] = useState<string>("colour_frame");
    const [bossesOrganizado, setBossesOrganizado] = useState<
        BossesDetailsProps[]
    >([]);
    const { bosses, pid, bossesLastView, load } = useRadarBosses();


    useEffect(() => {
        if (bosses) {
            setBossesOrganizado(bosses);
        }
    }, [bosses]);

    function sortName() {
        setDadoFiltrado("boss");
        setBossesOrganizado(
            bossesOrganizado?.sort((a, b) => {
                return a.boss.localeCompare(b.boss);
            })
        );
    }

    function sortDrop() {
        setDadoFiltrado("colour_frame");
        setBossesOrganizado(
            bossesOrganizado?.sort((a, b) => {
                return b.oa_colour_frame! - a.oa_colour_frame!;
            })
        );
    }

    function stringForDate(dataString: any) {
        if (dataString === undefined) {
            return;
        } else {
            const data = new Date(dataString.split(" ")[0]);
            const dataAbrev = data.toLocaleDateString();

            return dataAbrev;
        }
    }

    return (
        <>
            <Box w={"100%"} maxW={"1300px"} margin={"0 auto"}>
                {load === true ? null : (
                    <>
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
                                    <Text
                                        fontSize={"1.1rem"}
                                        fontWeight={"600"}
                                    >
                                        Servidor
                                    </Text>
                                    <Text>{pid}</Text>
                                    <Flex
                                        cursor={"pointer"}
                                        color={"blue.700"}
                                        fontSize={"70%"}
                                        align={"center"}
                                        onClick={onOpen}
                                        _hover={{ fontWeight: "bold" }}
                                    >
                                        <FaExchangeAlt />
                                        <Text
                                            ml={"0.2rem"}
                                            fontStyle={"italic"}
                                        >
                                            Alterar
                                        </Text>
                                    </Flex>
                                </Flex>

                                <Flex
                                    w={"50%"}
                                    direction={"column"}
                                    align={"center"}
                                    textAlign={"center"}
                                >
                                    <Text
                                        fontSize={"1.1rem"}
                                        fontWeight={"600"}
                                    >
                                        Data de Referência
                                    </Text>
                                    <Text>
                                        {stringForDate(
                                            bossesOrganizado[0]?.valid_to
                                        )}
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex
                                m={{ base: "0.25rem 0rem", md: "none" }}
                                borderRadius={"5px"}
                                boxShadow={"0px 0px 5px #323238"}
                                h={"5rem"}
                                minH={"5rem"}
                                w={{ base: "99%", md: "39%" }}
                                align={"center"}
                                justify={"space-around"}
                                direction={"column"}
                            >
                                <Text fontSize={"0.95rem"} fontWeight={"600"}>
                                    Bosses mortos ontem:
                                </Text>
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
                                            borderRadius: "10px",
                                            border: "3px solid #ffffff",
                                        },
                                    }}
                                    overflow={
                                        bossesLastView.length > 7
                                            ? "hidden"
                                            : "auto"
                                    }
                                >
                                    {bossesLastView.map(() => (
                                        <BossStatus
                                            width="4rem"
                                            height="4rem"
                                            image={"/"}
                                        />
                                    ))}
                                </Flex>
                            </Flex>

                            <Flex
                                m={{ base: "0.25rem 0rem", md: "none" }}
                                borderRadius={"5px"}
                                boxShadow={"0px 0px 5px #323238"}
                                p={"0.5rem"}
                                minH={"100%"}
                                w={{ base: "99%", md: "30%" }}
                                align={"center"}
                                justify={"space-around"}
                            ></Flex>
                        </Flex>
                        <Box>
                            <Flex
                                alignItems={"center"}
                                pl={{ base: "0.5rem", md: "0rem" }}
                            >
                                <Text
                                    fontSize={"1.2rem"}
                                    marginRight={"0.5rem"}
                                >
                                    Radar
                                </Text>
                                <Box
                                    w={"100%"}
                                    borderBottom={"1px solid #121214"}
                                    opacity={"0.3"}
                                />
                            </Flex>
                            <Flex
                                alignItems={"center"}
                                justifyContent={"space-between"}
                                pl={{ base: "0.5rem", md: "0rem" }}
                            >
                                <Flex align={"center"} fontSize={"80%"}>
                                    <Text>Tipo de visualização:</Text>
                                    <UnorderedList
                                        listStyleType={"none"}
                                        d={"flex"}
                                    >
                                        <ListItem
                                            cursor={"pointer"}
                                            margin={"5px"}
                                            textDecoration={"none"}
                                            color={"#121214"}
                                            fontWeight={
                                                view === "status"
                                                    ? "600"
                                                    : "regular"
                                            }
                                            _hover={{ fontWeight: "600" }}
                                            onClick={() => setView("status")}
                                        >
                                            Status
                                            <Box
                                                width={"0.5rem"}
                                                borderBottom={
                                                    "2px solid #BA1813"
                                                }
                                            />
                                        </ListItem>
                                        <ListItem
                                            cursor={"pointer"}
                                            margin={"5px"}
                                            textDecoration={"none"}
                                            color={"#121214"}
                                            fontWeight={
                                                view === "lore"
                                                    ? "600"
                                                    : "regular"
                                            }
                                            _hover={{ fontWeight: "600" }}
                                            onClick={() => setView("lore")}
                                        >
                                            Lores
                                            <Box
                                                width={"0.5rem"}
                                                borderBottom={
                                                    "2px solid #BA1813"
                                                }
                                            />
                                        </ListItem>
                                        <ListItem
                                            cursor={"pointer"}
                                            margin={"5px"}
                                            textDecoration={"none"}
                                            color={"#121214"}
                                            fontWeight={
                                                view === "city"
                                                    ? "600"
                                                    : "regular"
                                            }
                                            _hover={{ fontWeight: "600" }}
                                            onClick={() => setView("city")}
                                        >
                                            Cidade
                                            <Box
                                                width={"0.5rem"}
                                                borderBottom={
                                                    "2px solid #BA1813"
                                                }
                                            />
                                        </ListItem>
                                    </UnorderedList>
                                </Flex>

                                <Filters
                                    sortName={sortName}
                                    sortDrop={sortDrop}
                                    filterOn={dadoFiltrado}
                                />
                            </Flex>
                            <Box p={"1rem 0rem"}>
                                {view === "status" ? (
                                    <ConteinerBosses
                                        bosses={bossesOrganizado}
                                    />
                                ) : null}
                                {view === "lore" ? (
                                    <ConteinerLores bosses={bossesOrganizado} />
                                ) : null}
                                {view === "city" ? (
                                    <ConteinerCitys bosses={bossesOrganizado} />
                                ) : null}
                            </Box>
                        </Box>
                    </>
                )}
            </Box>
            <ModalSelectServer isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Radar;
