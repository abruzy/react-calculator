import React from 'react';
import PropTypes from 'prop-types';

import './button.styles.scss';

const isOperator = val => val === '+' || val === '-' || val === 'X' || val === '÷' || val === '=';

const isZero = val => val === '0';

const Button = ({ children }) => (
  <div className={`button ${isOperator(children) ? 'operator' : null} ${isZero(children) ? 'span' : null}`}>
    {children}
  </div>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
