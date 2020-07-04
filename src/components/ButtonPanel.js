import React from 'react';
import PropTypes from 'prop-types';

import '../styles/scss/ButtonPanel.scss';

import Button from './Button';

const ButtonPanel = props => {
  const { clickHandler } = props;

  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'X'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];

  const rows = [group1, group2, group3, group4, group5];

  return (
    <div className="button-panel">
      {rows.map(panel => (
        <div className="row" key={panel}>
          {panel.map(pan => (
            <Button
              key={pan}
              name={String(pan)}
              color={['+', '-', 'X', '÷', '='].includes(pan)}
              wide={['0'].includes(pan)}
              clickHandler={clickHandler}
            >
              {pan}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
