import { ConteinerMenu, ConteinerSubMenu } from "./style"
import { useRouter } from "next/router"
import { useState } from "react"

import { Image } from "@chakra-ui/react"

import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"


const HeaderMobile: React.FC = () => {
    const route = useRouter()
    const [open, setOpen] = useState(false)

    return (
        <>
            <ConteinerMenu>

                <div className='flexRow'>
                    <div className='conteinerLogo'>
                        <Link href='/' >
                            <a>
                                <Image maxH={'5rem'} className="logo" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/SimacheckLogoHorizontalSvgBranco.svg" alt=""
                                />
                            </a>
                        </Link>
                    </div>
                    {open === false ? <GiHamburgerMenu onClick={() => setOpen(true)} /> : <GrClose onClick={() => setOpen(false)} />}
                </div>
            </ConteinerMenu>

            {open === true ?
                <ConteinerSubMenu>
                    <nav className="conteinerNav">
                        <ul className="menu">
                            <li className={route.pathname == '/' ? 'menuItemFixed' : 'menuItemNormal'} >
                                <Link href='/'>
                                    Home
                                </Link>
                            </li>
                            <li className={route.pathname == '/tools' ? 'menuItemFixed' : 'menuItemNormal'}>
                                <Link href="/tools">
                                    SimaTools
                                </Link>
                            </li>
                            <li className={route.pathname == '/library' ? 'menuItemFixed' : 'menuItemNormal'}>
                                <Link href="/library">
                                    SimaLibrary
                                </Link>
                            </li>
                            <li className={route.pathname == '/faq' ? 'menuItemFixed' : 'menuItemNormal'}>
                                <Link href="/">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <ul className="conteinerButtons">
                        <li className='login'>Entrar</li>
                        <li className='cadastro'>Cadastrar</li>
                    </ul>
                </ConteinerSubMenu> : null}




        </>



    )
}

export default HeaderMobile
