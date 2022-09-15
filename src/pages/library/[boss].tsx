import { Box } from '@chakra-ui/react';
import Head from 'next/head'

import { Container } from "../../styles/pages/tools";
import { Header } from 'components/Header';
import { useRouter } from 'next/router';

const Index = () => {
    const route = useRouter();
    const pid: any = route.query.boss;

    console.log(pid)

    return (
        <Container>
            <Box maxW={"100vw"} h={"100vh"}>
                <Head>
                    <title>{pid} - Radar SimaCheck</title>
                    <meta name="description" content="" />
                </Head>
                <Header page={"library"} />
                <Box
                    w={"100%"}
                    maxW={"1300px"}
                    minH={"79.5vh"}
                    margin={"0 auto"}
                >

                {pid}
                </Box>
            </Box>
        </Container>
    );}

export default Index
