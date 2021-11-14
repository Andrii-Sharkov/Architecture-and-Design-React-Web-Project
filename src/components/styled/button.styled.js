import styled from 'styled-components'

export const Button = styled.button`
  width: 200px;
  height: 40px;
  padding: 10px 15px;
  color: white;
  border-radius: 10px;
  border: none;
  box-shadow: 3px 6px 9px rgba(0, 0, 0, 0.8);
  letter-spacing: 2.5px;
  background-color: #004AE6;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid white;
    background: transparent;
    width: 220px;
    color: ${(props) => props.color ? 'black' : 'white'};
  }
`;