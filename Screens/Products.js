import React, { Component } from "react";
import { StyleSheet, View, StatusBar, ScrollView, ImageBackground } from "react-native";
import HeaderX from "../components/HeaderX";
import Productlist from "../components/Productlist";
import Product from "../components/Product";


class  Products extends Component{
  render(){
      return (
    <View style={styles.root}>
      <ImageBackground
        resizeMode={'stretch'} // or cover
        imageStyle={{ opacity: 0.4 }}
        style={{ flex: 1 }} // must be passed from the parent, the number may vary depending upon your screen size
        source={require("../img/1.jpg")}
      >   
      <StatusBar hidden backgroundColor="rgba(255,255,255,0)" />
      <HeaderX style={styles.headerX} navigation={this.props.navigation}></HeaderX>
      <Productlist style={styles.productlist}></Productlist>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.left}>
            <Product style={styles.product6} navigation={this.props.navigation}></Product>
            <Product style={styles.product1} navigation={this.props.navigation}></Product>
            <Product style={styles.product2} navigation={this.props.navigation}></Product>
          </View>
          <View style={styles.right}>
            <Product style={styles.product5} navigation={this.props.navigation}></Product>
            <Product style={styles.product3} navigation={this.props.navigation}></Product>
            <Product style={styles.product4} navigation={this.props.navigation}></Product>
          </View>
        </ScrollView>
      </View>
 </ImageBackground>
    </View>
  );}
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  headerX: {
    height: 44,
    alignSelf: "stretch"
  },
  productlist: {
    height: 58,
    alignSelf: "stretch"
  },
  scrollArea: {
    flex: 1,
    height: 666,
    alignSelf: "stretch"
  },
  scrollArea_contentContainerStyle: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  left: {
    width: 150,
    borderRadius: 70,
    shadowOpacity: 0.01,
    alignSelf: "stretch",
    marginBottom: 0,
    marginLeft: 0
  },
  product6: {
    height: 273,
    alignSelf: "stretch",
    marginTop: 0
  },
  product1: {
    height: 273,
    alignSelf: "stretch",
    marginTop: 0
  },
  product2: {
    height: 273,
    alignSelf: "stretch",
    marginTop: 0
  },
  right: {
    width: 151,
    justifyContent: "flex-start",
    marginLeft: 0,
    marginTop: 8,
    alignSelf: "stretch",
    marginBottom: 0
  },
  product5: {
    height: 270,
    alignSelf: "stretch",
    marginTop: 24
  },
  product3: {
    height: 270,
    alignSelf: "stretch"
  },
  product4: {
    height: 270,
    alignSelf: "stretch"
  }
});

export default Products;
