/* eslint-disable prettier/prettier */

// export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

// export const addSearchResult = (data) => {
//   return {
//     type: ADD_SEARCH_RESULT,
//     payload: data,
//   };
// };

import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    searchResults: [],
  },
  reducers: {
    addWeatherData: (state, action) => {
      state.searchResults.push(action.payload);
    },
  },
});

export const { addWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;


