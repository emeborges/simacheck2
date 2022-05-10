import { Flex, Heading, Text, List, ListIcon, ListItem, Button } from "@chakra-ui/react"

import { IoIosNotifications } from 'react-icons/io'
import { BiStopwatch } from 'react-icons/bi'
import { BsFillCalendarEventFill } from 'react-icons/bs'



const HomeSimaTimer: React.FC = () => {
    return (
        <>
            <Flex justify={'space-around'}>

                <Flex direction={'column'} p={'1rem'} width={{base:'100%',md:'70%'}}>
                    <Heading as='h2' textAlign={'center'} >
                        Agendar, matar e planejar..
                    </Heading>
                    <Text fontSize='md' wordBreak={'break-word'} align={'center'} pt={'1rem'}>
                        Todo mundo já chegou na alavanca e esqueceu que já tinha feito o boss não é mesmo?
                    </Text>
                    <Flex direction={'column'}>
                        <Text fontSize='md' wordBreak={'break-word'} align={'center'} p={'0.5rem'}>
                            Aqui, você não encontrará um simples alerta.. Saca só:
                        </Text>
                        <List spacing={4} fontSize={'90%'}>
                            <ListItem>
                                <ListIcon as={BsFillCalendarEventFill} />
                                Agenda de bosses mortos;
                            </ListItem>
                            <ListItem>
                                <ListIcon as={BiStopwatch} />
                                Crônometro de alavancas;
                            </ListItem>
                            <ListItem>
                                <ListIcon as={IoIosNotifications} />
                                Alerta de horário;
                            </ListItem>
                            <ListItem>
                                ...

                            </ListItem>


                        </List>

                    </Flex>

                    <Flex justifyContent={'center'} direction={{ base: 'column', md: 'row' }}>
                    <Button mt={'1rem'} w={{ base: '100%', md: '20rem' }} border={'1px solid #fff'} fontSize={{base:'90%', md:'100%'}} bg={'#121214'} wordBreak={'break-all'} color={'#fff'} _hover={{ color: '#121214', bg: '#fff', border: '1px solid #121214' }}>
                        Conheça nosso timer!
                    </Button>

                    <Button mt={'1rem'} w={{ base: '100%', md: '20rem' }} ml={{ base: '0rem', md: '1rem' }} color={'#121214'} _hover={{ border: '1px solid #fff', bg: '#121214', color: '#fff' }}>
                        Conheça os benefícios do premium!
                    </Button>
                    </Flex>

                </Flex>

            </Flex>
        </>
    )
}

export default HomeSimaTimer
