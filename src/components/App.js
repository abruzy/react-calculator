import React from 'react';

import '../styles/scss/App.scss';

import calculate from '../logic/calculate';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      next: '0',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(changeState => calculate(changeState, buttonName));
  }

  render() {
    const { next, operation } = this.state;
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Display result={next} operator={operation}>0</Display>
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
