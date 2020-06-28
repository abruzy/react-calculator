import React from 'react';

import '../styles/scss/App.scss';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Display>0</Display>
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
