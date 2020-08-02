import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import CupertinoButtonDelete from "./CupertinoButtonDelete";
import Productdetail from "./Productdetail"
class  Product extends Component{
  constructor(props) {
    super(props);
}
  static navigationOption = {
    header: null,
  };
  onPress() {
    // display additional data
  } 
  render(){
    return(
    <TouchableOpacity style={[styles.container,this.props.style]}  onPress={() =>this.props.navigation.navigate('ProductDetails')}>
      <View style={styles.group}>
        <CupertinoButtonDelete
          style={styles.cupertinoButtonDelete2}
        ></CupertinoButtonDelete>
        <View style={styles.group3}>
          <View style={styles.group2}>
            <Text style={styles.productName}>Product Name</Text>
            <Text style={styles.loremIpsum}>a short product description</Text>
          </View>
        </View>
      </View>
      <Image
        source={require("../img/dresser_PNG1791.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Productdetail style={styles.productdetail}></Productdetail>
    </TouchableOpacity>
  );}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(242,241,241,0.7)",
    elevation: 15,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 0,
    marginBottom: 24,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: "center",
    justifyContent: "space-between"
  },
  group: {
    height: 60,
    alignSelf: "stretch",
    marginTop: 8,
    marginRight: 0,
    flexDirection: "row"
  },
  cupertinoButtonDelete2: {
    height: 23,
    width: 36,
    marginRight: -157
  },
  group3: {
    width: 96,
    height: 17
  },
  group2: {
    height: 32,
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 27
  },
  productName: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 32,
    width: 96,
    marginTop: 0,
    marginLeft: 31,
    marginRight: 0
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(168,164,164,1)",
    fontSize: 7,
    width: 91,
    height: 34,
    marginTop: 0,
    marginLeft: 31,
    marginRight: 0
  },
  image: {
    width: 157,
    height: 155,
    alignSelf: "stretch"
  },
  productdetail: {
    height: 30,
    alignSelf: "stretch"
  }
});

export default Product;
