/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
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
import { Card } from 'react-native-paper';
import CardView from '../Screens/Cart_Card';
import { calcRatio, calcWidth, calcHeight } from '../Dimension';
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)

    var itms = [];
    Object.keys(currentcart.cart.items).forEach(function (itm) {
      itms.push(currentcart.cart.items[itm]);

    });
    if (currentcart) {
      this.state = {
        Total: currentcart.cart.totalPrice,
        data: itms
      }
      total=this.state.Total

 
    }
    else if (current) {
      this.state = {
        Total: current.quantity + 1604.14,
        data: [
          {
            name: current.title,
            price: current.quantity,
            image: { uri: current.imagePath },
          },

          {
            name: 'Cotton Fabric',
            price: 3.14,
            image: require('../img/textile2.jpeg'),
          },
          {
            name: 'Burma Teak Wood (Cubic feet)',
            price: 86,
            image: require('../img/wood.jpeg'),
          },
          {
            name: '14mm Steel Bar (Tons)',
            price: 400,
            image: require('../img/iron.jpeg'),
          },
          {
            name: '40mm Reinforced Iron Rod (Tons)',
            price: 475,
            image: require('../img/steel.jpeg'),
          },
          {
            name: 'Coated Iron Sheets (Tons)',
            price: 640.00,
            image: require('../img/iron2.jpeg'),
          },
        ],
      };
    } else {
      this.state = {
        Total: total,
        data: [


          {
            name: 'Cotton Fabric',
            price: 3.14,
            image: require('../img/textile2.jpeg'),
          },
          {
            name: 'Burma Teak Wood (Cubic feet)',
            price: 86,
            image: require('../img/wood.jpeg'),
          },
          {
            name: '14mm Steel Bar (Tons)',
            price: 400,
            image: require('../img/iron.jpeg'),
          },
          {
            name: '40mm Reinforced Iron Rod (Tons)',
            price: 475,
            image: require('../img/steel.jpeg'),
          },
          {
            name: 'Coated Iron Sheets (Tons)',
            price: 640.00,
            image: require('../img/iron2.jpeg'),
          },
        ],
      };
    }
  }
  handler() {
    this.setState({
      Total: total
    })
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
          renderItem={({ item }) => (
            //cardview component bs ana ally bnyah 
            //text ,flatlis component by react
            //props btpasslea 7aga aw ana ppaslha
            <CardView handler = {this.handler} name={item.item.title} image={item.item.imagePath} price={item.units} quantity={item.quantity} />
          )}
          contentContainerStyle={{ alignItems: 'center', paddingBottom: calcHeight(100) }}
        />

        <View style={styles.rowItems}>

          <Text style={{ fontSize: calcWidth(20), marginVertical: calcHeight(10), marginHorizontal: calcWidth(10) }}>Sub Total:{this.state.Total}$</Text>

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

  rowItems: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30


  },
  button: {
    backgroundColor: '#ffbf00',
    padding: 13,
    borderRadius: 10,
    width: "25%",
    alignItems: 'center',
    // marginHorizontal:calcWidth(20),
    //marginVertical:calcHeight(20),
    //paddingHorizontal:calcWidth(10),
    //paddingVertical:calcHeight(10),
  }

});
