import { Flex, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Text, useDisclosure } from "@chakra-ui/react"

import { BsFilter } from 'react-icons/bs';

interface Props {
    sortName: any;
    sortDrop: any;
    filterOn: any;
}

const Filters = ({ sortName, sortDrop, filterOn }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button variant="outline" onClick={onOpen}>
                <BsFilter />
            </Button>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Filtros Disponíveis</DrawerHeader>

                    <DrawerBody>
                        <Text>Ordenar Bosses por:</Text>
                        <Flex align={"center"} flexDir={"column"}>
                            <Button
                                mt={"1rem"}
                                onClick={() => sortName()}
                                color={filterOn == "boss" ? "#fff" : "#18181B"}
                                bg={filterOn == "boss" ? "#18181B" : "#fff"}
                                border={
                                    filterOn == "boss"
                                        ? "none"
                                        : "1px solid #18181B"
                                }
                            >
                                Nome
                            </Button>
                            <Button
                                mt={"1rem"}
                                onClick={() => sortDrop()}
                                color={
                                    filterOn == "colour_frame"
                                        ? "#fff"
                                        : "#18181B"
                                }
                                bg={
                                    filterOn == "colour_frame"
                                        ? "#18181B"
                                        : "#fff"
                                }
                                border={
                                    filterOn == "colour_frame"
                                        ? "none"
                                        : "1px solid #18181B"
                                }
                            >
                                Chance de Aparecimento
                            </Button>
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" w={'100%'} onClick={onClose}>
                            Fechar
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Filters
