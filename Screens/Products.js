import React, { Component } from "react";
import { StyleSheet, View, StatusBar, ScrollView, Image, Content, ImageBackground, Text, TouchableOpacity } from "react-native";
import HeaderX from "../components/HeaderX";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import CupertinoButtonDelete from "../components/CupertinoButtonDelete";
import MaterialButtonHamburger1 from "../components/MaterialButtonHamburger1";
class Products extends Component {
  constructor(props) {
    super(props);


  }
  viewProduct (prod) {
    current = prod;
    this.props.navigation.navigate('ProductDetails');
  }

render() {

  var productList = [];
  ProdList.products.forEach(function (prod) {
    productList.push(
      <TouchableOpacity style={[styles.containerprod, this.props.style]} onPress={this.viewProduct.bind(this, prod)}>
        <View style={styles.groupprod}>
          <CupertinoButtonDelete
            style={styles.cupertinoButtonDelete2prod}
          ></CupertinoButtonDelete>
          <View style={styles.group3prod}>
            <View style={styles.group2prod}>
              <Text style={styles.productNameprod}>{prod.title}</Text>
              <Text style={styles.loremIpsumprod}>{prod.description}</Text>
            </View>
          </View>
        </View>
        <Image
          source={{ uri: prod.imagePath }}
          resizeMode="contain"
          style={styles.imageprod}
        ></Image>
        <View style={styles.container2prod}>
          <Text style={styles.loremIpsum2prod}>${prod.quantity}</Text>
          <MaterialButtonHamburger1
            style={styles.materialButtonHamburger1prod}
          ></MaterialButtonHamburger1>
        </View>
      </TouchableOpacity>
    );
  }.bind(this));
  const half = Math.ceil(productList.length / 2);

  const firstHalf = productList.splice(0, half)
  const secondHalf = productList.splice(-half)
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
        <View style={styles.containerlist}>
          <View style={styles.group2list}>
            <View style={styles.grouplist}>
              <Text style={styles.furniturelist}>{ProdList.products[0].category}</Text>
              <Text style={styles.loremIpsumlist}>{ProdList.products.length} items found</Text>
            </View>
            <View style={styles.groupFillerlist}></View>
            <TouchableOpacity /* Conditional navigation not supported at the moment */
              style={styles.button1list}
            >
              <MaterialCommunityIcons name="filter" style={styles.icon1list}></MaterialCommunityIcons>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.left}>
              {firstHalf}



            </View>
            <View style={styles.right}>
              {secondHalf}

            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  }, containerprod: {
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
  container2prod: {
    //   borderWidth: 2,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  loremIpsum2prod: {
    // fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    marginLeft: 16
  },
  materialButtonHamburger1prod: {
    height: 36,
    width: 36,
    borderTopLeftRadius: 14,
    borderBottomRightRadius: 14,
    alignSelf: "flex-end"
  }
  ,
  groupprod: {
    height: 60,
    alignSelf: "stretch",
    marginTop: 8,
    marginRight: 0,
    flexDirection: "row"
  },
  cupertinoButtonDelete2prod: {
    height: 23,
    width: 36,
    marginRight: -157
  },
  group3prod: {
    width: 96,
    height: 17
  },
  group2prod: {
    height: 32,
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 27
  },
  productNameprod: {
    // fontFamily: "roboto-700",
    color: "#121212",
    height: 32,
    width: 96,
    marginTop: 0,
    marginLeft: 31,
    marginRight: 0
  },
  loremIpsumprod: {
    //  fontFamily: "roboto-regular",
    color: "rgba(168,164,164,1)",
    fontSize: 7,
    width: 91,
    height: 34,
    marginTop: 0,
    marginLeft: 31,
    marginRight: 0
  },
  imageprod: {
    width: 157,
    height: 130,
    alignSelf: "stretch",
    marginBottom: 20
  },
  productdetailprod: {
    height: 30,
    alignSelf: "stretch"
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
    alignSelf: "stretch",
    marginTop: 10
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
  },
  containerlist: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 58,
    alignSelf: "stretch"
  },
  group2list: {
    flexDirection: "row",
    flex: 1
  },
  grouplist: {
    justifyContent: "center",
    height: 61,
    width: 314
  },
  furniturelist: {
    //fontFamily: "alata-regular",
    color: "#121212",
    fontSize: 32,
    height: 42,
    width: 314,
    marginLeft: 5
  },
  loremIpsumlist: {
    //fontFamily: "roboto-regular",
    color: "rgba(84,83,83,1)",
    fontSize: 10,
    height: 19,
    width: 314,
    marginLeft: 5
  },
  groupFillerlist: {
    flex: 1,
    flexDirection: "row"
  },
  button1list: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: 61
  },
  icon1list: {
    color: "rgba(33,51,61,1)",
    fontSize: 25,
    alignSelf: "center",
    marginRight: 5
  }
});

export default Products;
