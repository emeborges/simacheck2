import { Flex, Heading, Text, List, ListIcon, ListItem, Button } from "@chakra-ui/react"

import { IoMapSharp } from 'react-icons/io5'
import { MdOutlineGroups } from 'react-icons/md'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { BsArrowDownUp } from 'react-icons/bs'



const HomeSimaBossesText: React.FC = () => {
    return (
        <Flex justify={'space-around'} width={{ base: '100%', md: '100%' }}>

            <Flex direction={'column'} p={'1rem'} width={'70%'}>
                <Heading as='h2' textAlign={'center'} >
                    Rastrear, mensurar e planejar..
                </Heading>
                <Text fontSize='md' wordBreak={'break-word'} align={'center'} pt={'1rem'}>
                    Esse é o objetivo do SimaBosses, mepear e demonstrar de maneira rápida e precisa todo o universo dos bosses tibiano. Nesta ferramenta, você encontra a forma mais visual, deixando seu BossCheck cada vez melhor.
                </Text>
                <Flex direction={'column'}>
                    <Text fontSize='md' wordBreak={'break-word'} align={'center'} pt={'0.5rem'}>
                        Aqui você encontrará:
                    </Text>
                    <List spacing={3} fontSize={'90%'}>
                        <ListItem>
                            <ListIcon as={BsArrowDownUp} />
                            Chance de aparecimento;
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdOutlineGroups} />
                            Agrupamentos por Lores;
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoMapSharp} />
                            Agrupamentos por Cidade;
                        </ListItem>
                        <ListItem>
                            <ListIcon as={AiTwotoneCalendar} />
                            Agenda de Aparecimendo;
                        </ListItem>
                        <ListItem>
                            ...

                        </ListItem>


                    </List>

                </Flex>

                <Flex justifyContent={'center'} direction={{ base: 'column', md: 'row' }}>
                    <Button mt={'1rem'} w={{ base: '100%', md: '20rem' }} border={'1px solid #fff'} bg={'#121214'} color={'#fff'} _hover={{ color: '#121214', bg: '#fff', border: '1px solid #121214' }}>
                        Conheça nossa sessão de bosses!
                    </Button>

                    <Button mt={'1rem'} w={{ base: '100%', md: '20rem' }} ml={{ base: '0rem', md: '1rem' }} color={'#121214'} _hover={{ border: '1px solid #fff', bg: '#121214', color: '#fff' }}>
                        Conheça os benefícios do premium!
                    </Button>
                </Flex>

            </Flex>

        </Flex>
    )
}

export default HomeSimaBossesText
