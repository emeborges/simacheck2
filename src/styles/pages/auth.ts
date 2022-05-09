import styled from "styled-components"

export const Container = styled.div`
    width:100vw;
    height:85vh;
    background-color: #f7f7f7;
    color:#F5F6FA;
    display:flex;
    align-items:center;
    justify-content:center;

    .chamadaConteiner{
        color: #121214;
        max-width:60vh;
        margin-right:5rem;
        .logo{
        width:350px;
    }
    }



    .loginConteiner{
        width:100%;
        max-width:30vw;
        height:50vh;
        display:flex;
        align-items:center;
        justify-content:space-around;
        flex-direction:column;
        background-color:#3e3e45;
        border-radius: 5px;

        form{
            padding:0px 64px;

            .inputsConteiner{
                display:flex;
                flex-direction:column;
                color:#121214;


                input{
                    font-size: 16px;
                    background: #121214;
                    color: rgb(255, 255, 255);
                    border:none;
                    height: 50px;
                    width:20rem;
                    max-width:100%;
                    padding: 0px 1em 0px 0.5em;
                    border-radius: 5px;
                    margin-bottom: 1rem;
                }
            }

            .linksConteiner{
                display:flex;
                flex-direction:column;
                text-align:center;
                font-size:80%;

                a{
                    cursor:pointer;
                    padding:0.2rem;

                    span{
                        color:#BA1813;
                        text-decoration:underline;
                        font-weight:700;
                    }

                }
            }

            button{
                margin:1rem 0rem;
                border:none;
                border-radius:5px;
                padding:0.75rem;
                font-weight:700;
                color:#e1e1e6;
                background: #121214;
                width:100%;
            }


        }
    }

`


export const Chamada = styled.h1`
    font-size:48px;
    `
