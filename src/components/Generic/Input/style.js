import styled from 'styled-components';

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  height: ${({ height }) => (height ? `${height}px` : '44px')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  outline: none;
  border: 1px solid #e6e9ec;
  padding-left: ${({ icon }) => (icon ? '35px' : '20px')};
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