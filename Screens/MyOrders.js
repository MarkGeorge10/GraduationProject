/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, ScrollView,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import OrderItem from '../components/OrderItem';
import { calcRatio, calcWidth, calcHeight } from '../Dimension';


class  MyOrders extends Component{
  disableYellowBox = true;


   state = {
    data: [
      {
        orderNumber:125,
        orderStatus:"Preparation",
        orderTotalPrice: 250500,
        expectedTime:"Two Months",
        orderDate:"2/6/2020 11:30 PM",
        products:[
          {
            productName:"p1"
          },
          
          {
            productName:"p2"
          },
          
          {
            productName:"p3"
          },
          
          {
            productName:"p4"
          }
        ]
      },

      {
        orderNumber:25,
        orderStatus:"shipping",
        orderTotalPrice: 30000,
        expectedTime:"A Months",
        orderDate:"1/7/2020 12:30 PM",
      },
     
    ],
  };
  

    render(){
      
   

      return (
        <ScrollView style={styles.container}>

        <FlatList
          //pastlha prop data w bastly prop render iteem
          data={this.state.data}



          //btgeb el item mn el flatlist w t3rdha 
          //for each btkrr eldesign ally bb3to 
          //callback b3ml call w btrg3ly 7aga fe elpramater
          renderItem={({item}) => (
            //cardview component bs ana ally bnyah 
            //text ,flatlis component by react
            //props btpasslea 7aga aw ana ppaslha
            <OrderItem orderNumber={item.orderNumber} 
                       orderStatus={item.orderStatus}
                       orderTotalPrice={item.orderTotalPrice} 
                       expectedTime={item.expectedTime}
                       orderDate ={item.orderDate}/>
          )}
          contentContainerStyle={{margin:10,paddingBottom:20,}}
        />

            
            
            
        </ScrollView>
    );

    }
  }



const styles = StyleSheet.create({
    container:{

       
    },

    
});

export default MyOrders;
