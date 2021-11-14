import React from 'react'
import styled from 'styled-components'
import { Container } from '../styled/container.styled';
import Image from '../../images/house.jpg'
import Image2 from '../../images/lake-house.jpg'
import { GiGreenhouse } from 'react-icons/gi'
import { Button } from '../styled/button.styled';

const StyledWeDo = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('${Image2}') no-repeat center center/cover;
  background-attachment: fixed;
  height: 100vh;

  @media screen and (max-width: 1280px) {
    height: 110vh;
  }

  @media screen and (max-width: 1024px) {
    height: 130vh;
  }

  @media screen and (max-width: 768px) {
    height: 110vh;
  }

  @media screen and (max-width: 414px) {
    height: 100vh;
  }

  @media screen and (max-width: 375px) {
    height: 80vh;
  }

  @media screen and (max-width: 360px) {
    height: 80vh;
  }
`;

const WeDoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 2fr;
  }
`;

const WeDoColumn = styled.div`
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
  box-shadow: 6px 10px 14px rgba(255, 255, 255, 0.9);
  transform: translate(30px, 240px);

  @media screen and (max-width: 1024px) {
    height: 400px;
    width: 400px;
    transform: translate(130px,230px);
  }

  @media screen and (max-width: 768px) {
    height: 500px;
    width: 500px;
    transform: translate(130px,30px);
  }

  @media screen and (max-width: 540px) {
    height: 350px;
    width: 350px;
    transform: translateX(100px);
    z-index: 10;
  }

  @media screen and (max-width: 414px) {
    height: 350px;
    width: 300px;
    transform: translateX(60px);
  }

  @media screen and (max-width: 375px) {
    transform: translate(40px, -50px);
  }

  @media screen and (max-width: 360px) {
    transform: translate(30px, -50px);
  }

  h3 {
    font-size: 2.3rem;
    color: white;
    letter-spacing: 3px;

    @media screen and (max-width: 540px) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 414px) {
      font-size: 1.4rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: white;

    @media screen and (max-width: 540px) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 414px) {
      font-size: 0.8rem;
    }
  }
`;

const WeDoImage = styled.img`
  width: 600px;
  height: 450px;
  border: 1px solid #004AE6;
  border-radius: 10px;
  box-shadow: 4px 8px 12px rgba(82, 18, 231, 0.9);

  @media screen and (max-width: 1024px) {
    height: 400px;
    width: 500px;
  }

  @media screen and (max-width: 768px) {
    height: 450px;
    width: 550px;
    transform: translateX(105px);
  }
 
  @media screen and (max-width: 540px) {
    height: 300px;
    width: 400px;
    transform: translate(75px,-10px);
  }

  @media screen and (max-width: 414px) {
    height: 260px;
    width: 350px;
    transform: translate(40px,-10px);    
  }

  @media screen and (max-width: 375px) {
    transform: translate(13px, -55px);
  }

  @media screen and (max-width: 360px) {
    width: 335px;
  }
`;

const WeDo = () => {
  return (
    <StyledWeDo>
      <Container>
        <WeDoRow>      
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
          <WeDoImage src={Image} alt='house' /> 
        </WeDoRow>
      </Container>
    </StyledWeDo>
  )
}

export default WeDo;