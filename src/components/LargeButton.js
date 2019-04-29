import React from 'react';
import styled from 'styled-components';
import devices from '../style-utils/devices';

const ButtonView = styled.button`
  background: #fff;
  border: 1px solid black;
  font-size: 1.25em;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 3px;
  outline: none;
  padding: 24px 40px;
  width: 40%;

  &:hover {
    background: transparent;
  }

  @media ${devices.tablet} {
    padding: 10px 20px;
    font-size: 1em;
  }
`;

const Button = props => {
  const { onClick, title } = props;
  return <ButtonView onClick={onClick}>{title}</ButtonView>;
};

export default Button;
