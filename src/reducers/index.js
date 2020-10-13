import { combineReducers } from 'redux';

import { ActiveCityReducer } from './active_city_reducer';
import { CitiesReducer } from './cities_reducer';

export const rootReducer = combineReducers({
  activeCity: ActiveCityReducer,
  cities: CitiesReducer,
});