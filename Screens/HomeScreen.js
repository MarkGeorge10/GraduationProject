import React from 'react';
import {View, Text} from 'react-native';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home page',
  };
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
