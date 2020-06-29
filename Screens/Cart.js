/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  
} from 'react-native';
import {Card} from 'react-native-paper';
import CardView from '../Screens/Cart_Card';
import { calcRatio, calcWidth, calcHeight } from '../Dimension';
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'NadaMohamed',
          price: '333$',
          image: require('../img/aaa.jpg'),
        },

        {
          name: 'Lamia Hamdy',
          price: '111$',
          image: require('../img/eee.jpg'),
        },
        {
          name: 'Lamia Hamdy',
          price: '111$',
          image: require('../img/eee.jpg'),
        },
        {
          name: 'Lamia Hamdy',
          price: '111$',
          image: require('../img/eee.jpg'),
        },
        {
          name: 'Lamia Hamdy',
          price: '111$',
          image: require('../img/eee.jpg'),
        },
        {
          name: 'Lamia Hamdy',
          price: '111$',
          image: require('../img/eee.jpg'),
        },
      ],
    };
  }

  render() {
    return (
      <ScrollView >
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
            <CardView name={item.name} image={item.image} price={item.price} />
          )}
          contentContainerStyle={{alignItems: 'center', paddingBottom:calcHeight(100)}}
        />

        <View style={styles.rowItems}>

            <Text style={{fontSize:calcWidth(20),marginVertical:calcHeight(10),marginHorizontal:calcWidth(10)}}>Sub Total:100,000$</Text>

            <TouchableOpacity style={styles.button}>
              <Text>Pay Now</Text>
            </TouchableOpacity>



        </View>

        

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

    width: '100%',

    alignItems: 'center',
  },

  rowItems:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom:30
    

  },
  button:{
    backgroundColor:'#ffbf00',
    padding:13,
    borderRadius:10,
    width:"25%",
    alignItems:'center',
   // marginHorizontal:calcWidth(20),
    //marginVertical:calcHeight(20),
    //paddingHorizontal:calcWidth(10),
    //paddingVertical:calcHeight(10),
  }
});
