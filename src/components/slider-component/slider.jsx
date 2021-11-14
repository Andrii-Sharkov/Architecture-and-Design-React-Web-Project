import React, { useState } from 'react'
import sliderData from '../../components/SliderData/sliderData'
import styled from 'styled-components'
import { Container } from '../styled/container.styled'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const StyledSlider = styled.section`
  height: 100vh;
  
  @media screen and (max-width: 1280px) {
    height: 120vh;
  }

  @media screen and (max-width: 1024px) {
    height: 160vh;
  }

  @media screen and (max-width: 768px) {
    height: 65vh;
  }

  @media screen and (max-width: 414px) {
    height: 60vh;
  }

  @media screen and (max-width: 375px) {
    height: 50vh;
  }

  @media screen and (max-width: 360px) {
    height: 50vh;
  }
`;

const Image = styled.img`
  width: 800px;
  height: 770px;
  border: 1px solid #004AE6;
  border-radius: 10px;

  @media screen and (max-width: 1000px) {
    width: 650px;
    height: 550px;
  }

  @media screen and (max-width: 849px) {
    width: 550px;
    height: 450px;
  }

  @media screen and (max-width: 734px) {
    width: 450px;
    height: 350px;
  }

  @media screen and (max-width: 628px) {
    width: 400px;
    height: 300px;
  }

  @media screen and (max-width: 575px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
    height: 250px;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  padding: 50px 0;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
`;

const PreviousArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 2rem;
  font-size: 3rem;
  color: #004AE6;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.2);
    color: #004AE6;
  }

  @media screen and (max-width: 414px) {
    top: 35%;
    left: 1.2rem;
  }

  @media screen and (max-width: 375px) {
    left: 0.2rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 2.3rem;
  }
`;

const NextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 2rem;
  font-size: 3rem;
  color: #004AE6;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.2);
    color: #004AE6;
  }

  @media screen and (max-width: 414px) {
    top: 35%;
    right: 1.2rem;
  }

  @media screen and (max-width: 375px) {
    right: 0.2rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 2.3rem;
  }
`;

const SliderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
  width: 1300px;

  div h3 {
    letter-spacing: 3px;
    margin: 15px 0;
    font-size: 1.4rem;
    font-weight: 600;
  }

  div p {
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 1.5px;
  }
`;

const Slider = ( {slides} ) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  }

  const previousSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  }

  console.log(currentIndex);

  return (
    <StyledSlider>
      <Container>
        <SliderContainer>

          <PreviousArrow onClick={previousSlide}>
            <FaArrowAltCircleLeft />
          </PreviousArrow>

          <NextArrow onClick={nextSlide}>
            <FaArrowAltCircleRight />
          </NextArrow>  

          <SliderContent>
            {sliderData.map((slide, index) => {
                return (
                  <div className={index === currentIndex ? 'slide active' : 'slide'} key={index}>
                    {index === currentIndex && (
                      <div>
                        <Image src={slide.image} alt='images'/>
                        <h3>{slide.text}</h3>
                        <p>{slide.desc}</p>
                      </div>                  
                    )}               
                  </div>                                                                                                             
                )
              })} 
          </SliderContent>                
        </SliderContainer>
      </Container>
    </StyledSlider>
  )
}

export default Slider;