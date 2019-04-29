import React, { useState, useEffect } from 'react';
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
  min-height: 350px;
  justify-content: center;
  min-width: 350px;
  padding-bottom: 24px;
  position: relative;
`;

const Image = styled.img`
  height: 300px;
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

  const { hero, addToScore, shouldReset } = props;
  const { name, image, background, id } = hero;

  var refId = id;

  useEffect(() => {
    if (shouldReset) {
      setAnswer('');
      setIsCorrect(null);
    }
  }, [shouldReset]);

  function checkAnswer(submitted, answer) {
    if (submitted === answer) {
      setIsCorrect(true);
      addToScore();
    } else {
      setIsCorrect(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      checkAnswer(answer, name);
    }
  }

  return (
    <Wrapper>
      <Main background={require(`../img/bg-${background}.png`)}>
        <Number>{id + 1}</Number>
        <Image src={require(`../img/${image}.png`)} alt="" />
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
          type="text"
          onKeyDown={handleKeyDown}
          myRef={ref => (refId = ref)}
        />
        <Submit disabled={isCorrect} onClick={() => checkAnswer(answer, name)}>
          Submit
        </Submit>
      </Main>
    </Wrapper>
  );
}
