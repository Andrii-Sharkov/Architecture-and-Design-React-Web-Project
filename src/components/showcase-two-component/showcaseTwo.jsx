import React from 'react'
import styled from 'styled-components'
import Image1 from '../../images/living-room.jpg'
import Image2 from '../../images/pool-view.jpg'
import Image3 from '../../images/pool-sunset.jpg'
import { Button } from '../styled/button.styled'
import {GiGreenhouse} from 'react-icons/gi' 

const StyledShowcaseTwo = styled.section`
  height: 200vh;
  background: #D7E5F3;
  padding: 25px 0;

  @media screen and (max-width: 1024px) {
    height: 255vh;
  }

  @media screen and (max-width: 768px) {
    height: 240vh;
  }

  @media screen and (max-width: 414px) {
    height: 205vh;
  }

  @media screen and (max-width: 375px) {
    height: 156vh;
  }

  @media screen and (max-width: 360px) {
    height: 158vh;
  }
`;

const RowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const Column1 = styled.div`
  margin: 0 20px;
  width: 100%;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 80%;
  } 
`;

const Column2 = styled.div`
  position: absolute;
  top: 90%;
  right: 0;
  width: 50%;
  margin: 0 20px;

  @media screen and (max-width: 768px) {
    top: 95%;
    width: 80%;
  }
`;

const Column3 = styled.div`
  width: 40%;
  position: absolute;
  top: 46rem;
  left: 10%;
  opacity: 0.9;

  @media screen and (max-width: 768px) {
    top: 55rem;
    left: 10%;
    width: 80%;
  }

  @media screen and (max-width: 540px) {
    top: 39rem;
  }

  @media screen and (max-width: 499px) {
    top: 45rem;
  }

  @media screen and (max-width: 450px) {
    top: 40rem;
  }

  @media screen and (max-width: 414px) {
    top: 30rem;
  }

  @media screen and (max-width: 375px) {
    top: 27rem;
  }

  @media screen and (max-width: 360px) {
    top: 26rem;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const WeDoColumn = styled.div`
  position: absolute;
  top: 4rem;
  right: 11%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 20px;
  background: transparent;
  padding: 30px 35px;
  width: 500px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid #004AE6;
  box-shadow: 4px 8px 12px black;

  h3 {
    font-size: 2.3rem;
    color: white;
    letter-spacing: 3px;

    @media screen and (max-width: 540px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: white;

    @media screen and (max-width: 540px) {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 1280px) {
    top: 60rem;
    right: 6%;
  }

  @media screen and (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    top: 115rem;
    right: 18%;
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 540px) {
    top: 80rem;
    right: 14%;
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 499px) {
    width: 350px;
    height: 350px;
    top: 75rem;

    h3 {
      font-size: 1.8rem;
      color: white;
      letter-spacing: 1.5px;
    }

    p {
      font-size: 1rem;
      margin-bottom: 15px;
      color: white;
    }
  }

  @media screen and (max-width: 414px) {
    width: 350px;
    height: 400px;
    top: 64rem;
    left: 2rem;
  }

  @media screen and (max-width: 375px) {
    top: 56rem;
    left: 0.7rem;
  }

  @media screen and (max-width: 360px) {
    width: 330px;
  }
`;

const ShowcaseTwo = () => {
  return (
    <StyledShowcaseTwo>
      <RowGrid>
        <Column1>
          <Image src={Image1} alt='living room'></Image>
        </Column1>
        <Column2>
          <Image src={Image2} alt='pool view'></Image>
        </Column2>
        <Column3>
          <Image src={Image3} alt='pool sunset'></Image>
        </Column3>
        <WeDoColumn>
          <GiGreenhouse style={{fontSize: '4rem', color: '#004AE6'}}/>
              <h3>What We Do</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, atque similique unde sapiente at dignissimos eius. Numquam quis eaque atque, tenetur exercitationem ut, ullam molestiae, reprehenderit expedita vero quia.
              </p>
              <Button color='black'>
                More
              </Button>
      </WeDoColumn>
      </RowGrid>
    </StyledShowcaseTwo>
  )
}

export default ShowcaseTwo;