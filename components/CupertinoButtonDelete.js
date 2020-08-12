import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import {Ionicons} from '@expo/vector-icons';
//function CupertinoButtonDelete(props) {
  class  CupertinoButtonDelete extends Component{
    render(){
  return (
    <TouchableOpacity  style={[styles.container, this.props.style]} >
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 23.88 23.88" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(255,255,255,1)"
            cx={12}
            cy={12}
            rx={12}
            ry={12}
          ></Ellipse>
        </Svg>
        <Ionicons name="md-heart" style={styles.icon}></Ionicons>
      </View>
    </TouchableOpacity>
  );
}}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  ellipse: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 0,
    top: 0
  },
  icon: {
    position: "absolute",
    color: "rgba(211,211,211,1)",
    fontSize: 12,
    left: 6,
    top: 5
  },
  ellipseStack: {
    width: 24,
    height: 24,
    marginLeft: 6
  }
});

export default CupertinoButtonDelete;
