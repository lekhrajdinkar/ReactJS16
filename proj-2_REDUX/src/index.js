import React from 'react';
import ReactDOM from 'react-dom';

//2. Install react-redux pkg using npm and add import
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

// 3 . Create REDUX store with Reducer
const store = createStore(reducer);

// 4. Wrap  <App /> with Provider along with Store ref.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
