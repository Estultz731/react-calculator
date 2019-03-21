import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
       <nav>
         <a className="link" href="#practice">Practice Calculator</a>
       </nav>
       <div className="calculator">
          <div className="display">
            <div className="result">0</div>
          </div>
          <div className="clear-divide">
            <div className="clear">Clear</div>
            <div className="item operator">/</div>
          </div>
          <div className="top-number-row">
            <div className="item number">7</div>
            <div className="item number">8</div>
            <div className="item number">9</div>
            <div className="item operator">+</div>
          </div>
          <div className="middle-number-row">
            <div className="item number">6</div>
            <div className="item number">5</div>
            <div className="item number">4</div>
            <div className="item operator">-</div>
          </div>
          <div className="bottom-number-row">
            <div className="item number">3</div>
            <div className="item number">2</div>
            <div className="item number">1</div>
            <div className="item operator">=</div>
          </div>
       </div>
      </>
    );
  }
}

export default App;
