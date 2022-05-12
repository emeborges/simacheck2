import { Box, Button, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react';
import Head from 'next/head'
import { useState } from 'react';

import { GiRadarSweep, GiCalculator } from 'react-icons/gi'
import { IoTimerOutline, IoLibraryOutline } from 'react-icons/io5'

import { Container } from "../../styles/pages/home"

import HomeSimaBossesText from 'components/HomeSimaBossesText/SimaBosses';
import HomeSimaCalcText from 'components/HomeSimaBossesText/SimaCalc';
import HomeSimaTimer from 'components/HomeSimaBossesText/SimaTimer';
import HomeSimaLibrary from 'components/HomeSimaBossesText/SimaLibrary';
import { Header } from 'components/Header';
import ModalSelectServer from 'components/ModalServerSelect';



export function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [conteinerNum, setConteinerNum] = useState<number>(2)

    function selectConteiner(num:number) {
        setConteinerNum(num)
    }

    return (
        <Container>
            <Head>
                <title>SimaCheck</title>
                <meta name="description" content="" />
            </Head>

            <Header page={'home'}/>
            <Flex h={'30rem'} justify={'center'} align={'center'} >
                <Box maxW={'1300px'} margin={'0 auto'}>
                    <Box maxW={'90%'} textAlign={'center'} margin={'0 auto'}>
                        <Heading as='h1'>SUA JORNADA NUNCA MAIS SERÁ A MESMA</Heading>
                        <Text>As melhores ferramentas para o seu jogo você encontra aqui!</Text>
                        <Text>Conheça-as agora!</Text>

                        <Flex pt={'1rem'} justify={'space-between'} flexWrap={'wrap'} className='conteinerBtns'>
                            <Button
                                mt={'0.5rem'}
                                bg={'#e1e1e6'}
                                w={'10rem'}
                                h={'5rem'}
                                p={'0.5rem 0rem'}
                                display={'flex'}
                                flexDir={'column'}
                                justifyContent={'space-around'}
                                _hover={{ bg: '#737380' }}
                                onClick={onOpen}
                            >
                                <GiRadarSweep style={{ height: '2rem', width: '2rem' }} />
                                SimaBosses
                            </Button>
                            <Button
                                mt={'0.5rem'}
                                bg={'#e1e1e6'}
                                w={'10rem'}
                                h={'5rem'}
                                p={'0.5rem'}
                                display={'flex'}
                                flexDir={'column'}
                                justifyContent={'space-around'}
                                _hover={{ bg: '#737380' }}
                            >
                                <GiCalculator style={{ height: '2rem', width: '2rem' }} />
                                SimaCalculadora
                            </Button>
                            <Button
                                mt={'0.5rem'}
                                bg={'#e1e1e6'}
                                w={'10rem'}
                                h={'5rem'}
                                p={'0.5rem'}
                                display={'flex'}
                                flexDir={'column'}
                                justifyContent={'space-around'}
                                _hover={{ bg: '#737380' }}
                            >
                                <IoTimerOutline style={{ height: '2rem', width: '2rem' }} />
                                SimaTimer
                            </Button>
                            <Button
                                mt={'0.5rem'}
                                bg={'#e1e1e6'}
                                w={'10rem'}
                                h={'5rem'}
                                p={'0.5rem'}
                                display={'flex'}
                                flexDir={'column'}
                                justifyContent={'space-around'}
                                _hover={{ bg: '#737380' }}
                            >
                                <IoLibraryOutline style={{ height: '2rem', width: '2rem' }} />
                                SimaLibrary
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
            <div className='conteinerDois'>
                <Box maxW={'1300px'} margin={'0 auto'}>
                    <div className="conteinerImg">
                        <img className="imagemFundo one" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/SimaCapa.png" alt="" />
                        <img className="imagemFundo two" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/CyfCapa.png" alt="" />
                        <img className="imagemFundo three" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/bttCapa.png" alt="" />
                    </div>
                </Box>
            </div>
            <div className='conteinerTres'>
                <Box maxW={'1300px'} margin={'0 auto'}>
                    <div className='conteinerTxt'>
                        <Heading as='h1' color={'#FEFEFE'} fontWeight={'900'}>CONHEÇA NOSSAS FERRAMENTAS</Heading>
                        <Text>As melhores ferramentas para o seu jogo você encontra aqui!</Text>
                        <Text>Conheça-as agora!</Text>
                    </div>
                    <Flex
                        direction={'column'}
                        alignItems={'center'}
                        className={'contentTools'}
                    >
                        <div className='conteinerDivs'>
                            <button onClick={() => selectConteiner(1)} className={conteinerNum == 1 ? 'btns ativo' : 'btns'}>
                                SimaBosses
                            </button>
                            <button onClick={() => selectConteiner(2)} className={conteinerNum == 2 ? 'btns ativo' : 'btns'}>
                                SimaCalc
                            </button>
                            <button onClick={() => selectConteiner(3)} className={conteinerNum == 3 ? 'btns ativo' : 'btns'}>
                                SimaTimer
                            </button>
                            <button onClick={() => selectConteiner(4)} className={conteinerNum == 4 ? 'btns ativo' : 'btns'}>
                                SimaLibrary
                            </button>
                        </div>
                        <div className='conteinerConteudo'>
                            {conteinerNum == 1 ? <HomeSimaBossesText /> : null}
                            {conteinerNum == 2 ? <HomeSimaCalcText /> : null}
                            {conteinerNum == 3 ? <HomeSimaTimer /> : null}
                            {conteinerNum == 4 ? <HomeSimaLibrary /> : null}
                        </div>
                    </Flex>
                </Box>
            </div>

            <div className='conteinerQuatro'>
                <Box maxW={'1300px'} margin={'0 auto'}>
                    <div className='conteinerInLine'>
                        <div className='conteinerTxt'>
                            <Heading as='h1'>Quem somos?</Heading>
                            <h2>SimaGuild ou SimaEquipe?!</h2>
                            <p>Chegamos aqui não tão só, tudo aqui foi na base da raça e do KS em hunt!</p>

                            <Button mt={'1rem'} w={'20rem'} bg={'#121214'} color={'#fff'} _hover={{ color: '#121214', bg: '#fff', border: '1px solid #121214' }}>
                                Conheça nossa equipe!
                            </Button>
                        </div>
                        <div className='line' />
                        <div className='conteinerTxt'>
                            <Heading as='h1' >Tá com dúvida?</Heading>
                            <h2>Como funciona, o que é DLD, quando aparece?!</h2>
                            <p>Já que as informações não são poucas, fizemos um guia ideal para você entender todos os relatórios</p>

                            <Button mt={'1rem'} w={'20rem'} bg={'#121214'} color={'#fff'} _hover={{ color: '#121214', bg: '#fff', border: '1px solid #121214' }}>
                                Saiba mais
                            </Button>
                        </div>
                    </div>
                </Box>

            </div>

            <ModalSelectServer isOpen={isOpen} onClose={onClose}/>
        </Container>
  );
}
