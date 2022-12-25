 import React, { forwardRef } from 'react';
 import { Container, Icon, Wrapper } from './style';

 export const Input = forwardRef(
   (
     {type,onChange,value,defalutValue,placeholder,name,width,height,icon,margin,bottom,marginLeft,stil},ref) => {
     return (
       <Wrapper>
         <Icon>{icon}</Icon>
         <Container
           ref={ref}
           icon={icon}
           placeholder={placeholder}
           name={name}
           value={value}
           defaultValue={defalutValue}
           onChange={onChange}
           type={type}
           stil={stil}
           width={width}
           height={height}
           margin={margin}
           bottom={bottom}
           marginLeft={marginLeft}
         />
       </Wrapper>
     );
   }
 );

 export default Input;