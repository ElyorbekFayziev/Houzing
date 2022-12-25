import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Filter from '../Filter';
import Card from '../Generic/Card';
import { Container, Text } from './style';
const {REACT_APP_BASE_URL:url} = process.env

export const Properties = () => {
  const [data,setData] = useState()
  const {search} = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
    fetch(`${url}/houses/list${search}`)
    .then((res)=> res.json())
    .then((res)=>{
    setData(res?.data)
    })
  },[search])
  return<>
    <Filter></Filter>
  <Text>Properties</Text> 
  <Text.P>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Text.P>  
  <Container>
    {data?.map((v)=>{
      return <Card key={v.id} data={v} onClick={()=>navigate(`/properties/${v.id}`)}/>
    })}
  </Container>;
  </> 
};

export default Properties;