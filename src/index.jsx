// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { store } from './store.js';

// internal modules
import { App } from './components/app.jsx';
import '../assets/stylesheets/application.scss';

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store().subscribe( () => {
  console.log(store.getState());
})
