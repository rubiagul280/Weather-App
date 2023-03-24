/* eslint-disable prettier/prettier */

// import { ADD_SEARCH_RESULT } from './actions';

// const initialState = {
//   searchResults: [],
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_SEARCH_RESULT:
//       return {
//         ...state,
//         searchResults: [...state.searchResults, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;

import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './actions';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;