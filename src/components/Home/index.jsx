import React from 'react';
import GenCarousel from '../Corusel';
import Filter from '../Filter';
import { Container } from './style';

export const Home = () => {
  return <Container>
    <Filter></Filter>
    <GenCarousel></GenCarousel>
  </Container>;
};

export default Home;