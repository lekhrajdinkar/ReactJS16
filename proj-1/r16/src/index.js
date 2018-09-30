import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App';
import Calculator from './002_LIFT_UP_PROPS/parent_calculator';
import registerServiceWorker from './registerServiceWorker';

// 001 - First Component
//ReactDOM.render(<App1 />, document.getElementById('root')); 

//002 - Lift up
ReactDOM.render(<Calculator />, document.getElementById('root'));

registerServiceWorker();
