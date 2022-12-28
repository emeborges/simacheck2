import { Alert, AlertDescription, AlertIcon, AlertTitle, Flex } from "@chakra-ui/react";


export const IncompletRegistration = () => {
    return (
        <Alert
            status="warning"
            w={"100%"}
            borderRadius={"8px"}
            boxShadow={"0px 4px 10px rgba(0,0,0,0.2)"}
        >
            <Flex flexDir={"column"}>
                <Flex>
                    <AlertIcon />
                    <AlertTitle fontSize={"0.8rem"}>
                        Seu perfil não está cadastrado por completo!!
                    </AlertTitle>
                </Flex>
                <AlertDescription fontSize={"0.8rem"}>
                    Atualize seu perfil para ter acesso a todos os benefícios
                    como premium.
                </AlertDescription>
            </Flex>
        </Alert>
    );
}

export const TelphoneNotCheck = () => {
    return (
        <Alert
            status="warning"
            w={"100%"}
            borderRadius={"8px"}
            boxShadow={"0px 4px 10px rgba(0,0,0,0.2)"}
        >
            <Flex flexDir={"column"}>
                <Flex>
                    <AlertIcon />
                    <AlertTitle fontSize={"0.8rem"}>
                        Seu WhatsApp não está verificado!!
                    </AlertTitle>
                </Flex>
                <AlertDescription fontSize={"0.8rem"}>
                    Solicite já sua verificação para poder utilizar todas as ferramentas do seu Premium.
                </AlertDescription>
            </Flex>
        </Alert>
    );
};
