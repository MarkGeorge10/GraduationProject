/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import LoginForm from './LoginScreen';
import Profile from '../Profile';

class LaunchScreen extends Component {
  state = {
    loggedIn: true,
  };


  static navigationOption = {
    header: null,
  };
  renderContent = () => {
    // eslint-disable-next-line keyword-spacing
    const {navigate} = this.props.navigation;

    switch (this.state.loggedIn) {
      case true:
        return (
          

          
            <LoginForm navigate={navigate}/>
         
        );

      case false:
        return <Profile />;
    }
  };

  render() {
      
    return <View style={styles.container}>{this.renderContent()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export default LaunchScreen;
