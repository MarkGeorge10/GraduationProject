/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';



// eslint-disable-next-line no-unused-vars
const Loading =()=>{
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2c3e50',
    },
});

