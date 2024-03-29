import { Box, Flex } from '@chakra-ui/react';
import Head from 'next/head'


import { Header } from 'components/Header';
import Radar from 'components/Radar';
import { BossesProvider } from "hooks/useRadarBosses";
import { useRouter } from 'next/router';
import { Footer } from 'components/Footer';
import { withsLogin } from 'utils/withsLogin';

interface Props {
    acess: boolean;
}

const Index = ({ acess }: Props) => {
    const route = useRouter();
    const pid: any = route.query.servidor;

    return (
        <Flex
            minH={"100vh"}
            align={"space-between"}
            flexDir={"column"}
            justify={"space-between"}
        >
            <Head>
                <title>{pid} - Radar SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Box>
                <Header page={"tools"} acess={acess}/>
            </Box>
            <BossesProvider>
                <Radar />
            </BossesProvider>
            <Footer />
        </Flex>
    );
};

export default Index

export const getServerSideProps = withsLogin();
