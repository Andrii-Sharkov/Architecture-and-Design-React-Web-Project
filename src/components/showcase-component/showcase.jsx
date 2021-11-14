import React from 'react'
import styled from 'styled-components'
import { Container } from '../styled/container.styled';
import Image1 from '../../images/architecture.jpg'
import Image2 from '../../images/interior-design.jpg'
import Image3 from '../../images/planning.jpg'


const StyledShowcase = styled.section`
  background-color: #D7E5F3;
  height: 120vh;

  @media screen and (max-width: 1280px) {
    height: 130vh;
  }

  @media screen and (max-width: 1110px) {
    height: 200vh;
  }

  @media screen and (max-width: 1024px) {
    height: 165vh;
  }

  @media screen and (max-width: 768px) {
    height: 183vh;
  }

  @media screen and (max-width: 540px) {
    height: 385vh;
  }

  @media screen and (max-width: 411px) {
    height: 340vh;
  }

  @media screen and (max-width: 411px) {
    height: 415vh;
  }

  @media screen and (max-width: 375px) {
    height: 320vh;
  }

  @media screen and (max-width: 360px) {
    height: 318vh;
  }
`;

const ServicesContainer = styled.div`
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  column-gap: 15px;

  @media screen and (max-width: 1024px) {
    padding: 50px;
    column-gap: 0px;
  } 

  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto;
    row-gap: 30px;
  } 

  @media screen and (max-width: 540px) {
    grid-template-columns: auto;
  }
`;

const ServiceColumn = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Akronim&family=Ephesis&display=swap');
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 340px;
  } 

  img {
    width: 100%;
    border-radius: 10px;
    border: 2px solid #004AE6;
    box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.7);
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      border: 2px solid #004AE6;
    }

    @media screen and (max-width: 1270px) {
      width: 300px;
      height: 500px;
    }
  }

  h2 {
    font-size: 1.8rem;
    margin: 30px 0;
    letter-spacing: 2.5px;
    font-family: 'Ephesis', cursive;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.2;
    font-family: 'Akronim', cursive;
    text-align: center;

    @media screen and (max-width: 1270px) {
      padding: 0 60px;
    }
  }
`;

const DecorLine = styled.div`
  width: 70px;
  height: 3px;
  background-color: #004AE6;
  margin-top: 40px;
`;

const Showcase = () => {
  return (
    <StyledShowcase>
      <Container>
        <ServicesContainer>
           <ServiceColumn>
              <img src={Image1} alt=''/>
              <h2>Architecture</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus repellat ullam sunt laborum quod sit quis maxime fugit qui deserunt reprehenderit, sapiente, quisquam, atque fugiat quo error inventore harum.
              </p>
              <DecorLine></DecorLine>
           </ServiceColumn>
           <ServiceColumn>
              <img src={Image2} alt=''/>
              <h2>Interior Design</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus repellat ullam sunt laborum quod sit quis maxime fugit qui deserunt reprehenderit, sapiente, quisquam, atque fugiat quo error inventore harum.
              </p>
              <DecorLine></DecorLine>
           </ServiceColumn>
           <ServiceColumn>
           <img src={Image3} alt=''/>
              <h2>Planning</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis natus repellat ullam sunt laborum quod sit quis maxime fugit qui deserunt reprehenderit, sapiente, quisquam, atque fugiat quo error inventore harum.
              </p>
              <DecorLine></DecorLine>
           </ServiceColumn>
        </ServicesContainer>
      </Container>
    </StyledShowcase>
  )
}

export default Showcase;