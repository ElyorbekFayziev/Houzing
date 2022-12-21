import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Filter from '../Filter';
import Card from '../Generic/Card';
import { Container } from './style';
const {REACT_APP_BASE_URL:url} = process.env

export const Properties = () => {
  const [data,setData] = useState()
  const {search} = useLocation()

  useEffect(()=>{
    fetch(`${url}/houses/list${search}`)
    .then((res)=> res.json())
    .then((res)=>{
    console.log(res)
    setData(res?.data)
    })
  },[search])
  return<>
    <Filter></Filter>
  <Container>
    {data?.map((v)=>{
      return <Card key={v.id} data={v}/>
    })}
  </Container>;
  </> 
};

export default Properties;