import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Filter from '../Filter';
import Card from '../Generic/Card';
import Loading from '../Generic/Loading';
import { Container, Text } from './style';
const {REACT_APP_BASE_URL:url} = process.env

export const Properties = () => {
  const [data,setData] = useState()
  const [load,setLoad] = useState(true)
  const {search} = useLocation()
  const navigate = useNavigate()
  
  useEffect(()=>{
    fetch(`${url}/houses/list${search}`)
    .then((res)=> res.json())
    .then((res)=>{
      setData(res?.data)
      setLoad(false)
    })
  },[search])
  return(
    <>
  <Filter></Filter>
  <Text>Properties</Text> 
  <Text.P>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Text.P>  
    {load?<Loading></Loading>:
  <Container>
    {data?.map((v)=>{
      return <Card key={v.id} data={v} onClick={()=>navigate(`/properties/${v.id}`)} favorite={v.favorite}/>
    })}
  </Container>
  }
  </> 
  )
};

export default Properties;