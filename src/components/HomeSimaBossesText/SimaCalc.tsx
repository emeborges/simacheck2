import { Flex, Heading, Text, List, ListIcon, ListItem, Button } from "@chakra-ui/react"

import { GiSwordsEmblem, GiShieldReflect } from 'react-icons/gi'
import { BsCalculator } from 'react-icons/bs'
import { FiDivideCircle } from 'react-icons/fi'



const HomeSimaCalcText: React.FC = () => {
    return (
        <Flex justify={'space-around'} width={{ base: '100%', md: '100%' }}>

            <Flex direction={'column'} p={'1rem'} width={{base:'100%',md:'70%'}}>
                <Heading as='h2' textAlign={'center'} >
                    Calcular, planejar e executar..
                </Heading>
                <Text fontSize='md' wordBreak={'break-word'} align={'center'} pt={'1rem'}>
                    A SimaCalc veio com o objetivo de facilitar a sua vida tibiana, trazendo a maior confiabilidade e desempenho já visto!
                </Text>
                <Flex direction={'column'}>
                    <Text fontSize='md' wordBreak={'break-word'} align={'center'} pt={'0.5rem'}>
                        Você encontrará:
                    </Text>
                    <List spacing={3} fontSize={'90%'}>
                        <ListItem>
                            <ListIcon as={FiDivideCircle} />
                            Divisão de Loot;
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsCalculator} />
                            Calculadora de Treino;
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GiSwordsEmblem} />
                            Calculadora de Hunts;
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GiShieldReflect} />
                            Calculadora de Imbuiements;
                        </ListItem>
                        <ListItem>
                            ...

                        </ListItem>


                    </List>

                </Flex>

                <Flex justifyContent={'center'} direction={{ base: 'column', md: 'row' }}>
                    <Button mt={'1rem'} w={{ base: '100%', md: '20rem' }} border={'1px solid #fff'} fontSize={{base:'90%', md:'100%'}} bg={'#121214'} wordBreak={'break-all'} color={'#fff'} _hover={{ color: '#121214', bg: '#fff', border: '1px solid #121214' }}>
                        Conheça nossa calculadora!
                    </Button>

                    <Button mt={'1rem'} w={{ base: '100%', md: '20rem' }} ml={{ base: '0rem', md: '1rem' }} color={'#121214'} _hover={{ border: '1px solid #fff', bg: '#121214', color: '#fff' }}>
                        Conheça os benefícios do premium!
                    </Button>
                </Flex>

            </Flex>

        </Flex>
    )
}

export default HomeSimaCalcText
