/* eslint-disable prettier/prettier */

import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [navigation]);

  return (
    <>
      <StatusBar animated={true} backgroundColor="#124499" />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#124499', '#124499']}
        style={styles.container}>
        <View>
        <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 70,
    alignItems: 'center',
  },
});

export default SplashScreen;
