import React from 'react';
import { dispatch, connect } from 'react-redux';
import { setCity } from '../actions/index.js';

class City extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li
        className="list-group-item"
        id={ this.props.city.name }
        onClick={ (e) => {
          this.props.selectCity( this.props.city ) 
        }} >
        {this.props.city.name}
      </li>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    selectCity: (city) => {
      dispatch( setCity(city) );
    }
  }
}

export default connect(null, mapDispatchToProps)(City);
