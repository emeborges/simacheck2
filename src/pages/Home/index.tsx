import { Box, Button } from '@chakra-ui/react';
import Head from 'next/head'
import { useState } from 'react';
import { Chamada, ChamadaWhrite } from 'styles/geral'

import { GiRadarSweep, GiCalculator } from 'react-icons/gi'
import { IoTimerOutline, IoLibraryOutline } from 'react-icons/io5'

import Header from '../../components/Header'
import { Container } from "../../styles/pages/home"
import HomeSimaBossesText from 'components/HomeSimaBossesText/SimaBosses';
import HomeSimaCalcText from 'components/HomeSimaBossesText/SimaCalc';
import HomeSimaTimer from 'components/HomeSimaBossesText/SimaTimer';
import HomeSimaLibrary from 'components/HomeSimaBossesText/SimaLibrary';
import useWindowDimensions from 'utils/useWindowDimension';
import HeaderMobile from 'components/HeaderMobile';


export function Home() {

    const [conteinerNum, setConteinerNum] = useState<number>(2)

    function selectConteiner(num:number) {
        setConteinerNum(num)
    }

    const { width } = useWindowDimensions();


    return (
        <Container>
            <Head>
                <title>SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            {width > 800 ? <Header /> : <HeaderMobile />}





        </Container>
  );
}
