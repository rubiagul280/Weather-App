/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addSearchResult } from '../Components/Store/actions';

const API_KEY = '7fa375100fmshaeb23bb655b2631p13b9eejsn4704c48db905'; // Replace with your own API key

export default function HomeScreen({navigation}){
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
          );
          if (!response.ok) {
            throw new Error('Failed to fetch weather data');
          }
          const data = await response.json();
          if (!data.main || !data.main.temp) {
            throw new Error('Invalid weather data');
          }
          setWeatherData(data);
          dispatch(addSearchResult(data));
        } catch (error) {
          console.error(error);
          setWeatherData(null);
        }
      };

  return (
    <View>
    <TextInput
      value={location}
      onChangeText={setLocation}
      placeholder="Enter a city, state, or country"
    />
    <Button title="Search" onPress={fetchData} />
    {weatherData ? (
      <Text>
        Current temperature in {weatherData.name}:{' '}
        {Math.round(weatherData.main.temp - 273.15)}°C
      </Text>
    ) : (
      <Text>Enter a location to get weather data</Text>
    )}
  </View>
  );
};


