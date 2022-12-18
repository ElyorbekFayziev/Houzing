import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Container, Link, Logo, Section, Wrapper } from './style';
import {navbar} from '../../utils/navbar';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate('/home')} logo>
          <Logo /> <h3>Houzing</h3>
        </Section>
        <Section>
          {navbar.map(({ title, path }, index) => {
            return (
              <Link
                className={({ isActive }) => isActive && 'active'}
                key={index}
                to={path}
              >
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <Button>Login</Button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;