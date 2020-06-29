import React from 'react';

import '../styles/scss/ButtonPanel.scss';

import Button from './Button';

const panels = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const displayTabs = panels.map(panel => (
  <div className="row" key={panel}>
    {panel.map(
      pan => (
        <Button
          key={pan}
          name={String(pan)}
          color={pan === '+' || pan === '-' || pan === 'X' || pan === '÷' || pan === '='}
          wide={pan === '0'}
        >
          {pan}
        </Button>
      ),
    )}
  </div>
));

const ButtonPanel = () => (
  <div className="button-panel">
    {displayTabs}
  </div>
);

export default ButtonPanel;
