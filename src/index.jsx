// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { configStore } from './store.js';

// internal modules
import { App } from './components/app.jsx';
import '../assets/stylesheets/application.scss';

const mapStateToProps = ( state ) => {
  return state
}
const mapDispatchToProps = ( dispatch ) => {
  return {}
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={configStore()}>
    <Container />
  </Provider>,
  document.getElementById('root')
);
