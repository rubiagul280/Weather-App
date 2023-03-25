/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import {Button, TextInput, Text, Image} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {addWeatherData} from '../Components/Redux/action';

const API_KEY = 'a130b590debd59952f9d107b76a270ed';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const DEFAULT_CITY = 'Islamabad';

export default function HomeScreen({navigation}) {
  const [searchValue, setSearchValue] = useState(DEFAULT_CITY);
  const [weatherData, setWeatherData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWeatherData(DEFAULT_CITY);
  }, []);

  const fetchWeatherData = async () => {
    try {
      const url = `${API_URL}?q=${searchValue}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      dispatch(addWeatherData(data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    fetchWeatherData(searchValue);
  };

  return (
    <>
      <StatusBar animated={true} backgroundColor="#124499" />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#124499', '#34DFFB']}
        style={styles.container}>
        <View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Enter Location"
              value={searchValue}
              onChangeText={setSearchValue}
            />
            <TouchableOpacity onPress={handleSearch}>
              <Button mode="contained" style={styles.button}>
                Search
              </Button>
            </TouchableOpacity>
          </View>
          {weatherData && (
            <View style={styles.weatherdetails}>
              <Text style={styles.heading}>Today's Weather</Text>
              <Text style={styles.title}>{weatherData.name}</Text>
              <Icon name="weather-cloudy" color={'#124499'} size={140} />
              <Text style={{fontSize: 26}}>{weatherData.main.temp} °C</Text>
              <Text style={{fontSize: 20, marginBottom: 40}}>
                {weatherData.weather[0].main}
              </Text>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.content}>
                  <Icon name="waves" color={'#124499'} size={26} />
                  <Text style={{marginLeft: 8}}>
                    {weatherData.main.humidity}% {'\n'}Humidity
                  </Text>
                </View>
                <View style={styles.content}>
                  <Feather name="wind" color={'#124499'} size={26} />
                  <Text style={{marginLeft: 8}}>
                    {weatherData.wind.speed} m/s {'\n'}Wind Speed
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 45,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    padding: 3,
    paddingLeft: 10,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#FEA500',
    borderRadius: 5,
    alignItems: 'center',
    paddingTop: 5,
  },
  weatherdetails: {
    height: 580,
    width: 320,
    backgroundColor: '#DDE2E3',
    marginTop: 100,
    marginLeft: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
});
