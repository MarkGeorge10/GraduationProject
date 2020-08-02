import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Dimensions  } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

class  HeaderX extends Component{
  render(){
  return (
    <View style={[styles.container,this.props.style]}>
      <View style={styles.group3}>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          onPress={() => console.log("side nav")}
          style={styles.button1}
        >
          <FeatherIcon
            name={this.props.icon2Name || "menu"}
            style={styles.icon3}
          ></FeatherIcon>
        </TouchableOpacity>
        <View style={styles.button1Filler}>
          <Image
            source={require("../img/Layer_6.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.group2}>
          <TouchableOpacity /* Conditional navigation not supported at the moment */
            onPress={() =>this.props.navigation.navigate('Cart')}
            style={styles.button2}
          >
            <FeatherIcon
              name={this.props.icon2Name || "shopping-cart"}
              style={styles.icon4}
            ></FeatherIcon>
          </TouchableOpacity>
          <TouchableOpacity /* Conditional navigation not supported at the moment */
            onPress={() => console.log("Search")}
            style={styles.button}
          >
            <FeatherIcon
              name={this.props.icon2Name || "search"}
              style={styles.icon2}
            ></FeatherIcon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  group3: {
    flexDirection: "row",
    flex: 1
  },
  button1: {
   
    justifyContent: "center",
    alignSelf: "flex-start"
  },
  icon3: {
    color: "rgba(33,51,61,1)",
    fontSize: 25,
    alignSelf: "center"
  },
  image: {
flex:1 , width: undefined, height: undefined,
   alignItems: 'center',

    justifyContent: "center"
  },
  button1Filler: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "center"
  },
  group2: {
  
    flexDirection: "row",
   
    alignItems: "center",
    justifyContent: "flex-end"
  },
  button2: {
  
    marginRight: 5,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  icon4: {
    color: "rgba(255,168,64,1)",
    fontSize: 25
  },
  button: {
  
    marginRight: 0,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  icon2: {
    color: "rgba(33,51,61,1)",
    fontSize: 25,

  }
});

export default HeaderX;
