import styled from "styled-components"

export const Container = styled.div`
    width:100vw;
    height:5.43rem;
    background: #121214;
    box-shadow: inset 0 -2px 0 #2e2929;

    .fixed{
        border-bottom: 2px solid #BA1813;
        }

    .flexRow{
        height:5.43rem;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

        .conteinerLogo{
            height:100%;
            display:flex;
            align-items: center;
            width:25%;

            @media (max-width:600px){
                padding-left: 1rem;
                width:55%;
            }

            .logo{
                max-width:100%;
            }

        }

        .conteinerNav{
            height:100%;
            width:50%;


            .menu {
                display: flex;
                align-items: center;
                justify-content: space-between;
                list-style: none;
                width: 100%;
            }

            li {
                display: flex;
                align-items: center;
                border-bottom: 2px solid transparent;

            }

            .menu > li a {
            height:5.2rem;
            display: flex;
            align-items: center;
            color: white;
            text-decoration: none;
            padding: 0 1rem;


            }

            .menuItemNormal{
                :hover{
                    text-decoration: none;
                    border-bottom: 2px solid #BA1813;


                }
            }

            .menuItemFixed{
                border-bottom: 3px solid #BA1813;

            }

            .menu > li:hover > .submenu,
            .submenu > li:hover > .submenu {
                display: flex;
            }

            .submenu {
            display: none;
            position: absolute;
            top: 5.4rem;
            background: #121214;
            box-shadow: inset 0 -2px 0 #121214;
            left:0;
            right:0;
            padding:3rem;
            width:100%;
            list-style: none;
            justify-content: center;
            align-items: center;
            box-shadow: inset 0 -2px 0 #2e2929;

                a:hover{
                    background: #F5F6FA;
                }
            }

            @media (max-width:600px){
                display:none;
            }
        }



        .conteinerButtons{
            color:#F5F6FA;
            display: flex;
            align-items: center;
            justify-content:space-between;
            list-style: none;


            .login{
                font-size:90%;
                margin:0.5rem;
                padding:0.2rem 1rem;
                border-radius:5px;
                border:1px solid #F5F6FA;
                cursor:pointer;

                :hover{
                    background-color:#F5F6FA;
                    color:#121214;
                    font-weight:700;
                }
            }

            .cadastro{
                border-bottom: 2px solid #BA1813;
                font-size:80%;
                margin-right:1rem;
                cursor:pointer;
            }

            @media (max-width:600px){
                display:none;
            }

        }
    }
`
