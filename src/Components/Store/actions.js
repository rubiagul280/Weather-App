/* eslint-disable prettier/prettier */

export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';

export const addSearchResult = (data) => {
  return {
    type: ADD_SEARCH_RESULT,
    payload: data,
  };
};

