 import React, { useEffect, useState } from 'react';
 import { Container } from './style';
 import Slider from 'react-slick';
 import Loading from '../Generic/Loading';
 import { useNavigate } from 'react-router-dom';
import CategoryCard from '../CaregoryCard';


 const { REACT_APP_BASE_URL: url } = process.env;

 const settings = {
   className: 'center',
   centerMode: true,
   infinite: true,
   centerPadding: '25px',
   slidesToShow: 2.91,
   height:'fit-content',
   speed: 500,
   arrows: true,
   adaptiveHeight: true,
   dots: true,
   appendDots: (dots) => <h1> {dots} </h1>,
 };

 export const Category = () => {
   const [data, setData] = useState([]);
   const [load,setLoad] = useState(true)
   const navigate = useNavigate();

   useEffect(() => {
     fetch(`${url}/categories/list`)
       .then((res) => res.json())
       .then((res) => {
         setData(res?.data || []);
         setLoad(false)
       });
   }, []);
   return (
    <>{load?<Loading></Loading>:
      <Container>
      <div className="title">Category</div>
      <div className="info center">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
       <Slider {...settings}>
         {data?.map((value) => {
           return (
             <CategoryCard
             key={value.id} onClick={() => navigate(`/properties?category_id=${value?.id}`)}
             data={value}
             />
             );
            })}
       </Slider>
     </Container>
          }
            </>
   );
 };

 export default Category;