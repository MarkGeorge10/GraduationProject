/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { Image, ScrollView, CheckBox, View, TextInput, StyleSheet, Picker, Text, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


export default class AddProduct extends Component {

  state = {
    image: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      setSelected: false,
      selectedCategoryValue: 'java',
      SelectedUnitValue: 'Kilogram',
      SelectedPerValue: 'Day',
      title: '',
      description: '',
      key: '',
      model: '',
      brandname: '',
      placeoforigin: '',
      quantity: '',
      attribute: '',
      value: '',
      units: '',
      per: '',
      deliverytime: '',
      category: ''
    };
  }


  componentDidMount() {
    this.getPermissionAsync();
  }
  componentWillUnmount() { }
  onAdd() {
    var title = this.state.title;
    var description = this.state.description;
    var key = this.state.key;
    var model = this.state.model;
    var brandname = this.state.brandname;
    var placeoforigin = this.state.placeoforigin;
    var quantity = this.state.quantity;
    var attribute = this.state.attribute;
    var value = this.state.value;
    var units = this.state.units;
    var per = this.state.per;
    var deliverytime = this.state.deliverytime;
    var category = this.state.category;
    var image = this.state.image;
    console.log(title+"?"+description+"---"+key+"}}"+model+"\\\\\\"+brandname+"909090"+placeoforigin);
    console.log(quantity)
    console.log(attribute)
    console.log(value)
    console.log(units)
    console.log(per)
    console.log(deliverytime)
    console.log("-----"+category)
    console.log(image.uri)
    console.log("++++++++++++++++++++++++++++done")
      if (attribute&&!value){Alert.alert("missing data! can't enter an attribute with no value")}
      else if (value&&!attribute){Alert.alert("missing data! can't enter a value with no attribute")}
      else if (title&&brandname&&placeoforigin&&quantity&&units&&per&&deliverytime&&category) { //missing data!!!!
 
        fetch('https://mosaic-test-api.herokuapp.com/products/new', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({

            "imagePath": image.uri,
            "title": title,
            "description": description,
            "key": key,
            "model": model,
            "brandname": brandname,
            "placeoforigin": placeoforigin,
            "quantity": quantity,
            "attribute": attribute,
            "value": value,
            "units": units,
            "per": per,
            "deliverytime": deliverytime,
            "category": category
            ,
          }),
        })
          .then((response) => response.json())
          .then((responseData) => {
            if (responseData.error != null) {
              //       this.props.navigate('MainApp') //// till we fi

              Alert.alert("Error occured");
            }
            else {
              console.log(JSON.stringify(responseData));
              Alert.alert("Added Successfully!");

              ///   this.props.navigate('MainApp')
            }

          }).catch(() => { });
      
    }
    else{
      Alert.alert("Missing data!");

    }
  }
  
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result });
       
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    };
  };
  handleName = (text) => {
    this.setState({ title: text });
  };
  handleKey = (text) => {
    this.setState({ key: text });
  };
  handleBrand = (text) => {
    this.setState({ brandname: text });
  };
  handleDecription = (text) => {
    this.setState({ description: text });
    console.log(this.state.description)

  };
  handleModel = (text) => {
    this.setState({ model: text });
  };
  handleOrigin = (text) => {
    this.setState({ placeoforigin: text });
  };
  handleCategory = (text) => {
    this.setState({ category: text });
  };
  handleAttribute = (text) => {
    this.setState({ attribute: text });
  };
  handleValue = (text) => {
    this.setState({ value: text });
  };
  handleUnits = (text) => {
    this.setState({ units: text });
  };
  handlePer = (text) => {
    this.setState({ per: text });
  };
  handleDeliveryTime = (text) => {
    this.setState({ deliverytime: text });
  };
  handleQuantity = (text) => {
    this.setState({ quantity: text });
  };
  render(){
    const { image } = this.state

    return (

      <ScrollView >

        <View style={styles.viewContainer}>

          <View style={styles.rowbuttons}>

            <Text style={styles.text}>Product Name </Text>

            <TextInput
              style={styles.textInputStyle}
              //value={this.state.placeName}
              placeholder="Product Name"
              placeholderTextColor="#9a9a9c"
              onChangeText={this.handleName}

            />



          </View>


          <View style={styles.rowbuttons}>

            <Text style={styles.text}>Product key </Text>

            <TextInput
              style={styles.textInputStyle}
              //value={this.state.placeName}
              // onChangeText={this.placeNameChangedHander}
              placeholder="Product key"
              placeholderTextColor="#9a9a9c"
              onChangeText={this.handleKey}
            />



          </View>


          <View style={styles.rowbuttons}>

            <Text style={styles.text}>Photo</Text>
            {image && <Image resizeMode="contain" source={{ uri: image.uri }} style={styles.img} />}
            <TouchableOpacity style={styles.buttonContainer} >
              <Text onPress={this._pickImage} style={styles.button}>Add Image</Text>
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
              placeholderTextColor="#9a9a9c"
              onChangeText={this.handleDecription}
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
            placeholderTextColor="#9a9a9c"
            onChangeText={this.handleModel}
          />



        </View>


        <View style={styles.rowbuttons}>

          <Text style={styles.text}>Brand Name</Text>

          <TextInput
            style={styles.textInputStyle}
            //value={this.state.placeName}
            // onChangeText={this.placeNameChangedHander}
            placeholder="Brand Name"
            placeholderTextColor="#9a9a9c"
            onChangeText={this.handleBrand}
          />



        </View>

        <View style={styles.rowbuttons}>

          <Text style={styles.text}>Place of Origin</Text>

          <TextInput
            style={styles.textInputStyle}
            //value={this.state.placeName}
            // onChangeText={this.placeNameChangedHander}
            placeholder="Place of Origin"
            placeholderTextColor="#9a9a9c"
            onChangeText={this.handleOrigin}
          />



        </View>
        <View style={styles.rowbuttons}>

          <Text style={styles.text}>Price</Text>

          <TextInput
            style={styles.textInputStyle}
            //value={this.state.placeName}
            // onChangeText={this.placeNameChangedHander}
            placeholder="Price"
            placeholderTextColor="#9a9a9c"
            onChangeText={this.handleQuantity}
          />
        </View>
        <View style={styles.rowbuttons}>

          <Text style={styles.text}>Category</Text>

          <Picker
            selectedValue={this.state.category}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue) => this.setState({ category: itemValue })}
          >
            <Picker.Item label="Agriculture" value="Agriculture" />
            <Picker.Item label="Industry" value="Industry" />
            <Picker.Item label="Electronic Material" value="Electronic Material" />
            <Picker.Item label="Textiles" value="Textiles" />
            <Picker.Item label="Lights" value="Lights" />
            <Picker.Item label="Chemicals Material" value="Chemicals" />

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
            placeholderTextColor="#9a9a9c"
            onChangeText={this.handleAttribute}
          />
        </View>


        <View style={styles.rowbuttons}>

          <Text style={styles.text}>Value</Text>

          <TextInput
            style={styles.textInputStyle}
            //value={this.state.placeName}
            // onChangeText={this.placeNameChangedHander}
            placeholder="Value"
            placeholderTextColor="#9a9a9c"
            onChangeText={this.handleValue}
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
            placeholderTextColor="#9a9a9c"
            onChangeText={this.handleUnits}
          />

          <Picker
            selectedValue={this.state.SelectedUnitValue}
            style={{ height: 50, width: 150, flex: 1 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ SelectedUnitValue: itemValue })}
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
            placeholderTextColor="#9a9a9c"
            onChangeText={this.handlePer}
          />


          <Picker
            selectedValue={this.state.SelectedPerValue}
            style={{ height: 50, width: 150, flex: 1 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ SelectedPerValue: itemValue })}>

            <Picker.Item label="Day" value="Day" />
            <Picker.Item label="Week" value="Week" />
            <Picker.Item label="Month" value="Month" />
            <Picker.Item label="Year" value="Year" />
          </Picker>
        </View>


        <View style={styles.rowbuttons}>

          <Text style={styles.text}>Minimum order quantity</Text>

          <TextInput
            style={styles.textInputStyle}
            //value={this.state.placeName}
            // onChangeText={this.placeNameChangedHander}
            placeholder="Number of days"
            placeholderTextColor="#9a9a9c"
            onChangeText={this.handleDeliveryTime}
          />
        </View>


        <TextInput
          style={styles.largetextInputStyle}
          //value={this.state.placeName}
          // onChangeText={this.placeNameChangedHander}
          numberOfLines={8}
          placeholder="Packaging Details"
        />


        <TouchableOpacity style={styles.buttonContainer2} onPress={() => this.onAdd()}>
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
  button: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,

  },
  img: {
    flex: 1,
    //   borderRadius: 25,
    width: '20%',
    alignSelf: 'center',
    margin: 20,
    padding: 8,
    height: 100,

  },
  buttonContainer: {
    backgroundColor: '#003368',
    flex: 1,
    borderRadius: 25,
    width: '20%',
    alignSelf: 'center',
    margin: 20,
    padding: 8,

  },
  rowbuttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',


  },
  headerText: {
    fontSize: 20,
    flex: 1,
    fontWeight: 'bold',

    margin: 10,
  },
  text: {
    fontSize: 20,
    flex: 1,
    width: '40%',
    margin: 10,
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
    flex: 1,
    borderBottomWidth: 1.0,
    margin: 10.0,
  },

  largetextInputStyle: {
    width: '60%',

    borderWidth: 1.0,
    margin: 10.0,
  },


  buttonContainer2: {
    backgroundColor: '#ffbf00',

    borderRadius: 18,
    width: '40%',
    alignSelf: 'center',
    margin: 20,
    padding: 10,
    flex: 1,

  },
});
