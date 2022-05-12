import { Box, } from '@chakra-ui/react';
import Head from 'next/head'

import { Header } from 'components/Header';
import { Container } from "../../styles/pages/radar"
import { useEffect, useState } from 'react';
import { BossesDetailsProps } from 'utils/types';
import { useRouter } from 'next/router';
import { api } from 'utils/services';
import Filters from '../../components/Filters';
import ConteinerBosses from 'components/BoxBosses';


const Index = () => {
    const [view, setView] = useState('status')
    const [dadoFiltrado, setDadoFiltrado] = useState<string>('colour_frame')
    const [bossesOrganizado, setBossesOrganizado] = useState<BossesDetailsProps[]>([])
    const [load, setLoad] = useState(false)
    const router = useRouter()
    const pid:any = router.query.servidor

    useEffect(() => {
        if (pid) {
            getBossesInfos(pid)

        } else {
            setLoad(true)
        }
    }, [pid])

    async function getBossesInfos(server:string) {
        try {
            const { data } = await api.get(`server/${server}`)
            setBossesOrganizado(data.sort((a:number | any, b:number | any) => { return b[dadoFiltrado] - a[dadoFiltrado] }))
            setLoad(false)

        } catch (e) {
            console.log(e)
        }
    }

    function sortName() {
        setDadoFiltrado('boss')
        setBossesOrganizado(bossesOrganizado?.sort((a, b) => { return a.boss.localeCompare(b.boss) }))
    }

    function sortDrop() {
        setDadoFiltrado('colour_frame')
        setBossesOrganizado(bossesOrganizado?.sort((a, b) => { return b.colour_frame! - a.colour_frame! }))
    }


    return (
        <Container>
            <Head>
                <title>SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Header page={'none'} />
            <Box w={'100%'} maxW={'1300px'} margin={'0 auto'}>
                <div className='infos'>
                    <div className="infosServer lateral">
                        <div className="dadosServidor">
                            <h5>Servidor:</h5>
                            <h3>
                                {pid}
                            </h3>
                        </div>
                        <div className="traco" />
                        <div className="dadosServidor">
                            <h5>Data de Referência:</h5>
                            <h3>
                                {pid}
                            </h3>
                        </div>
                    </div>
                    <div className="infosServer central">
                        <h5>Bosses mortos ontem:</h5>
                    </div>
                    <div className="infosServer lateral">
                        <h5>Conteiner ultimo</h5>
                    </div>
                </div>
                <div className="title">
                    <div className="line">
                        <h1>Radar</h1>
                        <div className="traco" />
                    </div>
                    <div className="selec">
                        <div className="view">
                            <p>
                                Tipo de visualização:
                            </p>
                            <ul>
                                <li className={view === 'status' ? "selecionado" : ""} onClick={() => setView('status')}>
                                    Status
                                    <div className={view === 'status' ?
                                        "line selected" : "line"} />
                                </li>
                                <li className={view === 'lore' ? "selecionado" : ""} onClick={() => setView('lore')}>
                                    Lores
                                    <div className={view === 'lore' ?
                                        "line selected" : "line"} />
                                </li>
                                <li className={view === 'city' ? "selecionado" : ""} onClick={() => setView('city')}>
                                    Cidade
                                    <div className={view === 'city' ?
                                        "line selected" : "line"} />
                                </li>

                            </ul>
                        </div>
                        <div className="filters">
                            <Filters sortName={sortName} sortDrop={sortDrop} filterOn={dadoFiltrado} />
                        </div>
                    </div>
                    <div className="bossesConteiner">
                        {view === 'status' ? <ConteinerBosses bosses={bossesOrganizado} /> : null}
                        </div>
                </div>


            </Box>
        </Container>

)}

export default Index
