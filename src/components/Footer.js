import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LargeButton from './LargeButton';

const Main = styled.div`
  bottom: 0;
  align-items: center;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0px;
  padding: 32px 10px;
  width: 100%;
`;

const Score = styled.p`
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 3em;
  letter-spacing: 5px;

  span {
    font-size: 0.75em;
  }
`;

const BottomFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-top: 36px;
  width: 100%;
`;

const BuiltBy = styled.div`
  a {
    text-decoration: underline;
    text-align: center;
    color: black;
    font-size: 1.25em;
    cursor: pointer;
    letter-spacing: 2px;
  }

  p {
    padding-top: 15px;
    text-align: center;
    color: black;
    font-size: 1em;
    letter-spacing: 2px;
  }
`;

const Reset = styled.button`
  letter-spacing: 2px;
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  padding: 10px 25px;
  border: 1px solid black;
  background: #000;
  color: #fff;

  &:hover {
    background: transparent;
  }
`;

export default function Footer(props) {
  const { score, startOver } = props;
  const [clickedShowScore, setClickedShowScore] = useState(false);
  const [level, setLevel] = useState('ignorant');

  useEffect(() => {
    calculateLevel(score);
  }, [score]);

  function calculateLevel(score) {
    if (score >= 1 && score <= 7) {
      setLevel('novice');
    } else if (score >= 8 && score <= 16) {
      setLevel('apprentice');
    } else if (score >= 17 && score <= 24) {
      setLevel('intermediate');
    } else if (score >= 25 && score <= 32) {
      setLevel('advanced');
    } else if (score >= 33 && score <= 38) {
      setLevel('master');
    } else if (score >= 39) {
      setLevel('expert');
    }
  }

  function clickShowScore() {
    setClickedShowScore(true);
  }

  function clickStartOver() {
    setClickedShowScore(false);
    startOver();
    window.scrollTo(0, 0);
  }

  return (
    <Main>
      {clickedShowScore && (
        <Score>
          {`${score}: `}
          <span>{level}</span>
        </Score>
      )}
      <LargeButton title={'GET SCORE'} onClick={clickShowScore} />
      <BottomFooter>
        <BuiltBy>
          <p>created for Sam & Jack</p>
        </BuiltBy>
        <Reset onClick={clickStartOver}>Start Over</Reset>
      </BottomFooter>
    </Main>
  );
}
