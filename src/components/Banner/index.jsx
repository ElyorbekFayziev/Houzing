import { Blur, Container, Content, Img } from './style';
import img1 from '../../assets/img/house1.png';
import { Button } from '../Generic';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
  const navigate = useNavigate()
  return (
    <Container>
        <Img src={img1} />
      <Blur />
      <Content>
        <Content.Price>Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home</Content.Price>
        <Button width={'220'} onClick={()=>navigate('/properties')}>Read more</Button>
      </Content>
    </Container>
  );
};

export default Banner;