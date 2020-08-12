import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonHamburger1 from "./MaterialButtonHamburger1";

function Productdetail(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.loremIpsum}>$120</Text>
      <MaterialButtonHamburger1
        style={styles.materialButtonHamburger1}
      ></MaterialButtonHamburger1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  loremIpsum: {
   // fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    marginLeft: 16
  },
  materialButtonHamburger1: {
    height: 36,
    width: 36,
    borderTopLeftRadius: 14,
    borderBottomRightRadius: 14,
    alignSelf: "flex-end"
  }
});

export default Productdetail;
