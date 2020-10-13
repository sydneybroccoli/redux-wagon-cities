import React from 'react';
import { connect } from 'react-redux';

class ActiveCity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCity: props.cities[0],
      cities: props.cities,
    }
  }

  render() {
    if ( !this.props.activeCity ) {
      return(
        <div className="active-city">
          <p>SELECT A CITY...</p>
        </div>
      );
    }

    const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;

    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={url} width="100%" />
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return state
}

export default connect(mapStateToProps)(ActiveCity);