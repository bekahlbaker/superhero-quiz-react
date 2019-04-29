import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './components/Modal';
import Header from './components/Header';
import Grid from './components/Grid';
import Footer from './components/Footer';

// TODO IMPORT HEROES JSON

const MainApp = styled.div`
  align-items: center;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const [isShowingModal, setisShowingModal] = useState(false);
  const [score, setScore] = useState(0);
  const [shouldReset, setShouldReset] = useState(false);

  function addToScore() {
    setScore(score + 1);
  }

  function startOver() {
    setScore(0);
    setShouldReset(true);
  }

  return (
    <MainApp>
      {isShowingModal && <Modal onClick={() => setisShowingModal(false)} />}
      <Header onClick={() => setisShowingModal(true)} />
      <Grid
        heroes={[{ name: 'antman' }]}
        addToScore={addToScore}
        shouldReset={shouldReset}
      />
      <Footer score={score} startOver={startOver} />
    </MainApp>
  );
}

export default App;
