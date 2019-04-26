import React, { useState } from 'react';
import TitleLogo from './img/title.png';
import styled from 'styled-components';
import LargeButton from './components/LargeButton';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {

  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div>
      {isEditing && (<Modal onClick={() => setIsEditing(false)} />)}
      <Header onClick={() => setIsEditing(true)} />
    </div>
  );
}

export default App;
