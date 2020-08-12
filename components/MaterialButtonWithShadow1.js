import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import {Ionicons} from '@expo/vector-icons';


class  MaterialButtonWithShadow1 extends Component{
  render(){  return (
    <TouchableOpacity style={[styles.container, this.props.style]}  onPress={() =>this.props.navigation.navigate('Products')}>
      <View style={styles.groupFiller}></View>
      <View style={styles.group}>
        <Text style={styles.seeAll}>more</Text>
        <Ionicons name="ios-arrow-forward" style={styles.icon}></Ionicons>
      </View>
    </TouchableOpacity>
  );}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
   
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row"
  },
  groupFiller: {
    flex: 1,
    flexDirection: "row"
  },
  group: {
    width: 53,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  seeAll: {
   // fontFamily: "georgia-regular",
    fontSize: 16,
    marginRight: 6,
    color: "rgba(122,120,120,1)",fontWeight: "bold"
  },
  icon: {
    color: "rgba(122,120,120,1)",
    fontSize: 19,
    height: 21,
    width: 19,fontWeight: "bold",marginTop:2
  }
});

export default MaterialButtonWithShadow1;
