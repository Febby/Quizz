import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/marc-st.jpg';


export const GlobalStyle = createGlobalStyle`
 *{
     box-sizing: border-box;
 }
 
 html{
    height: 100%;
 }

 body {
     font-family: 'Zen Loop', cursive;
     background: linear-gradient(to right, #3204fdba, #3204fdba), url(${BGImage});
     background-size: cover;
     margin: 0;
     padding: 0;
     display: flex;
     justify-content: center;
 }



`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 1.5rem;
        color:#fff;
    }

    .score{
        color:#fff;
        font-size:2rem;
        margin: 0;
    }

    h1{
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        -moz-background-clip: text;
        -moz-text-fill-color:transparent;
        filter:drop-shadow(2px 2px #0085a3);
        font-size:70px;
        font-weight:400;
        text-align: center;
        margin: 20px;
    }

     .start,.next{
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow:0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0px 40px;
     }

     .start{
         max-width: 200px;
     }
`