import styled from 'styled-components';

const typeOf = ({stil})=>{
  switch (stil) {
    case 'none':
      return{
        borderTop:'none',
        borderRight:'none',
        borderLeft:'none'
      }
    default:
      break;
  }
}

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  height: ${({ height }) => (height ? `${height}px` : '44px')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin-top:${({margin})=>(margin? `${margin}px`:'0px')};
  margin-bottom:${({bottom})=>(bottom? `${bottom}px`:'0px')};
  outline: none;
  border: 1px solid #e6e9ec;
  padding-left: ${({ icon }) => (icon ? '35px' : '20px')};
  padding-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px`: '20px')};
  ${typeOf}
  :focus{
    border-bottom: 1px solid #0061DF;
  }
 `;

 const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
 `;
 const Icon = styled.div`
  position: absolute;
  left: 10px;
 `;

 export { Container, Wrapper, Icon };