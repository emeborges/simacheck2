import { useEffect, useState } from 'react'
import {
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Spinner,
    Checkbox,
    CheckboxGroup,
    SimpleGrid,
    Flex,
    useDisclosure
    } from '@chakra-ui/react'
import { api } from 'utils/services';

const ModalSelectServerPremiumProfile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [servers, setServers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState<any>();

    useEffect(() => {
        getServers();
    }, []);

    async function getServers() {
        try {
            const { data } = await api.get(`worlds`);
            setServers(data);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    function ResetComponent(){
        setLoading(true);
        setValue("");
        setTimeout(() => setLoading(false), 1000);
    }

    return (
    <>
        <Button size={"xs"} onClick={onOpen}>
            Editar
        </Button>
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            size={"md"}
            blockScrollOnMount={false}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Selecionar Servidores</ModalHeader>
                <ModalCloseButton />
                <ModalBody pt={'0rem'}>
                    <Text fontSize={'0.8rem'} pb={'1rem'} textAlign={'center'} >Selecione abaixo os servidores para receber as informações dos bosses gerais do servidor:</Text>
                    {loading === true ? (
                        <Flex justifyContent={"center"}>
                            <Spinner size="xl" />
                        </Flex>
                    ) : (
                        <Flex
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
                            overflow={"auto"}
                            maxH={"200px"}
                            >
                            <CheckboxGroup
                                colorScheme="gray"
                                isDisabled={value?.length >= 3 ? true : false}
                                onChange={(e) => setValue(e)}
                            >
                                <SimpleGrid columns={3} spacing={3}>
                                    {servers.map((server, key) => (
                                        <Checkbox
                                            key={key}
                                            value={server}
                                            isChecked={true}
                                            pl={"1rem"}
                                            >
                                            {server}
                                        </Checkbox>
                                    ))}
                                </SimpleGrid>
                            </CheckboxGroup>
                        </Flex>
                    )}
                </ModalBody>

                <ModalFooter display={"flex"} justifyContent={"space-around"}>
                    <Button
                        bg={"#18181B"}
                        color={"#fff"}
                        _hover={{
                            color: "#18181B",
                            border: "1px solid #18181B",
                            bg: "#fff",
                        }}
                        onClick={() => ResetComponent()}
                        >
                        Resetar
                    </Button>
                    <Button
                        bg={"#18181B"}
                        color={"#fff"}
                        _hover={{
                            color: "#18181B",
                            border: "1px solid #18181B",
                            bg: "#fff",
                        }}
                    >
                        Salvar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
    );
};

export default ModalSelectServerPremiumProfile;
