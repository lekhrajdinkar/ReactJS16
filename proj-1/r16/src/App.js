import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 1. Extend component
class App1 extends Component {
 //1.1 render
  render() {
    return (
      <div className="App">
      {/* 2. JSX, not html. looks like html, get trascompiled into JS. */}
        <header className="App-header">
          <h1 className="App-title">React 16 _ Demo App</h1>
        </header>

        <p className="App-intro">
          
        </p>

      </div>
    );
  }
}

export default App1;
