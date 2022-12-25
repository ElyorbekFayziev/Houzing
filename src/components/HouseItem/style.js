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
margin-top: 24px;
max-width: 1440px;
width: 100%;
max-height: 800px;
height:fit-content;

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
/* margin-top: ${({ mt }) => `${mt}px`}; */
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
  Hr
};