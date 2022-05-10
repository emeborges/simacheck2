import styled from "styled-components"


export const Container = styled.div`

    .conteinerUm {
        height:30rem;
        display:flex;
        justify-content:center;
        align-items:center;



        .conteinerTxt{
            width:80%;
            text-align:center;
            margin:auto auto;

            @media only screen and (max-width: 600px) {
                padding-top:150px;
                width:90%;
            }

            p{
            padding:0.5rem 0rem 0rem 0.2rem;
            }

            .conteinerBtns{
                padding:1rem;
                display:flex;
                justify-content:space-between;
                flex-wrap:wrap;

                @media only screen and (max-width: 600px) {
                    justify-content:space-around;
                }



            }
        }
    }

    .conteinerDois{
        height:100%;
        background-image: linear-gradient(to bottom, #F5F6FA 0, #F5F6FA 50%, #121214 50%);

        @media only screen and (max-width: 600px) {
                height:100%;
            }

        .conteinerImg{
            display:flex;
            flex-direction:column;
            height:80vh;
            position:relative;
            overflow:hidden;
            align-items:center;
            justify-content:center;

            @media only screen and (max-width: 600px) {
                height:60vh;
            }

        }

        .imagemFundo{
            position:absolute;
            max-width:100%;
            max-height:100%;
            opacity:0;
            animation-name: animacao;
            animation-duration:15s;
            animation-iteration-count: infinite;
            border-radius:10px;
            box-shadow: 0px 1px 20px rgba(42,50,55,0.4);
        }

        .one{

        }
        .two{
            animation-delay:5s;
        }
        .three{
            animation-delay:10s;
        }
    }

    .conteinerTres{
        padding: 5rem;
        background-color: #121214;
        color: #F5F6FA;

        @media only screen and (max-width: 600px) {
                padding: 1rem 0rem;
        }

        .conteinerTxt{
            width:60%;
            text-align:center;
            margin:auto auto;
            color: #F5F6FA;
            padding: 0rem 0rem 1rem 0rem;

            @media only screen and (max-width: 600px) {
                width:90%;
            }

            p{
            padding:0.5rem 0rem 0rem 0.2rem;
            }
        }

        .contentTools {
            max-width:100%;
            display:flex;
            flex-direction: column;
            align-items:center;

            @media only screen and (max-width: 600px) {
                align-items:flex-start;
            }

            .conteinerDivs{
                width: 80%;
                display: grid;
                grid-template-columns: repeat(4,1fr);

                @media only screen and (max-width: 600px) {
                    width:97%;
                    margin:0 auto;
                    max-width:97%;
                }
            }

            .btns{
                font-size:18px;
                margin: 0;
                width:100%;
                padding:1rem 0rem;
                border:1px solid #323238;
                background-color:transparent;
                color: #F5F6FA;
                cursor:pointer;

                @media only screen and (max-width: 600px) {
                    font-size: 90%;
                }


                :first-child{
                    border-top-left-radius: 5px;
                }
                :last-child{
                    border-top-right-radius: 5px;
                }

            }

            .ativo{
                font-weight:bold;
                font-size:18px;
                border-top: 2px solid #BA1813;
                text-decoration-color: #BA1813;
                background: rgba(245,246,250,0.1);
            }

            .conteinerConteudo{
                min-width:80%;
                max-width:80%;
                border-bottom-right-radius: 5px;
                border-bottom-left-radius: 5px;

                border: 1px solid #323238;

                @media (max-width: 600px) {
                    margin:0 auto;
                    min-width:97%;
                max-width:97%;

                }
            }
        }
    }

    .conteinerQuatro{
        margin:0 auto;
        height:100%;

        .conteinerInLine{
            display:flex;
            align-items:center;

            @media only screen and (max-width: 600px) {
                    flex-direction:column;
            }

            .conteinerTxt{
                text-align:center;
                width:50%;
                padding:1rem;

                @media only screen and (max-width: 600px) {
                    width:100%;
                }

                h2{
                    padding:1rem;
                }

                p{
                    padding:0.3rem 0rem;
                }


            }

            .line{
                height:90px;
                border-right: 1px solid red;

                @media only screen and (max-width: 600px) {
                    display:none;
                }
            }


    }

    @keyframes animacao {
        25% {opacity:1;}
        100% {opacity:0;}
    }

    .radioNone{
        display:none;
    }


`
