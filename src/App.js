import React, { useState } from 'react';
import Modal from './components/Modal';
import Header from './components/Header';
import Grid from './components/Grid';

function App() {

  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <>
      {isEditing && (<Modal onClick={() => setIsEditing(false)} />)}
      <Header onClick={() => setIsEditing(true)} />
      <Grid heroes={[{ name: "Batman"}, { name: "Batman"}, { name: "Batman"}, { name: "Batman"}, { name: "Batman"}]}/>
    </>
  );
}

export default App;
