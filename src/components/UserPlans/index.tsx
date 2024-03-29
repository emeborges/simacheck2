import {
    Box,
    Flex,
    Text,
    HStack,
    List,
    VStack,
    ListItem,
    ListIcon,
    Link as LinkChakra,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import { useSignin, userProps } from "hooks/useSignin";
import ModalPremiumConfirm from "components/ModalPremiumConfirm";
import { useState } from "react";
import Compare from "./Compare";
/* import { useTranslation } from "hooks/useTranslation"; */

export interface PlanProps {
    user: userProps;
    plan: string;
    value: string;
}

const UserPlans = () => {
    /*const { t } = useTranslation();*/
    const { user } = useSignin();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [plan, setPlan] = useState<PlanProps>();

    return (
        <>
            <Box w={"100%"} maxW={"1300px"} margin={"0 auto"} p={'1rem 0'}>
                <Flex
                    justify={"space-evenly"}
                    flexDir={{ base: "column", lg: "row" }}
                >
                    <Box
                        mb={4}
                        shadow="base"
                        borderWidth="1px"
                        alignSelf={{ base: "center", lg: "flex-start" }}
                        borderColor={"gray.200"}
                        borderRadius={"xl"}
                        w={"100%"}
                        maxW={"300px"}
                    >
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="1.25rem">
                                Free
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="5xl" fontWeight="900">
                                    GRÁTIS
                                </Text>
                            </HStack>
                        </Box>
                        <VStack py={4} borderBottomRadius={"xl"}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    Radar de bosses
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    Calculadora de Skills
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    Calculadora de Party
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FiXCircle} color="red.500" />
                                    Detalhes globais do boss
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FiXCircle} color="red.500" />
                                    Boletim diário personalizado
                                </ListItem>
                            </List>
                            {user ? null : (
                                <LinkChakra
                                    href={"/signup"}
                                    bg={"#121214"}
                                    p={"0.5rem 2rem"}
                                    borderRadius={"5px"}
                                    color={"#fff"}
                                    fontSize={"1rem"}
                                    textDecor={"none"}
                                    maxW={"320px"}
                                    w={"80%"}
                                    textAlign={"center"}
                                >
                                    Cadastre-se já!
                                </LinkChakra>
                            )}
                        </VStack>
                    </Box>
                    <Box
                        mb={4}
                        shadow="base"
                        borderWidth="1px"
                        alignSelf={{ base: "center", lg: "flex-start" }}
                        borderColor={"gray.200"}
                        borderRadius={"xl"}
                        w={"100%"}
                        maxW={"300px"}
                    >
                        <Box position="relative">
                            <Box
                                position="absolute"
                                top="-16px"
                                left="50%"
                                style={{ transform: "translate(-50%)" }}
                            >
                                <Text
                                    textTransform="uppercase"
                                    bg={"red.500"}
                                    px={3}
                                    py={1}
                                    color={"#fff"}
                                    fontSize="sm"
                                    fontWeight="600"
                                    rounded="xl"
                                >
                                    Mais Popular
                                </Text>
                            </Box>
                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl">
                                    Premium
                                </Text>
                                <HStack
                                    justifyContent="center"
                                    alignItems={"baseline"}
                                >
                                    <Text fontSize="3xl" fontWeight="600">
                                        R$
                                    </Text>
                                    <Text fontSize="5xl" fontWeight="900">
                                        12,99
                                    </Text>
                                    <Text
                                        fontSize="1rem"
                                        minWidth={"5rem"}
                                        color="gray.500"
                                    >
                                        /30 dias
                                    </Text>
                                </HStack>
                            </Box>
                            <VStack
                                py={4}
                                borderBottomRadius={"xl"}
                            >
                                <List spacing={3} textAlign="start" px={12}>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Radar de bosses
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Calculadora de Skills
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Calculadora de Party
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Detalhes globais do boss
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Boletim diário personalizado
                                    </ListItem>
                                </List>
                                {user ? (
                                    <Box w="80%" pt={7}>
                                        <Button
                                            w="full"
                                            colorScheme="red"
                                            onClick={() => {
                                                setPlan({
                                                    user: user,
                                                    plan: "Mensal",
                                                    value: "R$ 12,99",
                                                });

                                                return onOpen();
                                            }}
                                        >
                                            Assinar Já!
                                        </Button>
                                    </Box>
                                ) : (
                                    <LinkChakra
                                        href={"/signup"}
                                        bg={"#121214"}
                                        p={"0.5rem 2rem"}
                                        borderRadius={"5px"}
                                        color={"#fff"}
                                        fontSize={"1rem"}
                                        textDecor={"none"}
                                        maxW={"320px"}
                                        w={"80%"}
                                        textAlign={"center"}
                                    >
                                        Cadastre-se já!
                                    </LinkChakra>
                                )}
                            </VStack>
                        </Box>
                    </Box>
                    <Box
                        mb={4}
                        shadow="base"
                        borderWidth="1px"
                        alignSelf={{ base: "center", lg: "flex-start" }}
                        borderColor={"gray.200"}
                        borderRadius={"xl"}
                        w={"100%"}
                        maxW={"300px"}
                    >
                        <Box position="relative">
                            <Box
                                position="absolute"
                                top="-16px"
                                left="50%"
                                style={{ transform: "translate(-50%)" }}
                            >
                                <Text
                                    textTransform="uppercase"
                                    border={"1px solid red"}
                                    px={3}
                                    background={"#fff"}
                                    py={1}
                                    color={"red.500"}
                                    fontSize="xs"
                                    fontWeight="600"
                                    rounded="xl"
                                >
                                    Mais Econômico
                                </Text>
                            </Box>
                            <Box py={4} px={12}>
                                <Text fontWeight="500" fontSize="2xl">
                                    Premium Tri
                                </Text>
                                <HStack
                                    justifyContent="center"
                                    alignItems={"baseline"}
                                >
                                    <Text fontSize="3xl" fontWeight="600">
                                        R$
                                    </Text>
                                    <Text fontSize="5xl" fontWeight="900">
                                        32,99
                                    </Text>
                                    <Text
                                        fontSize="1rem"
                                        minWidth={"5rem"}
                                        color="gray.500"
                                    >
                                        /90 dias
                                    </Text>
                                </HStack>
                            </Box>
                            <VStack
                                py={4}
                                borderBottomRadius={"xl"}
                            >
                                <List spacing={3} textAlign="start" px={12}>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Radar de bosses
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Calculadora de Skills
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Calculadora de Party
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Detalhes globais do boss
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon
                                            as={FaCheckCircle}
                                            color="green.500"
                                        />
                                        Boletim diário personalizado
                                    </ListItem>
                                </List>
                                {user ? (
                                    <Box w="80%" pt={7}>
                                        <Button
                                            w="full"
                                            colorScheme="red"
                                            onClick={() => {
                                                setPlan({
                                                    user: user,
                                                    plan: "Trimestral",
                                                    value: "R$ 49,99",
                                                });

                                                return onOpen();
                                            }}
                                        >
                                            Assinar Já!
                                        </Button>
                                    </Box>
                                ) : (
                                    <LinkChakra
                                        href={"/signup"}
                                        bg={"#121214"}
                                        p={"0.5rem 2rem"}
                                        borderRadius={"5px"}
                                        color={"#fff"}
                                        fontSize={"1rem"}
                                        textDecor={"none"}
                                        maxW={"320px"}
                                        w={"80%"}
                                        textAlign={"center"}
                                    >
                                        Cadastre-se já!
                                    </LinkChakra>
                                )}
                            </VStack>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Compare />
            <ModalPremiumConfirm
                plan={plan}
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    );
};

export default UserPlans;
