 import { Dropdown } from 'antd';
 import React from 'react';
 import { useNavigate, useLocation } from 'react-router-dom';
 import { useEffect, useState } from 'react';
 import  {Input,Button} from '../Generic/';
 import { Container, Icons, MenuWrapper, Section, SelectAnt } from './style';
 import { uzeReplace } from '../../hooks/uzeReplace';
 import useSearch from '../../hooks/useSearch';
 const { REACT_APP_BASE_URL: url } = process.env;

 export const Filter = () => {
   const [data, setData] = useState([]);
   const [value, setValue] = useState('Select Category');
   const location = useLocation();
   const navigate = useNavigate();
   const query = useSearch();

   const onChange = ({ target: { name, value } }) => {
     navigate(`${location?.pathname}${uzeReplace(name, value)}`);
   };

   useEffect(() => {
     fetch(`${url}/categories/list`)
       .then((res) => res.json())
       .then((res) => {
         setData(res?.data || []);
       });
   }, []);

   useEffect(() => {
     let [d] = data?.filter(
       (ctg) => ctg.id === Number(query.get('category_id'))
     );
     d?.name && setValue(d?.name);
     !query.get('category_id') && setValue('Select Category');
   }, [location?.search, data,query]);

   const onChangeCategory = (category_id) => {
     navigate(`/properties${uzeReplace('category_id', category_id)}`);
   };
   const onChangeSort = (sort) => {
     navigate(`/properties${uzeReplace('sort', sort)}`);
   };

   const menu = (
     <MenuWrapper>
       <h1 className='subTitle'>Address</h1>
      <Section>
         <Input onChange={onChange} name='country' placeholder='Country' value={query.get('country') || ''}/>
         <Input onChange={onChange} name='region' placeholder='Region'  value={query.get('region') || ''}/>
         <Input onChange={onChange} name='city' placeholder='City'  value={query.get('city') || ''}/>
         <Input onChange={onChange} name='zip_code' placeholder='Zip code'  value={query.get('zip_code') || ''}/>
      </Section>
       <h1 className='subTitle'>Apartment info</h1>
       <Section>
         <Input name='room' onChange={onChange} value={query.get('room') || ''} placeholder='Rooms' />
         <SelectAnt defaultValue={query.get('sort') || 'Select Sort'}onChange={onChangeSort}>
           <SelectAnt.Option value={''}>Select Sort</SelectAnt.Option>
           <SelectAnt.Option value={'asc'}>O'suvchi</SelectAnt.Option>
           <SelectAnt.Option value={'desc'}>Kamayuvchi</SelectAnt.Option>
         </SelectAnt>

         <SelectAnt value={value} onChange={onChangeCategory} defaultValue={query.get('category') || 'Select Category'}>
           <SelectAnt.Option value={''}>Select Category</SelectAnt.Option>
           {data.map((value) => {
             return (
               <SelectAnt.Option key={value.id} value={value?.id}>
                 {value?.name}
               </SelectAnt.Option>
             );
           })}
         </SelectAnt>
       </Section>
       <h1 className='subTitle'>Price</h1>
       <Section>
         <Input onChange={onChange} value={query.get('min_price') || ''} name='min_price' placeholder='Min price' />
         <Input onChange={onChange} value={query.get('max_price') || ''} name='max_price' placeholder='Max price' />
       </Section>
     </MenuWrapper>
   );

   return (
     <Container>
       <Input marginLeft={'20px'} icon={<Icons.Houses />}placeholder={'Enter an address, neighborhood, city, or ZIP code'}/>
      <Dropdown
        overlay={menu}
        placement='bottomRight'
        arrow={{ pointAtCenter: true }}
        trigger='click'
      >
        <div>
          <Button type='light'>
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};
export default Filter;