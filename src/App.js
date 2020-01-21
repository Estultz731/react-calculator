import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Nav = () => (
  <nav>
    <a className='link' href='#practice'>
      React Calculator
    </a>
  </nav>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '0'
    };

    this.clear = this.clear.bind(this);
  }

  clear() {
    this.setState({ result: '0' });
  }

  evaluate() {
    const lastCharacter = this.state.result.slice(-1);
    if (
      lastCharacter === '+' ||
      lastCharacter === '-' ||
      lastCharacter === '*' ||
      lastCharacter === '/'
    ) {
      return;
    }
    const result = `${eval(this.state.result)}`;
    this.setState({ result: result });
  }

  update(value) {
    const newValue = this.state.result + value;
    if (newValue[0] === '0') {
      return this.setState({ result: newValue.slice(1) });
    }
    this.setState({ result: newValue });
  }

  render() {
    return (
      <div className='text-center'>
        <Nav />
        <p style={{ fontSize: '1.25em', margin: '2em 0' }}>
          Yeah, I know, another calculator. But, this is one is made using React
          hooks!
        </p>
        <div className='calculator'>
          <div className='display'>
            <div className='result'>{this.state.result}</div>
          </div>
          <div className='clear-divide'>
            <div className='clear' onClick={this.clear}>
              Clear
            </div>
            <div className='item number' onClick={() => this.update('0')}>
              0
            </div>
            <div className='item operator' onClick={() => this.update('/')}>
              /
            </div>
          </div>
          <div className='top-number-row'>
            <div className='item number' onClick={() => this.update('7')}>
              7
            </div>
            <div className='item number' onClick={() => this.update('8')}>
              8
            </div>
            <div className='item number' onClick={() => this.update('9')}>
              9
            </div>
            <div className='item operator' onClick={() => this.update('+')}>
              +
            </div>
          </div>
          <div className='middle-number-row'>
            <div className='item number' onClick={() => this.update('6')}>
              6
            </div>
            <div className='item number' onClick={() => this.update('5')}>
              5
            </div>
            <div className='item number' onClick={() => this.update('4')}>
              4
            </div>
            <div className='item operator' onClick={() => this.update('-')}>
              -
            </div>
          </div>
          <div className='bottom-number-row'>
            <div className='item number' onClick={() => this.update('3')}>
              3
            </div>
            <div className='item number' onClick={() => this.update('2')}>
              2
            </div>
            <div className='item number' onClick={() => this.update('1')}>
              1
            </div>
            <div className='item operator' onClick={() => this.evaluate()}>
              =
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
