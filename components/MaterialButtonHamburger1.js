import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialButtonHamburger1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="plus" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,168,64,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2
  },
  icon: {
    color: "rgba(255,254,254,1)",
    fontSize: 14,
    alignSelf: "center"
  }
});

export default MaterialButtonHamburger1;
