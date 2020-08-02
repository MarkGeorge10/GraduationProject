/* eslint-disable no-undef */
import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../Screens/HomeScreen';
import DetailsPage from '../Screens/DetailsPage';

import LaunchScreen from './Screens/Authentication/LaunchScreen';
import SignUpScreen from './Screens/Authentication/SignUp';
import ForgetPass from './Screens/Authentication/forgetpass';
import GettingStarted from './Screens/Authentication/GettingStarted';
import ProductDetail from './Screens/ProductDetails';
import categories from './Screens/Categories';
import product from './Screens/Products';
import Cart from './Screens/Cart';
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsPage,
    GettingStarted:GettingStarted,
    LaunchScreen:LaunchScreen,
    SignUpScreen:SignUpScreen,
    ForgetPass:ForgetPass,
    MainApp:MainApp,
    ProductDetail: ProductDetail,
    categories:categories,
    product:product,
    Cart:Cart,
  },
  {
    initialRouteName: 'Home',
  },
);

export default AppNavigator;
