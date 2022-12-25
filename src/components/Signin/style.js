import styled from "styled-components";

const Container = styled.div`
background: #E5E5E5;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
margin-bottom:330px;
`

const Wrap = styled.div`
max-width: 580px;
width: 100%;
height: 280px;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
background-color: white;
position: absolute;
top: 64px;
padding: 24px 30px 0 30px;
`
export {Container,Wrap}