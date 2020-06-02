/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


class  OrderItem extends Component{

    render(){

      return (
        
            <Card style={styles.container} elevation={15}>
                
                

                
                <Card.Content >

                    <View style={styles.CardContainer}>
                        <View style={styles.viewContainer}>
                            <Title style={styles.CardTitle}>Today</Title>
                            <Title style={styles.CardSubTitle}>6:30</Title>

                        </View>

                        <View style={styles.viewContainer}>
                            <Title style={styles.CardTitle}><Text style={{color:'red'}}>Order NO#</Text></Title>
                            <Title style={styles.CardSubTitle} >125</Title>

                        </View >

                        <Title style={styles.CardTitle}>
                            <Text style={{color:'red'}}>Status : </Text>
                            <Text style={{color:'green'}}>preparation</Text>
                        </Title>
                        
                    </View>
                    


                    <View style={styles.contentContainer}>

                        <Text> Order place</Text>
                        <Text> 9:38 PM</Text>

                    </View>


                    <View style={styles.contentContainer}>

                        <Text> Order Details</Text>
                        <Text> bangar, seeds , ss,s,s,s,s,s,ss,s,s</Text>

                    </View>

                    <View style={styles.contentContainer}>

                        <Text> Order Total</Text>
                        <Text> 100,000 EG</Text>

                    </View>

                    <View style={styles.contentContainer}>

                        <Text>Expected Delivery time</Text>
                        <Text> a month</Text>

                    </View>

                    
                
                
                </Card.Content>

                <Card.Actions>
                    <Button>Cancelling Order </Button>
                   
                 </Card.Actions>



                

            </Card>

    );

    }
  }



const styles = StyleSheet.create({
    container:{

        margin:5,
    },

    viewContainer:{
        flex:1

    },


    CardContainer:{
        flexDirection: 'row',
        //justifyContent: 'space-evenly',
        marginBottom:30,

    },
    contentContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20

    },

    CardTitle:{
        fontSize:17,
        flex:1,
        fontWeight:'bold'
    },
    CardSubTitle:{
        color:'grey',
        fontSize:15
    }

});

export default OrderItem;
