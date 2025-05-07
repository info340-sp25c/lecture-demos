import React from 'react';
import { HeaderBar } from './Header';

const myNameFromDB = "Kristen"

function App(props) {
  return (
    <HeaderBar myName={myNameFromDB} />
  );
}

export default App;