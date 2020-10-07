import { combineReducers } from 'redux';
import { CitiesReducer } from './cities_reducer';

export const rootReducer = combineReducers({
  cities: CitiesReducer,
});