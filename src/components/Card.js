import React, { useState } from 'react';
import Input from './Input';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Main = styled.div`
  align-items: center;
  background: url(${props => props.background});
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  justify-content: center;
  width: 300px;
  padding-bottom: 24px;
  position: relative;
`;

const Number = styled.h2`
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding-top: 24px;
  text-align: left;
  width: 85%;
`;

const Submit = styled.button`
  border: 1px solid black;
  background: #000;
  color: #fff;
  font-size: 0.75em;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  padding: 5px 10px;
  text-align: center;
  text-transform: lowercase;
  width: 100px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default function HeroCard(props) {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const { hero, addToScore } = props;
  const { name, backgroundColor } = hero;

  const color = 'pink';
  const image = 'b2';

  function checkAnswer(submitted, answer) {
    if (submitted === answer) {
      setIsCorrect(true);
      addToScore();
    } else {
      setIsCorrect(false);
    }
  }

  return (
    <Wrapper>
      <Main background={require(`../img/bg-${color}.png`)}>
        <Number>1</Number>
        <img src={require(`../img/${image}.png`)} alt="" />
        <Input
          background={
            isCorrect !== null
              ? isCorrect === true
                ? '#1E824C'
                : '#D72729'
              : 'white'
          }
          value={answer}
          onChange={value => setAnswer(value.target.value)}
        />
        <Submit onClick={() => checkAnswer(answer, name)}>Submit</Submit>
      </Main>
    </Wrapper>
  );
}
