import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/button.styled';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const StyledContacts = styled.section`
  height: 50vh;
  background: #D7E5F3;
  position: relative;

  @media screen and (max-width: 1024px) {
    height: 60vh;
  }

  @media screen and (max-width: 540px) {
    height: 85vh;
  }

  @media screen and (max-width: 375px) {
    height: 70vh;
  }

  @media screen and (max-width: 360px) {
    height: 70vh;
  }
`;

const Form = styled.form`
  margin: 0 auto;
  width: 1250px;
  height: 550px;
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  box-shadow: 4px 8px 12px rgba(255, 255, 255, 0.9);
  position: absolute;
  top: -15rem;
  right: 0;
  left: 0;
  
  @media screen and (max-width: 1250px) {
    width: 950px;
  }

  @media screen and (max-width: 949px) {
    width: 750px;
  }

  @media screen and (max-width: 749px) {
    width: 700px;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }

  @media screen and (max-width: 600px) {
    width: 500px;
  }

  @media screen and (max-width: 499px) {
    width: 400px;
  }

  @media screen and (max-width: 375px) {
    width: 350px;
  }
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;

  input {
    width: 80%;
    border: none;
    border-bottom: 1px solid black;
    padding: 10px 0 10px 10px;
    font-size: 1.1rem;
  }

  textarea {
    width: 80%;
    height: 150px;
    border: none;
    border-bottom: 1px solid black;
    padding: 10px 0 10px 10px;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const FormDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 1.5rem;
    color: #948080;
  }

  h5 {
    letter-spacing: 1.7px;
    font-size: 1.7rem;
    margin: 30px 0;
  }

  p {
    color: #948080;
    font-size: 1.3rem;

    @media screen and (max-width: 375px) {
      font-size: 1.2rem;
    }
  }

  a {
    color: #004AE6;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1.4px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  color: #004AE6;
  cursor: pointer;
  margin-bottom: 30px;
`;

const Contacts = () => {
  return (
    <StyledContacts>
      <Form>
        <FormInput>
          <input type='text' placeholder='Enter your Name'/>
          <input type='email' placeholder='Enter a valid email address' />
          <textarea placeholder='Enter your Message'></textarea>
          <Button color='white'>SUBMIT</Button>
        </FormInput>
        <FormDetails>
          <h4>Join Our Newsletter</h4>
          <h5>Contact Us</h5>
          <p>2323 15 Any Street, 123-456-7890</p>
          <p>Monday - Friday: 9:00 am - 8:00 pm,</p>
          <p>Sat – Sun: 9:00 am – 10 pm</p>
          <a href='#'>contacts@architecturemail.com</a>
          <h5>Follow Us</h5>
          <SocialLinks>
            <FaFacebook size='3rem' />
            <FaInstagram size='3rem' />
            <FaTwitter size='3rem' />
            <FaYoutube size='3rem' />
          </SocialLinks>
          <p>©2021 Privacy policy</p>
        </FormDetails>
      </Form>
    </StyledContacts>
  )
}

export default Contacts;