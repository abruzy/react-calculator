import React from 'react';

import './App.css';

import Display from './components/display/display.component';
import ButtonPanel from './components/button-panel/button-panel.component';

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
