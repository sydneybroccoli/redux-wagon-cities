import cities from '../cities.jsx';

export function setCity() {
  // TODO: API call
  // for now we simulate a DB

  return {
    type: ‘SET_CITY’,
    payload: cities
  }
}

