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
      total: '0',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(changeState => calculate(changeState, buttonName));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Display result={next} total={total} operator={operation} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
