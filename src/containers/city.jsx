import React from 'react';

export class City extends React.Component {
  render () {
    return(
      <div
        className="city"
        id={this.props.name} >
        <div className="city-name">
          {this.props.city.name}
        </div>
      </div>
    )
  }
}
