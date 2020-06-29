import React from 'react';
import PropTypes from 'prop-types';

import '../styles/scss/Display.scss';

const Display = ({ result, operator }) => (
  <div className="display">
    {result}
    {operator}
  </div>
);

Display.defaultProps = {
  result: '0',
  operator: '',
};

Display.propTypes = {
  result: PropTypes.string,
  operator: PropTypes.string,
};

export default Display;
