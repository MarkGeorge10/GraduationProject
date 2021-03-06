/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { calcRatio, calcWidth, calcHeight } from '../Dimension';


class  OrderItem extends Component{

  
    num = this.props.orderNumber;
  

    render(){

        // eslint-disable-next-line no-undef

        const date = this.props.orderDate;
        

    
       
   /* orderStatus:"shipping",
    orderTotalPrice: 30000,
    expectedTime:"A Months",
    orderDate:"1/7/2020 12:30 PM"*/

      return (
        
            <Card style={styles.container} elevation={15}>
                
                

                
                <Card.Content >

                    <View style={styles.CardContainer}>
                        <View style={styles.viewContainer}>
                            <Title style={styles.CardTitle}>{date.substring(0,8)}</Title>
                            <Title style={styles.CardSubTitle}>{date.substring(9)}</Title>

                        </View>

                        <View style={styles.viewContainer}>
                            <Title style={styles.CardTitle}><Text >Order NO#</Text></Title>
                            <Title style={styles.CardSubTitle}>{this.props.orderNumber}</Title>

                        </View >

                        <Title style={styles.CardTitle}>
                            <Text >Status : </Text>
                            <Text style={{color:'green'}}>{this.props.orderStatus}</Text>
                        </Title>
                        
                    </View>
                    


                    


                    <View style={styles.contentContainer}>

                        <Text> Order Details</Text>
                        <Text></Text>

                    </View>

                    <View style={styles.contentContainer}>

                        <Text> Order Total</Text>
                        <Text>{`${this.props.orderTotalPrice}$`}</Text>

                    </View>

                    <View style={styles.contentContainer}>

                        <Text>Expected Delivery time</Text>
                        <Text> {this.props.expectedTime}</Text>

                    </View>

                    
                
                
                </Card.Content>

                <Card.Actions>
                    <Button ><Text style={{color:"#ffbf00"}}>Cancelling Order</Text> </Button>
                   
                 </Card.Actions>



                

            </Card>

    );

    }
  }



const styles = StyleSheet.create({
    container:{
        margin:10
        
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
        //fontWeight:'bold'
    },
    CardSubTitle:{
        color:'grey',
        fontSize:15
    }

});

export default OrderItem;

