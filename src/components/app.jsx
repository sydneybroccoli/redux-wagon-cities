import React from 'react';
import { connect } from 'react-redux';

import { default as CityList } from '../containers/city_list.jsx';
import { default as ActiveCity } from '../containers/active_city.jsx';

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <CityList />
        <ActiveCity />
      </div>
    ); 
  }
}
