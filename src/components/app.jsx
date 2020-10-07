import React from 'react';
import { CityList } from '../containers/city_list.jsx';

const App = ({ cities }) => {
  return (
    <div className="app">
      <CityList
        cities={cities} />
    </div>
  );
};

export default App;
