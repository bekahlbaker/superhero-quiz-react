import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './components/Modal';
import Header from './components/Header';
import Grid from './components/Grid';
import Footer from './components/Footer';
import heroes from './heroes.json';

const MainApp = styled.div`
  align-items: center;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${props => props.height};
  overflow: hidden;
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
    <MainApp height={isShowingModal ? '100vh' : 'auto'}>
      {isShowingModal && <Modal onClick={() => setisShowingModal(false)} />}
      <Header onClick={() => setisShowingModal(true)} />
      <Grid heroes={heroes} addToScore={addToScore} shouldReset={shouldReset} />
      <Footer score={score} startOver={startOver} />
    </MainApp>
  );
}

export default App;
