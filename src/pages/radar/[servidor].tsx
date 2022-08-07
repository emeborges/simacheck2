import { Box } from '@chakra-ui/react';
import Head from 'next/head'


import { Header } from 'components/Header';
import Radar from 'components/Radar';
import { BossesProvider } from "hooks/useRadarBosses";
import { useRouter } from 'next/router';
import { title } from 'node:process';

const Index = () => {
    const route = useRouter();
    const pid: any = route.query.servidor;

    return (
        <Box maxW={"100vw"} h={"100vh"}>
            <Head>
                <title>{pid} - Radar SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Header page={"tools"} />
            <BossesProvider>
                <Radar />
            </BossesProvider>
        </Box>
    );}

export default Index
