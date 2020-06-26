import React from 'react';

import './App.css';

import ButtonPanel from './components/button-panel/button-panel.component';
import Display from './components/display/display.component';

function App() {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Display />
        <div className="row">
          <ButtonPanel>AC</ButtonPanel>
          <ButtonPanel>+/-</ButtonPanel>
          <ButtonPanel>%</ButtonPanel>
          <ButtonPanel>÷</ButtonPanel>
        </div>
        <div className="row">
          <ButtonPanel>7</ButtonPanel>
          <ButtonPanel>8</ButtonPanel>
          <ButtonPanel>9</ButtonPanel>
          <ButtonPanel>*</ButtonPanel>
        </div>
        <div className="row">
          <ButtonPanel>4</ButtonPanel>
          <ButtonPanel>5</ButtonPanel>
          <ButtonPanel>6</ButtonPanel>
          <ButtonPanel>-</ButtonPanel>
        </div>
        <div className="row">
          <ButtonPanel>1</ButtonPanel>
          <ButtonPanel>2</ButtonPanel>
          <ButtonPanel>3</ButtonPanel>
          <ButtonPanel>+</ButtonPanel>
        </div>
        <div className="row">
          <ButtonPanel className="is-zero">0</ButtonPanel>
          <ButtonPanel>.</ButtonPanel>
          <ButtonPanel>=</ButtonPanel>
        </div>
      </div>
    </div>
  );
}

export default App;
