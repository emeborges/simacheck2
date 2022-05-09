import { Container } from "./style"
import { useRouter } from "next/router"


import Link from "next/link"
import { Button, Box, Image } from "@chakra-ui/react"
import HeaderMobile from "../HeaderMobile"


const Header: React.FC = () => {
    const route = useRouter()
    console.log(route.pathname)

    return (
        <Container>
            <Box
            h={'100%'}
            maxW={'1300px'}
            margin={'0 auto'}
            >
                <Box className='flexRow' display={{base:'none', md:'flex'}}>
                    <div className='conteinerLogo'>
                        <Link href="/">
                            <Image cursor={'pointer'} src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/SimacheckLogoHorizontalSvgBranco.svg" alt=""
                            />
                        </Link>
                    </div>

                    <nav className="conteinerNav">
                        <ul className="menu">
                            <li className={route.pathname == '/' ? 'menuItemFixed' : 'menuItemNormal'}>
                                <Link href='/'>
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li className={route.pathname == '/tools' ? 'menuItemFixed' : 'menuItemNormal'}>
                                <Link href="/tools">
                                    <a>SimaTools</a>
                                </Link>
                                <ul className="submenu">
                                    <li>
                                        <a href="#">SimaBosses</a>
                                    </li>
                                    <li>
                                        <a href="#">SimaCalc</a>
                                    </li>
                                    <li>
                                        <a href="#">SimaTimer</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={route.pathname == '/library' ? 'menuItemFixed' : 'menuItemNormal'}>
                                <Link href="/library">
                                    <a>SimaLibrary</a>
                                </Link>
                                <ul className="submenu">
                                    <li>
                                        <a href="#">SimaBlog</a>
                                    </li>
                                    <li>
                                        <a href="#">SimaLog</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={route.pathname == 'journal' ? 'menuItemFixed' : 'menuItemNormal'}>
                                <a href="#">FAQ</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="#">Sobre nós</a>
                                    </li>
                                    <li>
                                        <a href="#">Dúvidas</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>

                    <ul className="conteinerButtons">
                        <li className='cadastro'>
                            Cadastrar
                        </li>

                        <Link href="/auth">
                            <li>
                                <Button color={`'#121214'`} _hover={{ color: `'#121214'` }} variant='outline'>
                                    Entrar
                                </Button>
                            </li>
                        </Link>
                    </ul>

                </Box>

            </Box>
        </Container>
    )
}

export default Header
