import styled from "styled-components"

export const ConteinerMenu = styled.div`
    width:100vw;
    height:5.43rem;
    background: #121214;
    box-shadow: inset 0 -2px 0 #2e2929;
    padding:0rem 1rem;


    .flexRow{
        height:5.43rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

        .conteinerLogo{
            width:70%;

            .logo{
                max-width:100%;
            }
        }
    }
`

export const ConteinerSubMenu = styled.div`
    width:100%;
    height:90vh;
    box-shadow: inset 0 -2px 0 #2e2929;
    padding:0rem 1rem;
    background:#121214;

    .conteinerNav{
        height:50%;

        .menu {
            padding:1rem;
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content: space-around;
            list-style: none;
            width: 100%;
            height:100%;
            text-decoration:none;
            text-align:center;

            a{
                text-decoration:none;
                color:#F5F6FA;
                font-size:130%;
            }

            .menuItemNormal{
                display:flex;
                align-items:center;
                justify-content:center;
                width:100%;
                height:100%;
                border-bottom: 1px solid #2e2929;
            }

            .menuItemFixed{
                display:flex;
                align-items:center;
                justify-content:center;
                width:100%;
                height:100%;
                border-bottom: 1px solid #BA1813;
            }
        }
    }
    .conteinerButtons{
        padding:1rem;
        display:flex;
        justify-content:space-around;
        list-style: none;
        width: 100%;
        height:100%;
        text-decoration:none;
        text-align:center;
        font-size:110%;
        color:#F5F6FA;
        }
`
