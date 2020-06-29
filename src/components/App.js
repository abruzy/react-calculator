import React from 'react';

import calculate from '../logic/calculate';

import '../styles/scss/App.scss';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: '0',
      operation: '',
      result: '',
    };
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Display>0</Display>
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
