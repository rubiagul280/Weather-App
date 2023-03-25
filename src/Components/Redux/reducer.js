/* eslint-disable prettier/prettier */

// import { configureStore } from '@reduxjs/toolkit';
// import weatherReducer from './actions';

// const store = configureStore({
//   reducer: {
//     weather: weatherReducer,
//   },
// });

// export default store;

import { ADD_WEATHER_DATA } from './action';

const initialState = {
  searchResults: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WEATHER_DATA:
      return {
        ...state,
        searchResults: [action.payload, ...state.searchResults],
      };
    default:
      return state;
  }
};

export default weatherReducer;

