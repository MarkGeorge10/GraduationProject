/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";



// eslint-disable-next-line no-unused-vars
class GettingStarted extends Component {
  disableYellowBox = true;


  render() {

    return (
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(0,0,0,0.5)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 370,
          }}
        />
        <View style={styles.imageContainer}>

          <Image
            source={require('../../img/logo.png')}
            style={{ height: 200, width: 200 }} />

        </View>



        <Text style={styles.text2}>MOSAIC</Text>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('LaunchScreen')}>
          <Text style={styles.button}>Getting Started</Text>
        </TouchableOpacity>




      </View>
    );

  }
};


const sWidth = Dimensions.get('window').width;
const sHeight = Dimensions.get('window').height;
const ratio = sWidth / sHeight;

const styles = StyleSheet.create({

  imageContainer: {
    marginTop: 100,
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',

  },

  container: {
    flex: 1,
    justifyContent: 'center',


  },
  button: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,

  },
  text2: {
    flex: 5,
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
    textShadowRadius: 30,
  

  },



  buttonContainer: {
    backgroundColor: '#ffbf00',
    borderRadius: 18,
    width: '60%',
    height: '8%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 7,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 13 },
    margin: 20,
    padding: 10,



  },


});

export default GettingStarted;
