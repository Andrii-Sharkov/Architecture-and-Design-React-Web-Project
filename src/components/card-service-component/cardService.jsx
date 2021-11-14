import React from 'react'
import styled from 'styled-components'


const DisplayCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  width: 500px;
  height: 500px;

  img {
    width: 500px;
    height: 500px;
  }
`;

const CardService = ( {content: {id, image, title, text}} ) => {
  return (
    <DisplayCards>
      <Image>
        <img src={`../../images/${image}`} alt='test'/>
      </Image> 
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </DisplayCards>
  )
}

export default CardService;