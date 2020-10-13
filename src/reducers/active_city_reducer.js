const SET_CITY = 'SET_CITY';

export const ActiveCityReducer = ( state = null, action ) => {
  switch(action.type) {
    case SET_CITY: {
      return action.city
    }
    default: {
      return state;
    }  // end of default
  }  // end of switch
}
