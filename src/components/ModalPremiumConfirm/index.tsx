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
    Text
    } from '@chakra-ui/react'
import { api } from 'utils/services';
import { useTranslation } from 'hooks/useTranslation';
import { PlanProps } from 'pages/premium';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    plan: PlanProps | undefined;
}

const ModalPremiumConfirm = ({ isOpen, onClose, plan }: Props) => {
    const [servers, setServers] = useState([]);
    const { t } = useTranslation();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState<any>();

    useEffect(() => {
        getBosses();
    }, []);

    async function getBosses() {
        try {
            const { data } = await api.get(`/bosses`);
            setServers(data);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    function altPages() {
        onClose();

        if (value === undefined) {
            console.log("nulo");
        } else {
            router.push(`/library/${value}`);
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
                <ModalHeader>Confirmar Plano</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>
                        Você está confirmando a compra do plano{" "}
                        <span style={{ fontWeight: 600 }}> {plan?.plan}</span>
                    </Text>
                    <Text>
                        O valor total é de
                        <span style={{ fontWeight: 600 }}> {plan?.value}</span>
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Button
                        bg={"#e1e1e6"}
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
};

export default ModalPremiumConfirm;
