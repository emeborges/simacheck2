import { Box } from '@chakra-ui/react';
import Head from 'next/head'


import { Header } from 'components/Header';
import { useRouter } from 'next/router';

const Index = () => {
    const route = useRouter();
    const pid: any = route.query.boss;

    console.log(pid)

    return (
        <Box maxW={"100vw"} h={"100vh"}>
            <Head>
                <title>{pid} - Radar SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Header page={"library"} />
            {pid}
        </Box>
    );}

export default Index
