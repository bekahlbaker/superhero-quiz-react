import React, { Component, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  background: ${props => `url(${props.background})`};
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  height: 300px;
  width: 300px;
  padding: 8px;
  padding-top: 75px;
  position: relative;
`;

const Title = styled.p`
  font-size: 1.25em;
  font-weight: 600;
  text-align: center;
`;

const Description = styled.p`
  color: black;
  margin: 2px;
`;



const HeroCard = props => {
  const { hero } = props;
  const { name, backgroundColor } = hero;
  return (
    <Wrapper>
      <Main background='../img/bg-blue.png'>
      <img src={require('../img/a1.png')} />
        <Title>{name}</Title>
      </Main>
    </Wrapper>
  );
};

export default HeroCard;
