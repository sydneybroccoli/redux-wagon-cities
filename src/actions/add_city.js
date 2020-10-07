const ADD_CITY = 'ADD_CITY';

export const addCity = (city) => {
  return {
    type: ADD_CITY,
    city: city
  }
}
