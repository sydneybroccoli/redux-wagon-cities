import { createStore } from 'redux';
import { cityDB } from '../assets/data/cities.js';
import { rootReducer } from './reducers/index.js';

export const store = ( state = cityDB ) => {
  return createStore( rootReducer, state );
}

