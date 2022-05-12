import { Box, Heading, Text, Button, useDisclosure } from '@chakra-ui/react';
import Head from 'next/head'

import { Header } from 'components/Header';
import { Container } from "../../styles/pages/tools"

import ModalSelectServer from 'components/ModalServerSelect';

const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container>
            <Head>
                <title>SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Header page={'tools'} />
            <Box w={'100%'} maxW={'1300px'} margin={'0 auto'}>

                    <div className='conteudo'>
                        <div className='title'>
                            <p>Bem mais que uma "rastreador" de bosses... </p>
                            <Heading as={'h1'}>Conheça todas nossas ferramentas abaixo</Heading>
                            <h3>Rastreie, calcule, cronometre e aprenda. </h3>
                        </div>
                        <div className='containerTools'>
                            <div className='tools'>
                                <div className='conteinerTitleTools'>
                                    <Heading fontSize={'1.5rem'} as={'h2'}>SimaBosses</Heading>
                                    <div className='line' />
                                </div>

                                <Text p={'0rem 1rem'} fontSize={'0.9rem'}> Aqui você será capaz de verificar todas as informações de bosses tibianos, filtrados desde a possibilidade de aparecimento, da cidade de aparecimento ou separados por Lore..</Text>

                                <Button
                                    mt={'0.5rem'}
                                    bg={'#e1e1e6'}
                                    w={'8rem'}
                                    h={'4rem'}
                                    p={'0.5rem 0rem'}
                                    display={'flex'}
                                    flexDir={'column'}
                                    justifyContent={'space-around'}
                                    _hover={{ bg: '#737380', color:'#fff' }}
                                    onClick={onOpen}
                                >
                                Entrar já!
                                </Button>
                                <ModalSelectServer isOpen={isOpen} onClose={onClose}/>

                            </div>

                            <div className='tools'>
                                <div className='conteinerTitleTools'>
                                    <h3>SimaCalc</h3>
                                    <div className='line' />
                                </div>

                                <p>Teste</p>
                            </div>

                            <div className='tools'>
                                <div className='conteinerTitleTools'>
                                    <h3>SimaTimer</h3>
                                    <div className='line' />
                                </div>

                                <p>Teste</p>
                            </div>
                        </div>
                    </div>



                </Box>



        </Container>

)}

export default Index
