/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';





// eslint-disable-next-line no-unused-vars
const Logo =()=>{
    return (
        <View style={styles.container}>
            <Image
            source={require('../img/logo.png')}
             style={{height:80,width:80}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
});
export default Logo;
