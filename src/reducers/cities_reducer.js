const ADD_CITY = 'ADD_CITY';
const SET_CITY = 'SET_CITY';

export const CitiesReducer = ( state = null, action ) => {
  switch(action.type) {
    case ADD_CITY: {
        return [
            ...state,
            action.city
        ];
    }
    case SET_CITY: {
      // return state;
      return action.city;
    } // end of SET_CITY
    default: {
      // return cityDB;
      return state;
    }  // end of default
  }  // end of switch
}
