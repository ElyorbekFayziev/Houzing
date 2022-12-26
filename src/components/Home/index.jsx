import React from 'react';
import Banner from '../Banner';
import Category from '../Category';
import GenCarousel from '../Corusel';
import Filter from '../Filter';
import Recomended from '../Recomended';
import Why from '../Why';
import { Container } from './style';


export const Home = () => {
  return <Container>
    <Filter></Filter>
    <GenCarousel></GenCarousel>
    <Recomended text={'Recomended'}></Recomended>
    <Why></Why>
    <Category></Category>
    <Banner></Banner>
    <Recomended text={'Recent Properties for Rent'}></Recomended>
  </Container>;
};

export default Home;