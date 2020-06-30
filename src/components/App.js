import React from 'react';

import '../styles/scss/App.scss';

import calculate from '../logic/calculate';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      next: '',
      total: '',
      operation: '',
      result: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(changeState => calculate(changeState, buttonName));
  }

  render() {
    const {
      next, total, operation, result,
    } = this.state;

    return (
      <div className="App">
        <div className="calc-wrapper">
          <Display next={next} total={total} operator={operation} result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
