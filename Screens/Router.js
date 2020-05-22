/* eslint-disable no-undef */
import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../Screens/HomeScreen';
import DetailsPage from '../Screens/DetailsPage';


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsPage,
  },
  {
    initialRouteName: 'Home',
  },
);

export default AppNavigator;
