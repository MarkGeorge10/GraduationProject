/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import React, {Component,useState } from 'react';
import {ScrollView,CheckBox, View, TextInput, StyleSheet, Picker,Text,TouchableOpacity} from 'react-native';




export default class AddProduct extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isSelected : false,
      setSelected : false,
      selectedCategoryValue: 'java',
      SelectedUnitValue :'Kilogram',
      SelectedPerValue:'Day'

    };
  }



  render() {

    return (

      <ScrollView >

        <View style={styles.viewContainer}>

          <View style={styles.rowbuttons}>

            <Text style={styles.text}>Product Name </Text>

            <TextInput
            style={styles.textInputStyle}
            //value={this.state.placeName}
            // onChangeText={this.placeNameChangedHander}
            placeholder="Product Name"
          />



          </View>


          <View style={styles.rowbuttons}>

              <Text style={styles.text}>Product key </Text>

              <TextInput
              style={styles.textInputStyle}
              //value={this.state.placeName}
              // onChangeText={this.placeNameChangedHander}
              placeholder="Product key"
            />



          </View>


          <View style={styles.rowbuttons}>

            <Text style={styles.text}>Photo</Text>

            <TouchableOpacity style={styles.buttonContainer} >
                            <Text style={styles.button}>Add Image</Text>
            </TouchableOpacity>




          </View>

          <View style={styles.rowbuttons}>
              <Text style={styles.text}>Description</Text>
              <TextInput
                style={styles.largetextInputStyle}
                //value={this.state.placeName}
                // onChangeText={this.placeNameChangedHander},
                numberOfLines={8}

                placeholder="Description"
              />
          </View>

          </View>

          <View style={styles.rowbuttons}>

              <Text style={styles.text}>Model Numbers</Text>

              <TextInput
              style={styles.textInputStyle}
              //value={this.state.placeName}
              // onChangeText={this.placeNameChangedHander}
              placeholder="Model Number"
            />



          </View>


          <View style={styles.rowbuttons}>

              <Text style={styles.text}>Brand Name</Text>

              <TextInput
              style={styles.textInputStyle}
              //value={this.state.placeName}
              // onChangeText={this.placeNameChangedHander}
              placeholder="Brand Name"
            />



          </View>

          <View style={styles.rowbuttons}>

              <Text style={styles.text}>Place of Origin</Text>

              <TextInput
              style={styles.textInputStyle}
              //value={this.state.placeName}
              // onChangeText={this.placeNameChangedHander}
              placeholder="Place of Origin"
              />



          </View>

          <View style={styles.rowbuttons}>

              <Text style={styles.text}>Category</Text>

                  <Picker
                selectedValue={this.state.selectedCategoryValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => this.setState({selectedCategoryValue : itemValue})}
              >
                <Picker.Item label="Agriculture" value="Agriculture" />
                <Picker.Item label="Industry" value="Industry" />
                <Picker.Item label="Electronic Material" value="Electronic Material" />
              </Picker>
          </View>




          <Text style={styles.headerText}>Extra Information</Text>

          <View style={styles.rowbuttons}>

              <Text style={styles.text}>Attribute</Text>

              <TextInput
              style={styles.textInputStyle}
              //value={this.state.placeName}
              // onChangeText={this.placeNameChangedHander}
              placeholder="Attribute"
              />
          </View>


          <View style={styles.rowbuttons}>

              <Text style={styles.text}>Value</Text>

              <TextInput
              style={styles.textInputStyle}
              //value={this.state.placeName}
              // onChangeText={this.placeNameChangedHander}
              placeholder="Value"
              />
          </View>


          <Text style={styles.headerText}>Payment Terms</Text>

          <View style={styles.rowbuttons}>

          <View style={styles.checkboxContainer}>
              <CheckBox
                value={this.state.isSelected}
                onValueChange={this.state.setSelected}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Cash</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
               value={this.state.isSelected}
               onValueChange={this.state.setSelected}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Visa</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                value={this.state.isSelected}
                onValueChange={this.state.setSelected}
                style={styles.checkbox}
              />
              <Text style={styles.label}>L/C</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={this.state.isSelected}
                onValueChange={this.state.setSelected}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Other</Text>
            </View>
          </View>


          <Text style={styles.headerText}>Supply Ability</Text>

          <View style={styles.rowbuttons}>

              <Text style={styles.text}>Units</Text>

              <TextInput
              style={styles.textInputStyle}
              //value={this.state.placeName}
              // onChangeText={this.placeNameChangedHander}
              placeholder="Number of units"
              />

              <Picker
              selectedValue={this.state.SelectedUnitValue}
              style={{ height: 50, width: 150,flex:1 }}
              onValueChange={(itemValue, itemIndex) => this.setState({SelectedUnitValue : itemValue})}
            >
              <Picker.Item label="Kilogram" value="Kilogram" />
              <Picker.Item label="LLbs" value="LLbs" />
              <Picker.Item label="pieces" value="pieces" />
              <Picker.Item label="Boxes" value="Boxes" />
              <Picker.Item label="Dozens" value="Dozens" />

            </Picker>
          </View>

          <View style={styles.rowbuttons}>

              <Text style={styles.text}>per</Text>

              <TextInput
              style={styles.textInputStyle}
              //value={this.state.placeName}
              // onChangeText={this.placeNameChangedHander}
              placeholder="per"
              />


            <Picker
              selectedValue={this.state.SelectedPerValue}
              style={{ height: 50, width: 150,flex:1 }}
              onValueChange={(itemValue, itemIndex) => this.setState({SelectedPerValue:itemValue})}>

              <Picker.Item label="Day" value="Day" />
              <Picker.Item label="Week" value="Week" />
              <Picker.Item label="Month" value="Month" />
              <Picker.Item label="Year" value="Year" />
            </Picker>
          </View>


          <View style={styles.rowbuttons}>

              <Text style={styles.text}>Delivery time (per days)</Text>

              <TextInput
              style={styles.textInputStyle}
              //value={this.state.placeName}
              // onChangeText={this.placeNameChangedHander}
              placeholder="Number of days"
              />
          </View>


          <TextInput
            style={styles.largetextInputStyle}
            //value={this.state.placeName}
            // onChangeText={this.placeNameChangedHander}
            numberOfLines={8}
            placeholder="Packaging Details"
          />


         <TouchableOpacity style={styles.buttonContainer2}>
            <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
        
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({


  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },


  container: {
   // height: '400%',
    width: '100%',

    backgroundColor: '#fff',
  },
  button:{
    textAlign:'center',
    color:'#fff',
    fontSize:20,

},
buttonContainer:{
    backgroundColor:'#003368',
    flex:1,
    borderRadius:25,
    width:'20%',
    alignSelf:'center',
    margin:20,
    padding:8,

},
  rowbuttons:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',


  },
  headerText:{
    fontSize:20,
    flex:1,
    fontWeight:'bold',

    margin:10,
  },
  text:{
    fontSize:20,
    flex:1 ,
    width:'40%',
    margin:10,
  },
  viewContainer: {
    // height:"100%",
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textInputStyle: {
    width: '70%',
    flex:1,
    borderBottomWidth: 1.0,
    margin: 10.0,
  },

  largetextInputStyle: {
    width: '60%',

    borderWidth: 1.0,
    margin: 10.0,
  },


  buttonContainer2:{
    backgroundColor:'#ffbf00',

    borderRadius:18,
    width:'40%',
    alignSelf:'center',
    margin:20,
    padding:10,
    flex:1,

},
});
