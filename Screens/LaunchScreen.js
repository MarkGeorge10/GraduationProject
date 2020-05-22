/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import LoginForm from './LoginScreen';
import Articles from './Articles';
import BG from '../img/background.jpg';

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
          <ImageBackground style={styles.container} source={BG}>
            <LoginForm navigate={navigate}/>
          </ImageBackground>
        );

      case false:
        return <Articles />;
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
