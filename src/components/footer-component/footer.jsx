import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: #333;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 50px 0 0;

  p {
    color: white;
    font-size: 1.2rem;
    letter-spacing: 1.2px;

    span {
      color: #004AE6;
    }
  }

  @media screen and (max-width: 849px) {
    padding: 0 20px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Website is made using React and Styled Components by <span>Andrew Sharkov</span> in 2021</p>
    </StyledFooter>
  )
}

export default Footer;