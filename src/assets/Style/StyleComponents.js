import styled, { css } from "styled-components";





export const Body = styled.div`

height:100vh;
margin: 0 auto;
padding: 4rem;
text-align: center;
  
font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
line-height: 1.5;
font-weight: 900;

color-scheme: light dark;
color: rgba(255, 255, 255, 0.87);
background-image: url("src/assets/background.jpg");
background-repeat: no-repeat;
background-size: cover;

font-synthesis: none;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-size-adjust: 100%;

`;

export const Container = styled.div`
  
  margin: 20px auto; 
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  color: #242424;
`;

export const CardContanier = styled.div`
  
  margin: 50px auto; 
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 10px;
  border-radius: 10px;
  border: 0.5px solid #01aaff;
  -webkit-box-shadow: 0px 1px 31px 5px rgba(1,170,255,1);
  -moz-box-shadow: 0px 1px 31px 5px rgba(1,170,255,1);
  box-shadow: 0px 1px 31px 5px rgba(1,170,255,1);
  background-color: #fd065f;
  opacity: 0.8; 
  color: #242424;

`;


export const ButtonForm = styled.div`
  
  margin-top:20px; 
  margin-left:15px;
  margin-right:10px;  
  padding: 0px; 
  width: 40%;
  gap: 5px;
  border-radius: 10px;
  border: 0.5px solid #01aaff;
  -webkit-box-shadow: 0px 1px 31px 5px rgba(1,170,255,1);
  -moz-box-shadow: 0px 1px 31px 5px rgba(1,170,255,1);
  box-shadow: 0px 1px 31px 5px rgba(1,170,255,1);
  background-color: #fd065f;
  opacity: 0.8;
  display: inline-block; 
`;

export const TextCard = styled.div`
  padding: 20px; 
`;

export const H1 = styled.h2`
  font-size: 34px;
  margin-bottom: 40px;
`;

export const H2 = styled.h2`
  font-size: 26px;
  color: #ffff;
`;

export const H3 = styled.h3`
  font-size: 20px
  line-height: 32px;
`;

export const Span = styled.span`
  color: #00daff;
  font-weight: bold; 
`;







