// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configStore } from './store.js';

// internal modules
import App from './components/app.jsx';
import '../assets/stylesheets/application.scss';


ReactDOM.render(
  <Provider store={configStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
