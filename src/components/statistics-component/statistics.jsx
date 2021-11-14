import React from 'react'
import styled from 'styled-components'
import { Container } from '../styled/container.styled';
import {FaHouseUser} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {BsFillLightbulbFill} from 'react-icons/bs'

const StyledStatistics = styled.section`
  height: 80vh;
  background: #004AE6;

  @media screen and (max-width: 1280px) {
    height: 90vh;
  }

  @media screen and (max-width: 1024px) {
    height: 105vh;
  }

  @media screen and (max-width: 540px) {
    height: 175vh;
  }

  @media screen and (max-width: 375px) {
    height: 145vh;
  }

  @media screen and (max-width: 360px) {
    height: 145vh;
  }
`;

const StatisticsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  padding: 40px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto;
    row-gap: 20px;
  }  

  @media screen and (max-width: 540px) {
    grid-template-columns: auto;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
  padding: 20px 20px;
  border: 1px solid white;
  color: white;
  width: 400px;
  height: 400px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    border-radius: 5px;
    background: white;
    color: #004AE6;
  }

  h3 {
    font-size: 3.5rem;
    font-weight: bold;

    @media screen and (max-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  h4 {
    font-size: 2rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.8rem;
    }
  }

  p {
    text-align: center;
    line-height: 1.3;
    font-size: 1.1rem;

    @media screen and (max-width: 1024px) {
      font-size: 1rem;
      padding: 0 25px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
`;

const Statistics = () => {
  return (
    <StyledStatistics>
      <Container>
        <StatisticsRow>
          <Column>
            <FaHouseUser size='4rem'/>
            <h3>+500</h3>
            <h4>Residences</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque fugit sit est magni quae?
            </p>
          </Column>
          <Column>
            <FaUserAlt size='4rem'/>
            <h3>750</h3>
            <h4>Happy Customers</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque fugit sit est magni quae?
            </p>
          </Column>
          <Column>
            <BsFillLightbulbFill size='4rem'/>
            <h3>+300</h3>
            <h4>Creative Ideas</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, doloremque fugit sit est magni quae?
            </p>
          </Column>
        </StatisticsRow>
      </Container>
    </StyledStatistics>
  )
}

export default Statistics;