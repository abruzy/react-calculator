import React from 'react';
import PropTypes from 'prop-types';

import '../styles/scss/Display.scss';

const Display = ({ result, operator, next }) => (
  <div className="display">
    <div className="ops">{operator}</div>
    <div className="nex">{next}</div>
    <div className="res">{result}</div>
  </div>
);

Display.defaultProps = {
  result: '0',
  operator: '',
  next: '',
};

Display.propTypes = {
  result: PropTypes.string,
  operator: PropTypes.string,
  next: PropTypes.string,
};

export default Display;
