import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
function Productlist(props) {
  return (
    <View style={styles.containerlist}>
      <View style={styles.group2list}>
        <View style={styles.grouplist}>
          <Text style={styles.furniturelist}>Electronics</Text>
          <Text style={styles.loremIpsumlist}>39122 items found</Text>
        </View>
        <View style={styles.groupFillerlist}></View>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          style={styles.button1list}
        >
          <MaterialCommunityIcons name= "filter" style={styles.icon1list}></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerlist: {
    flexDirection: "row",
    justifyContent: "space-around"
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

export default Productlist;
