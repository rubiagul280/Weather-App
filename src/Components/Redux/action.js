/* eslint-disable prettier/prettier */

export const ADD_WEATHER_DATA = 'ADD_WEATHER_DATA';

export const addWeatherData = (data) => {
  return {
    type: ADD_WEATHER_DATA,
    payload: data,
  };
};
