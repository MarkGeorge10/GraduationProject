/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, ScrollView,StyleSheet,TouchableOpacity} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import OrderItem from '../components/OrderItem';


class  MyOrders extends Component{

    render(){

      return (
        <ScrollView style={styles.container}>

            <OrderItem />
            <OrderItem />
            
            
        </ScrollView>
    );

    }
  }



const styles = StyleSheet.create({
    container:{

        //flex:1,
       // margin:10

    },

    
});

export default MyOrders;
