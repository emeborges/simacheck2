import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    .conteudo{
        height:85.3vh;

        @media only screen and (max-width: 600px) {
            height:86vh;
                }


        .title{
            padding:5rem 0rem 4rem 0rem;
            display:flex;
            align-items:center;
            flex-direction:column;
            text-align:center;
        }

        .containerTools{
            display:flex;
            justify-content:space-between;

            @media only screen and (max-width: 600px) {
                    justify-content:center;
                    flex-wrap:wrap;
                }


            .tools{
                width:24rem;
                box-shadow: 0px 4px 20px rgba(0,0,0,0.2);
                border-radius:5px;
                padding:1rem 0.5rem;

                @media only screen and (max-width: 600px) {
                    margin-top:1rem;
                }

                .conteinerTitleTools{
                    padding-bottom:0.8rem;

                    .line{
                    width:2rem;
                    border-bottom: 2px solid red;
                    }
                }


            }
        }

    }

`
