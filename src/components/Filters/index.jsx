import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, filter, Input, Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"

import { BsFilter } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const Filters = ({ sortName, sortDrop, filterOn }) => {
    const btnRef = useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button ref={btnRef} variant='outline' onClick={onOpen}>
                <BsFilter />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Filtros Disponíveis</DrawerHeader>

                    <DrawerBody>
                        <div className="filters">
                            <div className="conteudo">
                                <span>Ordenar por:</span>
                                <ul>
                                    <li onClick={() => sortName()} className={filterOn === 'boss' ? 'selected' : 'none'}>
                                        Nome
                                        <div className="line" />
                                    </li>
                                    <li onClick={() => sortDrop()} className={filterOn === 'colour_frame' ? 'selected' : 'none'}>
                                        Chance de Aparecimento
                                        <div className="line" /></li>
                                </ul>
                            </div>
                        </div>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Filters
