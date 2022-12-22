import styled from "styled-components";
import { ReactComponent as bed} from '../../../assets/icons/bad.svg'
import { ReactComponent as bath } from '../../../assets/icons/bath.svg';
import { ReactComponent as car } from '../../../assets/icons/car.svg';
import { ReactComponent as ruler } from '../../../assets/icons/ruler.svg';
import { ReactComponent as love } from '../../../assets/icons/love.svg';
import { ReactComponent as resize } from '../../../assets/icons/resize.svg';

const Container = styled.div`
width: 100%;
max-width: 380px;
min-width: 330px;
height: 455px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
border-radius: 3px;
position: relative;
`
const Img = styled.img`
width: 100%;
max-height: 220px;
min-height: 200px;
`
const Button1 = styled.button`
position: absolute;
top: 20px;
left: ${({left})=>left && '20px'};
right: ${({right})=>right && '20px'};
width: 73px;
height: 23px;
background: ${({dark})=>dark? '#0d263b':'#0061DF'};
border-radius: 3px;
font-style: normal;
font-weight: 400;
font-size: 10px;
color: white;
border:none;
line-height: 13px;
cursor: pointer;
:active{
    opacity: 0.7;
}
`
const User = styled.img`
position: absolute;
right: 20px;
top: 201px;
border: 2px solid white;
border-radius: 50%;
width: 42px;
height: 42px;
`

const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? 'row' : 'column')};
  justify-content: ${({ footer }) => footer && 'space-between'};
  padding-top: 24px;
  padding: 16px 20px;
  background: white;
`
Content.Text = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0D263B;
margin-bottom: 5px;
display: flex;
overflow: hidden;
white-space: nowrap;
`
const Main = styled.div`
display: flex;
justify-content: space-between;
padding-top: 19px;
`
Main.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: ${({ footer }) => !footer && 'center'};
`

const Way = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;
const Icons = styled.div`
`;

Icons.Bed = styled(bed)`
margin-bottom: 7px;
`;
Icons.Bath = styled(bath)`
margin-bottom: 7px;
`;
Icons.Car = styled(car)`
margin-bottom: 7px;
`;
Icons.Ruler = styled(ruler)`
margin-bottom: 10px;
`;
Icons.Resize = styled(resize)`
  width: 27px;
  height: 27px;
  padding: 6px;
  background: #f6f8f9;
  border-radius: 50%;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
Icons.Love = styled(love)`
  width: 27px;
  height: 27px;
  padding: 6px;
  background: #f6f8f9;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  :active {
    stroke: red;
    transform: scale(0.9);
  }
`
export {Container,Img,Button1,User,Content,Main,Icons,Way}