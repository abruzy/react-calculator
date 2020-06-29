import React from 'react';
import PropTypes from 'prop-types';

import '../styles/scss/Display.scss';

const Display = ({ result }) => (
  <div className="display">{result}</div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
