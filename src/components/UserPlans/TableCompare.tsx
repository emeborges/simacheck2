import {
    Flex,
    Text,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface LineProps {
    text: string
}

const LineRef = ({text}: LineProps) => {
    return (
        <Tr fontWeight={'bold'}>
            <Td p={"1rem 0.5rem 0rem"}>{text}</Td>
        </Tr>
    );
}

interface DetailsProps {
    desc: string;
    free: boolean | "limited";
    premium: boolean;
}

const DetailsProps = ({ desc, free, premium }: DetailsProps) => (
    <Tr borderBottom={"1px solid #d1d1e4"} fontSize={"0.85rem"}>
        <Td py={"0.5rem"} overflowWrap={"normal"}>{desc}</Td>
        <Td py={"0.5rem"}>
            {free === "limited" ? (
                <FaCheckCircle />
            ) : free ? (
                <FaCheckCircle color={"green"} />
            ) : (
                "-"
            )}
        </Td>
        <Td py={"0.5rem"}>{premium ? <FaCheckCircle color={"green"} /> : "-"}</Td>
    </Tr>
);

export const TableCompare = () => (
    <TableContainer w={"100%"} p={"0 0.5rem"}>
        <Table variant="unstyled" maxW={"100%"}>
            <Thead borderBottom={"1px solid #323238"}>
                <Tr>
                    <Th fontSize={"1.2rem"}>SimaTools</Th>
                    <Th>Plano Free</Th>
                    <Th>Plano Premium</Th>
                </Tr>
            </Thead>
            <Tbody fontSize={"1rem"}>
                <>
                    <LineRef text={"SimaRadar"} />
                    <DetailsProps
                        desc={"Visualização por Status"}
                        free={true}
                        premium={true}
                    />
                    <DetailsProps
                        desc={"Visualização por Lores"}
                        free={true}
                        premium={true}
                    />
                    <DetailsProps
                        desc={"Visualização por Cidade"}
                        free={false}
                        premium={true}
                    />
                    <DetailsProps
                        desc={"Status por Respawn"}
                        free={true}
                        premium={true}
                    />
                    <DetailsProps
                        desc={"Previsão por Boss"}
                        free={"limited"}
                        premium={true}
                    />
                </>
                <>
                    <LineRef text={"SimaBot"} />
                    <DetailsProps
                        desc={"Acesso Ao Bot"}
                        free={false}
                        premium={true}
                    />
                    <DetailsProps
                        desc={"Geração de Rotas de BossCheck"}
                        free={false}
                        premium={true}
                    />
                    <DetailsProps
                        desc={"Calculadoras"}
                        free={false}
                        premium={true}
                    />
                </>
                <>
                    <LineRef text={"SimaCalculadoras"} />
                    <DetailsProps
                        desc={"Treino online e offline"}
                        free={true}
                        premium={true}
                    />
                    <DetailsProps
                        desc={"Divisão de Loot"}
                        free={"limited"}
                        premium={true}
                    />
                    <DetailsProps
                        desc={"Análise de Hunt"}
                        free={"limited"}
                        premium={true}
                    />
                </>
            </Tbody>
        </Table>
        <Table variant="unstyled" maxW={"100%"} mt={"1rem"}>
            <Thead borderBottom={"1px solid #323238"}>
                <Tr>
                    <Th fontSize={"1.2rem"}>SimaLibrary</Th>
                    <Th>Plano Free</Th>
                    <Th>Plano Premium</Th>
                </Tr>
            </Thead>
            <Tbody fontSize={"1rem"}>
                <>
                    <LineRef text={"SimaRadar"} />
                    <DetailsProps
                        desc={"Visualização por Status"}
                        free={true}
                        premium={true}
                    />
                    <DetailsProps
                        desc={"Visualização por Lores"}
                        free={true}
                        premium={true}
                    />
                    <DetailsProps
                        desc={"Visualização por Cidade"}
                        free={false}
                        premium={true}
                    />
                    <DetailsProps
                        desc={"Status por Respawn"}
                        free={true}
                        premium={true}
                    />
                    <DetailsProps
                        desc={"Previsão por Boss"}
                        free={"limited"}
                        premium={true}
                    />
                </>
            </Tbody>
        </Table>
        <Flex my={"0.5rem"} w={"100%"} justify={"right"} align={"center"}>
            <Flex justify={"right"} align={"center"} mr={'1rem'}>
                <FaCheckCircle fontSize={"0.8rem"}  />
                <Text fontSize={"0.8rem"} ml={"0.25rem"}>
                    Acesso Limitado
                </Text>
            </Flex>
            <Flex justify={"right"} align={"center"}>
                <FaCheckCircle fontSize={"0.8rem"} color={"green"} />
                <Text fontSize={"0.8rem"} ml={"0.25rem"}>
                    Acesso Total
                </Text>
            </Flex>
        </Flex>
    </TableContainer>
);
