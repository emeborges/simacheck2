import {
    Button,
    Flex,
    keyframes,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { TableCompare } from "./TableCompare";
import { useState } from "react";
/* import { useTranslation } from "hooks/useTranslation"; */


const Compare = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const spin = keyframes`
        from {transform: translateY(-6px);}
        to {transform: translateY(3px)}
    `;

    const spinAnimation = `${spin} infinite 2s linear`;

    return (
        <Flex m={"0 auto"} w={"100%"} flexDir={"column"} align={"center"}>
            <Button
                colorScheme="gray"
                variant="outline"
                borderRadius={"20px"}
                onClick={() => setVisible(!visible)}
            >
                Compare os planos
                <ArrowDownIcon ml={"1rem"} animation={spinAnimation} />
            </Button>
            <Flex
                mt={"1rem"}
                w={"100%"}
                visibility={visible ? "visible" : "collapse"}
                display={visible ? 'flex' : 'none'}
                transition={"0.5s all"}
                justifyContent={"center"}
            >
                <TableCompare />
            </Flex>
        </Flex>
    );
};

export default Compare;
