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
      <View style={{flex:1}}>
          <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <CardView name={item.name} image={item.image} price={item.price} />
          )}
          contentContainerStyle={{alignItems: 'center', paddingBottom: 100}}
        />

        <View style={styles.rowItems}>

            <Text style={{fontSize:20,margin:10}}>100,000$</Text>

            <TouchableOpacity style={styles.button}>
              <Text>Pay Now</Text>
            </TouchableOpacity>



        </View>

        

      </View>
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
    

  },
  button:{
    backgroundColor:'#ffbf00',
    padding:13,
    borderRadius:10,
    width:"25%",
    alignItems:'center',
    margin:20,
    padding:10,
  }
});
