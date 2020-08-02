/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";




export default class CupertinoFooter1 extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}  onPress={() => this.props.navigation.navigate('MainApp')}>
        <MaterialCommunityIconsIcon
          name="home"
          style={[
            styles.icon,
            {
              color: this.props.active ? "#007AFF" : "rgba(33,51,61,1)"
            }
          ]}
        ></MaterialCommunityIconsIcon>
        <Text
          style={[
            styles.home,
            {
              color:this.props.active ? "#007AFF" : "rgba(33,51,61,1)"
            }
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}  onPress={() => this.props.navigate('categories')}>
        <MaterialCommunityIconsIcon
          name="file-document-box-outline"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.category}>Category</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper3}>
        <MaterialCommunityIconsIcon
          name="heart-outline"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.favorites}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <MaterialCommunityIconsIcon
          name="account-circle"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.account}>Account</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent",

  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    fontSize: 24,
    opacity: 0.8
  },
  home: {
    fontSize: 12,
    backgroundColor: "transparent",
    paddingTop: 4,
    alignSelf: "center"
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  category: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4,
    alignSelf: "center"
  },
  btnWrapper3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  favorites: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4,
    alignSelf: "center"
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8
  },
  account: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4,
    alignSelf: "center"
  }
});


