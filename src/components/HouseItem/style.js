import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bed } from "../../assets/icons/bad.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as conditioner } from "../../assets/icons/air-conditioner.svg";
import { ReactComponent as barbecue } from "../../assets/icons/barbecue.svg";
import { ReactComponent as blinds } from "../../assets/icons/blinds.svg";
import { ReactComponent as chair } from "../../assets/icons/chair.svg";
import { ReactComponent as coaxial } from "../../assets/icons/coaxial.svg";
import { ReactComponent as dryer } from "../../assets/icons/dryer.svg";
import { ReactComponent as dumbbell } from "../../assets/icons/dumbbell.svg";
import { ReactComponent as gras } from "../../assets/icons/grass.svg";
import { ReactComponent as laundry } from "../../assets/icons/laundry.svg";
import { ReactComponent as liquidsoap } from "../../assets/icons/liquidsoap.svg";
import { ReactComponent as microwave } from "../../assets/icons/microwave.svg";
import { ReactComponent as outdoorshower } from "../../assets/icons/outdoorshower.svg";
import { ReactComponent as refrigerator } from "../../assets/icons/refrigerator.svg";
import { ReactComponent as sauna } from "../../assets/icons/sauna.svg";
import { ReactComponent as swimmer } from "../../assets/icons/swimmer.svg";
import { ReactComponent as wifi } from "../../assets/icons/wifi.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => `${gap}px`};
  ~ .user {
    background: #ffff;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 20px;
    padding: 24px;
    gap: 24px;
  }
`;

const Img = styled.img`
flex: 1;
margin-top: 24px;
max-width: 1440px; 
min-width: 550px;
max-height: 800px;
height:400px;
`
Img.First = styled.img`
max-width: 285px;
min-width: 280px;
height: 190px;
`
Img.Content = styled.div`
display: grid;
grid-auto-flow: row;
grid-template-columns: repeat(2,minmax(280px,1fr));
margin-top: 25px;
margin-left: 30px;
grid-gap: 20px;
`
const Imgg = styled.div`
border-radius: 3px;
width: 100%;
max-width: 280px;    
min-width: 230px;
height: fit-content;
:hover{
 cursor: pointer;
}
filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;
const type =({blur})=>{
  switch (blur) {
    case 'true':
      return{
        position:'absolute',
        top:'0',
        left:'0',
        right:'0',
        bottom:'0',
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(.jpg)'
      }  
    default:
      return{}
  }
}
Img.Last = styled.img`
width: 280px;
height: 190px;
${type}
`
const Text = styled.div`
position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 3px;
`;

Img.Wrap=styled.div`
display: flex;
position: relative;
max-width: 1440px;
width: 100%;
gap: 20px;
`

const Wrapper = styled.div`
  max-width: var(--width);
  padding: var(--padding);
  width: 100%;
  margin: auto;
  display: flex;
  padding-bottom: 48px;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Content = styled.div`
  display: flex;
  align-items: ${({ flex }) => flex && "center"};
  justify-content: ${({ flex }) => !flex && "center"};
  flex-direction: ${({ flex }) => !flex && "column"};
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #0d263b;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0;
`;

Details.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 24px 0 8px;
`;

const Icons = styled.div``;

Icons.Share = styled(share)`
  display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
Icons.Love = styled(love)`
  display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    stroke: red;
    transform: scale(0.9);
  }
`;

Icons.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Conditioner = styled(conditioner)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Barbecue = styled(barbecue)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Blinds = styled(blinds)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Chair = styled(chair)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Coaxial = styled(coaxial)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Dryer = styled(dryer)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Dumbbell = styled(dumbbell)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Gras = styled(gras)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Laundry = styled(laundry)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Liquidsoap = styled(liquidsoap)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Microwave = styled(microwave)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Outdoorshower = styled(outdoorshower)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Refrigerator = styled(refrigerator)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Sauna = styled(sauna)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Swimmer = styled(swimmer)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;
Icons.Wifi = styled(wifi)`display: inline-block;
  padding: 8px;
  background: #f6f8f9;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }`;

const Hr = styled.div`
width: 1005;
height: 1px;
background: #E6E9EC;
margin-top: ${({ mt }) => `${mt}px`};
`
const Description = styled.div`
  margin-top: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  margin-bottom: 48px;
`;

const User = styled.div``;

User.Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Info = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
margin-top:0.8px;
margin-left: 8px;
`

export {
  Info,
  Container,
  Wrapper,
  Content,
  Section,
  Icons,
  Details,
  Description,
  User,
  Img,
  Hr,
  Blur,
  Text,
  Imgg
};