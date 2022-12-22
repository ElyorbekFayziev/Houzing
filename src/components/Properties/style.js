import styled from 'styled-components';

const Container = styled.div`
/* display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 20px; */
display: grid;
grid-auto-flow: row;
grid-template-columns: repeat(auto-fit,minmax(330px,1fr));
padding: var(--padding);
grid-gap: 20px;
width: 100%;
max-width: 1440px;
margin: auto;
`;
 const Text = styled.div`
 margin-top: 70px;
 font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.02em;
color: #0D263B;
 `

 Text.P = styled.div`
 font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #696969;
margin-bottom: 100px;
 `

export { Container,Text };