import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
  background: ${props => props.background};
  color: #000;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  margin: 25px 0px;
  max-width: 200px;
  outline: none;
  text-align: center;
  text-transform: lowercase;
  width: 60%;
`;

const TextField = props => {
  const { placeholder, onChange, value, background, onKeyDown, myRef } = props;
  return (
    <TextInput
      background={background}
      placeholder={placeholder}
      onChange={value => onChange(value)}
      value={value}
      onKeyDown={onKeyDown}
      ref={myRef}
    />
  );
};

export default TextField;
