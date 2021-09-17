import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// NAVIGATIONS
import { NavigationContainer } from '@react-navigation/native'
import MainScreen from './src/routes/routes';

// SCREENS
import Home from './src/screens/Home'
import Details from './src/screens/Details'





export default function App() {
  return (

    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});
