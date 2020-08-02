/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default class AddShipment extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        
        <TextInput
          style={styles.textInputStyle}
          //value={this.state.placeName}
          // onChangeText={this.placeNameChangedHander}
          placeholder="Shipment Company Name"
        />

        <TextInput
          style={styles.textInputStyle}
          //value={this.state.placeName}
          // onChangeText={this.placeNameChangedHander},

          placeholder="Shipment Company Email"
        />

        <TextInput
          style={styles.textInputStyle}
          //value={this.state.placeName}
          // onChangeText={this.placeNameChangedHander}
          placeholder="Shipment Company Phone"
        />
        <TextInput
          style={styles.textInputStyle}
          //value={this.state.placeName}
          // onChangeText={this.placeNameChangedHander}
          placeholder="Shipment Company Address"
        />

       

        <TouchableOpacity style={styles.buttonContainer} onPress={this.clickhandler}>
            <Text style={{textAlign:'center',fontSize:20,color:'#fff'}}>Save changes</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',

    backgroundColor: '#fff',
  },
  viewContainer: {
    // height:"100%",
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textInputStyle: {
    width: '80%',
    //borderWidth:1,
    //borderColor:"black",
    borderBottomWidth: 1.0,
    margin: 10.0,
  },

  placeButton: {
    width: '30%',

    padding: 500,
  },
  buttonContainer:{
    backgroundColor:'#ffbf00',
    padding:8,
    borderRadius:25,
    width:'40%',
    alignSelf:'center',
    margin:25,
    
    
},
});

/*


*/
