//import liraries
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StackFunction from './src/router/StackFunctions';

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <StackFunction />
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;
