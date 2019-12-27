import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './HomeScreen';
import CreateTrip from './CreateTrip';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  CreateTrip: {screen: CreateTrip}
});

const App = createAppContainer(MainNavigator);

export default App;