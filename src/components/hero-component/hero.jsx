import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../../images/background-1.jpg'
import { Button } from '../styled/button.styled';
import { Container } from '../styled/container.styled';

const StyledHero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('${BackgroundImage}') no-repeat center center/cover; 
  height: 100vh;
  /* filter: brightness(50%); */
`;

const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  width: 400px;
  position: absolute;
  top: 15rem;

  @media screen and (max-width: 1199px) {
    margin: 0 20px;
  }

  @media screen and (max-width: 1024px) {
    top: 5rem;
  }

  @media screen and (max-width: 414px) {
      width: 340px;
    }

  h1 {
    letter-spacing: 3px;
    font-size: 3rem;
    color: white;
    font-weight: 400;
    text-shadow: 4px 8px 12px #333;

    @media screen and (max-width: 414px) {
      font-size: 1.8rem;
    }
  }

  p {
    color: white;
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 15px;

    @media screen and (max-width: 414px) {
      font-size: 1.1rem;
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <HeroTitle>
          <h1>Architecture and Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quo tenetur eligendi tempora sed ipsam minima in maxime nostrum fugiat.
          </p>
          <Button>Read More</Button>
        </HeroTitle>  
      </Container>
    </StyledHero>
  )
}

export default Hero;