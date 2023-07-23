import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Select,
    Spinner
    } from '@chakra-ui/react'
import { api } from 'utils/services';
import { useTranslation } from 'hooks/useTranslation';

const ModalBossSelect = ({isOpen, onClose}:any) => {
    const [servers, setServers] = useState([])
    const { t } = useTranslation();
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [value, setValue] = useState<any>()

    useEffect(() => {
        getBosses();
    }, []);

    async function getBosses() {
        try {
            const { data } = await api.get(`/bosses`)
            setServers(data)
            setLoading(false)

        } catch (e) {
            console.log(e)
        }
    }

    function altPages(){
        onClose()

        if(value !== undefined ){
            return router.push(`/wiki/${value}`)
        }
    }


    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            blockScrollOnMount={false}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{t("Modal_SelectBoss")}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {loading === true ? (
                        <Spinner size="xl" />
                    ) : (
                        <Select
                            placeholder={t("Modal_SelectBossPlaceholder")}
                            onChange={(e) => setValue(e.target.value)}
                        >
                            {servers.map((server, key) => (
                                <option key={key} value={server}>
                                    {server}
                                </option>
                            ))}
                        </Select>
                    )}
                </ModalBody>

                <ModalFooter>
                    <Button
                        p={"0.5rem 2rem"}
                        display={"flex"}
                        flexDir={"column"}
                        justifyContent={"space-around"}
                        _hover={{ bg: "#737380", color: "#fff" }}
                        onClick={altPages}
                    >
                        {t("Modal_SelectBossGo")}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ModalBossSelect;
