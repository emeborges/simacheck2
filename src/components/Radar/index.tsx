import {
    Box,
    Flex,
    ListItem,
    Text,
    Tooltip,
    UnorderedList,
    useDisclosure,
    Image,
    useColorMode,
    Spinner
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { HiLockClosed } from "react-icons/hi";


import { BossesDetailsProps } from "utils/types";
import Filters from "../../components/Filters";
import ConteinerBosses from "components/ConteinerBosses";
import { FaExchangeAlt } from "react-icons/fa";
import ModalSelectServer from "components/ModalServerSelect";
import { useRadarBosses } from "hooks/useRadarBosses";
import ConteinerLores from "components/ConteinerLores";
import ConteinerCitys from "components/ConteinerCitys";
import { useCan } from "hooks/useCan";


const Radar = () => {
    const [view, setView] = useState("status");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [dadoFiltrado, setDadoFiltrado] = useState<string>("boss");
    const [bossesOrganizado, setBossesOrganizado] = useState<
        BossesDetailsProps[]
    >([]);
    const { bosses, pid, bossesLastView, load } = useRadarBosses();
    const userCanSeeComponent = useCan({permissions: new Date(), roles: "premium"});
    const { colorMode } = useColorMode();

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
                return b.oa_current_prob! - a.oa_current_prob!;
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
                {load === true ? (
                    <Flex width={'100%'} height={'100%'} justify={'center'} align={'center'}>
                        <Spinner size="xl" />
                    </Flex>
                ) : (
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
                                shadow={"0 0 1px 0 "}
                                p={"0.5rem"}
                                h={"6rem"}
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
                                shadow={"0 0 1px 0 "}
                                h={"6rem"}
                                minH={"6rem"}
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
                                            width: "5px",
                                        },
                                        "&::-webkit-scrollbar-track": {
                                            background: "transparent",
                                        },
                                        "&::-webkit-scrollbar-thumb": {
                                            background:
                                                colorMode === "light"
                                                    ? "#323238"
                                                    : "#fff",
                                            border: "2px solid transparent",
                                        },
                                    }}
                                    overflowY={"auto"}
                                    overflowX={"hidden"}
                                >
                                    {bossesLastView.map((boss) => (
                                        <Box m={"0.125rem"} key={boss.boss}>
                                            <Text
                                                fontSize={"0.6rem"}
                                                maxW={"4rem"}
                                            >
                                                {boss.display_name}
                                            </Text>
                                            <Image
                                                src={boss?.gif_url}
                                                maxH={"3rem"}
                                            />
                                        </Box>
                                    ))}
                                </Flex>
                            </Flex>

                            <Flex
                                m={{ base: "0.25rem 0rem", md: "none" }}
                                shadow={"0 0 1px 0 "}
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
                                    borderBottom={"1px solid "}
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
                                        display={"flex"}
                                    >
                                        <ListItem
                                            cursor={"pointer"}
                                            margin={"5px"}
                                            textDecoration={"none"}
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
                                        {userCanSeeComponent === true ? (
                                            <ListItem
                                                cursor={"pointer"}
                                                margin={"5px"}
                                                textDecoration={"none"}
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
                                        ) : (
                                            <Tooltip label="Premium necessário">
                                                <ListItem
                                                    margin={"5px"}
                                                    display={"flex"}
                                                    alignItems={"center"}
                                                    cursor={"not-allowed"}
                                                    textDecor={"line-through"}
                                                >
                                                    <HiLockClosed />
                                                    <Box>
                                                        Cidade
                                                        <Box
                                                            width={"0.5rem"}
                                                            borderBottom={
                                                                "2px solid #BA1813"
                                                            }
                                                        />
                                                    </Box>
                                                </ListItem>
                                            </Tooltip>
                                        )}
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
