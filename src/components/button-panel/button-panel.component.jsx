import React from 'react';

import './button-panel.styles.scss';

const isOperator = val => val === '+' || val === '-' || val === '*' || val === '÷' || val === '=';

const isZero = val => val === '0';

const ButtonPanel = props => (
  <div
    className={`button-panel ${isOperator(props.children) ? 'operator' : null} ${isZero(props.children) ? 'span' : null}`}>{props.children}
  </div>
);

export default ButtonPanel;
