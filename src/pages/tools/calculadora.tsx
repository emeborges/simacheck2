import { Box, Heading, Text, Button, useDisclosure } from '@chakra-ui/react';
import Head from 'next/head'

import { Header } from 'components/Header';
import { Container } from "../../styles/pages/tools"



const Index = () => {


    return (
        <Container>
            <Head>
                <title>SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Header page={'tools'} />
            <Box w={'100%'} maxW={'1300px'} margin={'0 auto'}>

                    <Text>Página da calculadora</Text>


                </Box>



        </Container>

)}

export default Index
