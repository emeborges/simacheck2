import { CopyIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormLabel, IconButton, Input, Skeleton, SkeletonText, Stack, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
    const [texto, setTexto] = useState('Sima é um grande gordo')

    return (
    <>
        <Flex w={"100%"}>
            <Text textAlign={"center"} w={"100%"}>
                A melhor divisão do seu loot!
            </Text>
        </Flex>
        <Flex mt={"1rem"} justify={"center"}>
            <Box maxW={"300px"} w={"100%"} mr={"1rem"}>
                <FormLabel mb={"0"} fontSize={"0.8rem"}>
                    Cole aqui o seu Analyser
                </FormLabel>
                <Textarea
                    size={"md"}
                    height={"10rem"}
                    border={"1px solid #000"}
                />
                <Flex justify={"space-around"}>
                    <Button
                        m={"0.125rem"}
                        size={"sm"}
                        w={"100%"}
                        _hover={{ bg: "transparent" }}
                        border={"1px solid #000"}
                        bg={"transparent"}
                    >
                        Limpar!
                    </Button>
                    <Button
                        m={"0.125rem"}
                        size={"sm"}
                        w={"100%"}
                        bg={"#000"}
                        color={"#fff"}
                        _hover={{ bg: "#000" }}
                    >
                        Splitar!
                    </Button>
                </Flex>
            </Box>
            <Box
                maxW={"400px"}
                w={"100%"}
                borderRadius={"8px"}
                border={"1px solid #CBD5E0"}
                p={"1rem "}
                ml={"1rem"}
            >
                <Flex justify={"flex-end"}>
                    <IconButton
                        icon={<CopyIcon />}
                        bg={'#000'}
                        aria-label="copy"
                        size={'xs'}
                        color={'#fff'}
                        _hover={{bg: "#000"}}
                        onClick={() => copy(texto)}
                    />
                </Flex>
                <Text>
                    Testando
                </Text>

            </Box>
        </Flex>
    </>
)};

export default Index;
