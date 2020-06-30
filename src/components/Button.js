import React from 'react';
import PropTypes from 'prop-types';

import '../styles/scss/Button.scss';

const Button = ({
  name, color, wide, clickHandler,
}) => (
  <button type="button" className="button" style={{ backgroundColor: color ? '#f5913e' : '', flex: wide ? '27.3%' : '' }} onClick={() => clickHandler(name)}>{name}</button>
);

Button.defaultProps = {
  wide: false,
  color: '#f5913e',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
