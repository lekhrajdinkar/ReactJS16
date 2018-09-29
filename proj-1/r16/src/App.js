import React, { Component } from 'react';
import './App.css';
import Comp1 from './first_comp/first_component'
// 1. Extend component
class App1 extends Component {
 //1.1 render
  render() {
    return (
      <div className="App">
      {/* 2. JSX, not html. looks like html, get trascompiled into JS. */}
        <header className="App-header">
          <h1 className="App-title">React 16 _ Demo App</h1>
          <Comp1 />
        </header>      
      </div>
    );
  }
}

export default App1;
