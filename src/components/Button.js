import React from 'react';
import PropTypes from 'prop-types';

import '../styles/scss/Button.scss';

const Button = ({ name, color, wide }) => {
  // const isOperator = color ? 'operator' : 'button';
  // const isWide = wide ? 'span' : '';

  return (
    <div type="button" className="button" style={{ backgroundColor: color ? '#f5913e' : '', flex: wide ? '25%' : '' }}>{name}</div>
  );
};

Button.defaultProps = {
  wide: false,
  color: '#f5913e',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
