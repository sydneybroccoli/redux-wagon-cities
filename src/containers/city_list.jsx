import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { City } from './city.jsx';

export class CityList extends React.Component {
  componentWillMount() {

  }

  render() {
    return(
      <div className="city-list">
        {this.props.cities.map( (city, index) => {
          return(
            <City
              key={index}
              city={city} />
          )
        })}
      </div>
    )
  }
}

// MAP DISPATCH

// MAP STATE TO PROPS