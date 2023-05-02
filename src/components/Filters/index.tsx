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
                                variant={
                                    filterOn === "boss" ? "solid" : "outline"
                                }
                            >
                                Nome
                            </Button>
                            <Button
                                mt={"1rem"}
                                onClick={() => sortDrop()}
                                variant={
                                    filterOn === "colour_frame" ? "solid" : "outline"
                                }
                            >
                                Chance de Aparecimento
                            </Button>
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" w={"100%"} onClick={onClose}>
                            Fechar
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Filters
