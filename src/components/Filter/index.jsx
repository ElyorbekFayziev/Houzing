 import { Dropdown } from 'antd';
import React, { useRef} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import uzeReplace from '../../hooks/uzeReplace';
 import { Input, Button } from '../Generic';
 import { Container, Icons, MenuWrapper, Section } from './style';

 export const Filter = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const query = useSearch()
  const countryRef = useRef('');
  const regionRef = useRef('');
  const cityRef = useRef('');
  const zipRef = useRef('');
  const roomsRef = useRef('');
  const sortRef = useRef('');
  const sizeRef = useRef('');
  const minPriceRef = useRef('');
  const maxPriceRef = useRef('');

  const onChange=({target:{value,name}})=>{
    navigate(`${location?.pathname}${uzeReplace(name,value)}`)
  }
  const filterMenu =()=> {

    return(
      <MenuWrapper>
       <h1 className='subTitle'>Address</h1>
       <Section>
         <Input defaultValur={query.get('country')} onChange={onChange} name="country" ref={countryRef} placeholder='Country' />
         <Input defaultValur={query.get('region')} onChange={onChange} name="region" ref={regionRef} placeholder='Region' />
         <Input defaultValur={query.get('city')} onChange={onChange} name="city" ref={cityRef} placeholder='City' />
         <Input defaultValur={query.get('zip_code')} onChange={onChange} name="zip_code" ref={zipRef} placeholder='Zip Code' />
       </Section>
       <h1 className='subTitle'>Apartment info</h1>
       <Section>
         <Input defaultValur={query.get('rooms')} onChange={onChange} name="rooms" ref={roomsRef} placeholder='Rooms' />
         <Input defaultValur={query.get('size')} onChange={onChange} name="size" ref={sizeRef} placeholder='Size' />
         <Input defaultValur={query.get('sort')} onChange={onChange} name="sort" ref={sortRef} placeholder='Sort' />
       </Section>
       <h1 className='subTitle'>Price</h1>
       <Section>
         <Input defaultValur={query.get('min_price')} onChange={onChange} name="min_price" ref={minPriceRef} placeholder='Min price' />
         <Input defaultValur={query.get('max_price')} onChange={onChange} name="max_price" ref={maxPriceRef} placeholder='Max price' />
       </Section>
     </MenuWrapper>
       )
      };
   return (
     <Container>
       <Input icon={<Icons.Houses />}  placeholder={'Enter an address, neighborhood, city, or ZIP code'} marginLeft="36"/>
          <Dropdown overlay={filterMenu} placement='bottomRight' arrow={{pointAtCenter:true}} trigger="click">
            <div><Button type='light'><Icons.Filter/>Advanced</Button></div>
         </Dropdown>
       <Button><Icons.Search /> Search</Button>
     </Container>
   );
 };

 export default Filter;