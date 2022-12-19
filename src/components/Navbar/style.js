import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as logoImg } from '../../assets/icons/logo.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && 'pointer'};
  .active {
    color: gray;
  }
`;

const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: white;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: white;
`;

export { Container, Wrapper, Section, Logo, Link, Main };