import React from 'react';
import PropTypes from 'prop-types';

import '../styles/scss/Button.scss';

const Button = ({ name, color, wide }) => {
  const isOperator = color ? 'operator' : 'button';
  const isWide = wide ? 'span' : '';

  return (
    <div type="button" className={`button ${isOperator} ${isWide}`}>{name}</div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.bool.isRequired,
  wide: PropTypes.bool.isRequired,
};

export default Button;
