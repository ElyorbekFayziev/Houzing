 import React, { useEffect, useState } from 'react';
 import { Container } from './style';
 import Slider from 'react-slick';
 import { useNavigate } from 'react-router-dom';
import { Card } from '../Generic';


 const { REACT_APP_BASE_URL: url } = process.env;
 const settings = {
   className: 'center',
   centerMode: true,
   infinite: true,
   centerPadding: '25px',
   slidesToShow: 3,
   speed: 500,
   arrows: true,
   adaptiveHeight: true,
   dots: true,

   appendDots: (dots) => <h1> {dots} </h1>,
 };

 export const Recomended = ({text}) => {
   const [data, setData] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
     fetch(`${url}/houses/list`)
       .then((res) => res.json())
       .then((res) => {
         setData(res?.data || []);
       });
   }, []);
   return (
     <Container>
      <div className="title">{text || 'Recomended'}</div>
      <div className="info center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
       <Slider {...settings}>
         {data?.map((value) => {
           return (
             <Card
               key={value.id} onClick={() => navigate(`/properties/${value.id}`)}
               data={value}
             />
           );
         })}
       </Slider>
     </Container>
   );
 };

 export default Recomended;