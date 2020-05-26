/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,ImageBackground} from 'react-native';

import LoginForm from './Screens/LoginScreen';
import Articles from './Screens/Articles';
import BG  from './img/background.jpg';



import {createAppContainer} from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import HomeScreen from './Screens/HomeScreen';
import DetailsPage from './Screens/DetailsPage';
import LaunchScreen from './Screens/LaunchScreen';
import SignUpScreen from './Screens/SignUp';
import ForgetPass from './Screens/forgetpass';

// eslint-disable-next-line no-unused-vars
import MainApp from './components/bottomTab';


// eslint-disable-next-line no-unused-vars

const AppNavigator = createStackNavigator(
  {
    LaunchScreen:LaunchScreen,
    SignUpScreen:SignUpScreen,
    ForgetPass:ForgetPass,
    MainApp:MainApp,

  },
  {
    initialRouteName: 'LaunchScreen',
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
