export const ADD_CITY = 'ADD_CITY';
export const SET_CITY = 'SET_CITY';

export const addCity = (city) => {
  return {
    type: ADD_CITY,
    city: city
  }
}

export const setCity = (city) => {
  return {
    type: SET_CITY,
    city: city
  }
}

