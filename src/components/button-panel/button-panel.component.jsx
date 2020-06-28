import React from 'react';

import Button from '../button/button.component';

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
      pan => <Button key={pan}>{pan}</Button>,
    )}
  </div>
));

const ButtonPanel = () => (
  <div className="button-panel">
    {displayTabs}
  </div>
);

export default ButtonPanel;
