import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;

    .alo{
        display:flex;
        align-items:center;
        justify-content:center;
        background:red;
        width:70%;
        height:70%;
        border-radius:100%;

        .fundo{
            width:80%;
            height:80%;
            border-radius:100%;
            background:#f7f7f7;
            display:flex;
            align-items:center;
            justify-content:center;

        }


    }

    .legenda{
        position:absolute;
        display:none;
        align-items:center;
        justify-content:center;
        background:rgba(18,18,20,0.4);
        width:80%;
        height:80%;
        text-align:center;
        border-radius:100%;
        color:#F5F6FA;


    }

    :hover{
        .legenda{
            display:flex;
        }
    }



`
