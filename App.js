/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,ImageBackground} from 'react-native';

import LoginForm from './Screens/Authentication/LoginScreen';
import BG  from './img/background.jpg';



import {createAppContainer} from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';

import LaunchScreen from './Screens/Authentication/LaunchScreen';
import SignUpScreen from './Screens/Authentication/SignUp';
import ForgetPass from './Screens/Authentication/forgetpass';
import GettingStarted from './Screens/Authentication/GettingStarted';


// eslint-disable-next-line no-unused-vars
import MainApp from './components/bottomTab';


// eslint-disable-next-line no-unused-vars

const AppNavigator = createStackNavigator(
  {

    GettingStarted:GettingStarted,
    LaunchScreen:LaunchScreen,
    SignUpScreen:SignUpScreen,
    ForgetPass:ForgetPass,
    MainApp:MainApp,

  },
  {
    initialRouteName: 'GettingStarted',
    headerMode: 'none',
  },




);
// eslint-disable-next-line no-undef
const AppContainer = createAppContainer(AppNavigator);

class  App extends Component{



  render(){

    return (
      <AppContainer />
  );

  }
}



export default App;
