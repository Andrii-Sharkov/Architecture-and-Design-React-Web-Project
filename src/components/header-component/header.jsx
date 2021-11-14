import React from 'react'
import { Container } from '../styled/container.styled'
import styled from 'styled-components'

import { FaAlignRight } from 'react-icons/fa'

const StyledHeader = styled.header`
  background-color: #D7E5F3;
  padding: 20px 0;
`;

export const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-decoration: none;
  text-shadow: 4px 8px 12px rgba(0, 0, 0, 0.7);
`;

const Menu = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px 15px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;

  @media screen and (max-width: 1199px) {
    margin: 0 20px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo href='#'>LOGO</Logo>
          <Menu>
            <FaAlignRight />
          </Menu>
        </Nav>  
      </Container>
    </StyledHeader>
  )
}

export default Header;