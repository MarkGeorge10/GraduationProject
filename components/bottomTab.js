/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsPage';
import Articles from '../Screens/Articles';
import PostScreen from '../Screens/PostPage';
import AddShipment from '../Screens/addShippment';
import AddProduct from '../Screens/addProduct';





const HomeStack = createStackNavigator();

/*function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Articles" component={Articles} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Articles} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}*/

const postStack = createStackNavigator();
function PostStackScreen() {
  return (
    <postStack.Navigator>
      <postStack.Screen name="PostScreen" component={PostScreen} />
      <postStack.Screen name="addshipment" component={AddShipment} />
      <postStack.Screen name="addproduct" component={AddProduct} />
    </postStack.Navigator>
  );}

const Tab = createBottomTabNavigator();

export default class MainApp extends React.Component {
  render(){
    return (
        <NavigationContainer>
          <Tab.Navigator
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;

                      if (route.name === 'Home') {
                        iconName = focused
                          ? 'ios-information-circle'
                          : 'ios-information-circle-outline';
                      } else if (route.name === 'Articles') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                      }

                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                  }}


          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Articles" component={Articles} />
            <Tab.Screen name="PostPage" component={PostStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
  }
}
