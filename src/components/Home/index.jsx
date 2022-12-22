import React from 'react';
import Category from '../Category';
import GenCarousel from '../Corusel';
import Filter from '../Filter';
import { Container } from './style';

export const Home = () => {
  return <Container>
    <Filter></Filter>
    <GenCarousel></GenCarousel>
    <Category></Category>
  </Container>;
};

export default Home;