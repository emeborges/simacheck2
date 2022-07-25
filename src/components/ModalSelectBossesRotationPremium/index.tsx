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
    useDisclosure,
    Select
    } from '@chakra-ui/react'
import { api } from 'utils/services';
import { Input } from 'components/Input';

const ModalSelectBossesRotationPremium = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [servers, setServers] = useState([]);
    const [loading, setLoading] = useState(true);
   /* const [value, setValue] = useState<any>();*/

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

    function ResetComponent() {
        setLoading(true);
        /*setValue("");*/
        setTimeout(() => setLoading(false), 1000);
    }

    return (
        <>
            <Button size={"xs"} onClick={onOpen}>
                Adicionar
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
                    <ModalBody pt={"0rem"}>
                        <Text
                            fontSize={"0.8rem"}
                            pb={"1rem"}
                            textAlign={"center"}
                        >
                            Selecione abaixo os bosses e servidores desejados para o boletim de rotação diário:
                        </Text>
                        {loading === true ? (
                            <Spinner size="xl" />
                        ) : (
                            <>
                                <Input
                                    name={"nameRotation"}
                                    placeholder={"Nome da Rotação"}
                                    mb={"1rem"}
                                />
                                <Select
                                    placeholder="Selecione o Servidor Desejado"
                                    /*onChange={(e) => setValue(e.target.value)}*/
                                >
                                    {servers.map((server, key) => (
                                        <option key={key} value={server}>
                                            {server}
                                        </option>
                                    ))}
                                </Select>

                            </>
                        )}
                    </ModalBody>

                    <ModalFooter
                        display={"flex"}
                        justifyContent={"space-around"}
                    >
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

export default ModalSelectBossesRotationPremium;
