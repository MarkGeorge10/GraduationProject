/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsPage';
import Profile from '../Screens/Profile';
import PostScreen from '../Screens/Posting/PostPage';
import AddShipment from '../Screens/Posting/addShippment';
import AddProduct from '../Screens/Posting/addProduct';
import Categories from '../Screens/Categories';
import Products from '../Screens/Products';
import ProductDetails from '../Screens/ProductDetails';

import Cart from '../Screens/Cart';
import MyOrders from '../Screens/MyOrders';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Products" component={Products} />
      <HomeStack.Screen name="ProductDetails" component={ProductDetails} />
      <HomeStack.Screen name="Cart" component={Cart} />
    </HomeStack.Navigator>
  );
}

/*



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
      <postStack.Screen name="Add shipment" component={AddShipment} />
      <postStack.Screen name="Add product" component={AddProduct} />
    </postStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();


const x = createStackNavigator();
function ChooseCategory() {
  return (
    <x.Navigator>

      <x.Screen name="Categories" component={Categories} />
      <x.Screen name="Products" component={Products} />
      <x.Screen name="ProductDetails" component={ProductDetails} />

      <x.Screen name="Cart" component={Cart} />

    </x.Navigator>
  );
}


const orderStack = createStackNavigator();

function orders() {
  return (
    <orderStack.Navigator>
      <orderStack.Screen name="MyOrders" component={MyOrders} />


    </orderStack.Navigator>
  );
}




export default class MainApp extends React.Component {
  disableYellowBox = true;

  render() {
    
    return (
      <NavigationContainer >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'ios-home';
              } else if (route.name === 'Profile') {
                iconName = 'md-person';
              }
              else if (route.name === 'PostPage') {
                iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
              }
              else if (route.name === 'Categories') {
                iconName = 'md-apps';
              }
              else if (route.name === 'MyOrders') {
                iconName = 'ios-clipboard';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#ffbf00',
            inactiveTintColor: 'gray',
            
          }}


        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Categories" component={ChooseCategory} />
          <Tab.Screen name="PostPage" component={PostStackScreen} />
          <Tab.Screen name="MyOrders" component={orders} />


        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
