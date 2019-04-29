import React, { useState } from 'react';
import Modal from './components/Modal';
import Header from './components/Header';
import Grid from './components/Grid';

function App() {
  const [isShowingModal, setisShowingModal] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <>
      {isShowingModal && <Modal onClick={() => setisShowingModal(false)} />}
      <Header onClick={() => setisShowingModal(true)} />
      <Grid heroes={[{ name: 'antman' }]} />
    </>
  );
}

export default App;
