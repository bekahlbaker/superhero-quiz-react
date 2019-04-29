import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './components/Modal';
import Header from './components/Header';
import Grid from './components/Grid';
import Footer from './components/Footer';

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

  function addToScore() {
    setScore(score + 1);
  }

  return (
    <MainApp>
      {isShowingModal && <Modal onClick={() => setisShowingModal(false)} />}
      <Header onClick={() => setisShowingModal(true)} />
      <Grid heroes={[{ name: 'antman' }]} addToScore={addToScore} />
      <Footer score={score} />
    </MainApp>
  );
}

export default App;
