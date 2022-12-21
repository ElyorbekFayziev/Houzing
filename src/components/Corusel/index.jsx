import React, { useRef } from 'react';
import { Arrow, Blur, Container, Content, Img } from './style';
import { Carousel } from 'antd';

import img1 from '../../assets/img/house1.png';
import img2 from '../../assets/img/house2.png';
import { Button } from '../Generic';
import { useNavigate } from 'react-router-dom';

export const GenCarousel = () => {
  const navigate = useNavigate()
  const slider = useRef();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === 'right') slider.current.next();
    if (name === 'left') slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc className='subChild'>
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Desc>
        <Content.Price>5,250 / month</Content.Price>
        <Button width={'220'} type={'transparent'} onClick={()=>navigate('/properties')}>Read more</Button>
      </Content>
      <Arrow data-name='left' onClick={onMove} name="left" />
      <Arrow data-name='right' onClick={onMove} name='right' />
    </Container>
  );
};

export default GenCarousel;