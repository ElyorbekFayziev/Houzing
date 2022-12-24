import styled from "styled-components";

const Wrapper = styled.div`
max-width: 580px;
width: 100%;
height: 376px;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
background-color: white;
position: absolute;
top: 64px;
padding: 24px 30px 0 30px;
`
const Container = styled.div`
background: #E5E5E5;
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-bottom: 415px;
`
const Text = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color:var(--colorPrimary);
margin:44px 0 0 2px;
`
const Checkbox = styled.input`
margin-top: 17px;
width: 18px;
height: 18px;
background: #FFFFFF;
border:2px solid #E6E9EC;
`
Container.Div = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 28px;
`
Text.P= styled.div`
margin: -23px 0 0 31px;
`
Text.Forgot = styled.div`
margin-top: 18px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-decoration-line: underline;
color: #0061DF;
`

export {Container,Wrapper,Text,Checkbox}