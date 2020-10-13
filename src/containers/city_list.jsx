import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { default as City } from './city.jsx';

class CityList extends React.Component {
  componentWillMount() {}

  constructor(props) {
    super(props);

    this.state = {
      cities: props.cities
    }
  }


  render() {
    return(
      <ul className="list-group cities">
        {this.props.cities.map( (city, index) => {
          return(
            <City
              key={index}
              city={city} />
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = ( state ) => {
  return state
}

export default connect(mapStateToProps)(CityList);