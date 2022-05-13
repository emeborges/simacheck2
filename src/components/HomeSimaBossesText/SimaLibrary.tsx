import { Flex, Heading, Text, List, ListIcon, ListItem, Button } from "@chakra-ui/react"

import { MdDashboard } from 'react-icons/md'
import { FiBookOpen } from 'react-icons/fi'
import { BsJournalBookmark } from 'react-icons/bs'



const HomeSimaLibrary: React.FC = () => {
    return (
        <>
            <Flex justify={'space-around'}>

                <Flex direction={'column'} p={'1rem'} width={{base:'100%',md:'70%'}}>
                    <Heading as='h2' textAlign={'center'} >
                        Dados, dados e mais dados..
                    </Heading>
                    <Text fontSize='md' wordBreak={'break-word'} align={'center'} pt={'1rem'}>
                        Fácil para alguns, complexo para outros.. Pensando nisso, centralizamos as informações em um só campo, trazendo todas as nossas conclusões e informações em um ambiente de forma única e diretamente.
                    </Text>
                    <Flex direction={'column'}>
                        <Text fontSize='md' wordBreak={'break-word'} align={'center'} p={'0.5rem'}>
                            E uma biblioteca, não é só feita de artigos.. Imagina só:
                        </Text>
                        <List spacing={5} fontSize={'90%'}>
                            <ListItem>
                                <ListIcon as={BsJournalBookmark} />
                                Artigos e informações;
                            </ListItem>
                            <ListItem>
                                <ListIcon as={MdDashboard} />
                                Dados e indicadores;
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FiBookOpen} />
                                Histórias, contos e muito mais!
                            </ListItem>

                            <ListItem>
                                ...
                            </ListItem>


                        </List>

                    </Flex>

                    <Flex justifyContent={'center'} direction={{ base: 'column', md: 'row' }}>
                    <Button mt={'1rem'}
                        w={{ base: '100%', md: '30rem' }}
                        border={'1px solid #fff'}
                        fontSize={{base:'90%', md:'90%'}}
                        bg={'#121214'} wordBreak={'break-all'}
                        color={'#fff'}
                        _hover={{ color: '#121214', bg: '#fff', border: '1px solid #121214' }}>
                        Conheça nossa biblioteca!
                    </Button>

                    <Button mt={'1rem'}
                        w={{ base: '100%', md: '30rem' }}
                        ml={{ md: '0rem', lg: '1rem' }}
                        color={'#121214'}
                        _hover={{ border: '1px solid #fff', bg: '#121214', color: '#fff' }}>
                        Conheça os benefícios do premium!
                    </Button>
                </Flex>

                </Flex>

            </Flex>
        </>
    )
}

export default HomeSimaLibrary
