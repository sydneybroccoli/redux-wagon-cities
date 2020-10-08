import React from 'react';
import { CityList } from '../containers/city_list.jsx';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <CityList
          cities={this.props.cities} />
      </div>
    ); 
  }
}
