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

export default function Footer(props) {
  const { score } = props;
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

  return (
    <Main>
      {clickedShowScore && (
        <Score>
          {`${score}: `}
          <span>{level}</span>
        </Score>
      )}
      <LargeButton title={'GET SCORE'} onClick={clickShowScore} />
    </Main>
  );
}
