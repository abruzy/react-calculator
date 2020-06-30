import React from 'react';
import PropTypes from 'prop-types';

import '../styles/scss/Display.scss';

const Display = ({ result, operator, next }) => (
  <div className="display">
    {result}
    {operator}
    {next}
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
