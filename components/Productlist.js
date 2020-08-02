import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Productlist(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.group2}>
        <View style={styles.group}>
          <Text style={styles.furniture}>Furniture</Text>
          <Text style={styles.loremIpsum}>39122 items found</Text>
        </View>
        <View style={styles.groupFiller}></View>
        <TouchableOpacity /* Conditional navigation not supported at the moment */
          onPress={() => console.log("Navigate to Settings")}
          style={styles.button1}
        >
          <Icon name={props.icon2Name || "filter"} style={styles.icon1}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  group2: {
    flexDirection: "row",
    flex: 1
  },
  group: {
    justifyContent: "center",
    height: 61,
    width: 314
  },
  furniture: {
    fontFamily: "alata-regular",
    color: "#121212",
    fontSize: 32,
    height: 42,
    width: 314,
    marginLeft: 5
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(84,83,83,1)",
    fontSize: 10,
    height: 19,
    width: 314,
    marginLeft: 5
  },
  groupFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button1: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: 61
  },
  icon1: {
    color: "rgba(33,51,61,1)",
    fontSize: 25,
    alignSelf: "center",
    marginRight: 5
  }
});

export default Productlist;
