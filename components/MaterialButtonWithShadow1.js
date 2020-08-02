import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/Ionicons";

class  MaterialButtonWithShadow1 extends Component{
  render(){  return (
    <TouchableOpacity style={[styles.container, this.props.style]}  onPress={() =>this.props.navigation.navigate('Products')}>
      <View style={styles.groupFiller}></View>
      <View style={styles.group}>
        <Text style={styles.seeAll}>See all</Text>
        <Icon name="chevron-small-right" style={styles.icon}></Icon>
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
    fontFamily: "georgia-regular",
    fontSize: 20,
    color: "rgba(122,120,120,1)"
  },
  icon: {
    color: "rgba(122,120,120,1)",
    fontSize: 19,
    height: 21,
    width: 19
  }
});

export default MaterialButtonWithShadow1;
