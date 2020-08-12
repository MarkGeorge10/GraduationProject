import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Dimensions  } from "react-native";
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';

class  HeaderX extends Component{
  
  cartView() {

    // if validation fails, value will be null
    fetch('https://mosaic-test-api.herokuapp.com/users/'+'5f31095fb339cc001785e482'+'/cart', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.error);
        if (responseData.error != null) {
            Alert.alert("No products yet in cart!")
           

        }  
        else {
          
          var temp=Object.keys(responseData.cart.items)[1];
        
          currentcart=responseData;
          total=currentcart.cart.totalPrice;
          this.props.navigation.navigate('Cart')

        }

      }).catch(() => { Alert.alert("nonono")                  }  );


  }
  render(){
  return (
    <View style={[styles.container,this.props.style]}>
      <View style={styles.group3}>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
            onPress={() =>this.props.navigation.navigate('GettingStarted')}
            style={styles.button1}
        >
          <MaterialCommunityIcons
                name={"logout"}
                style={styles.icon3}
                onPress={() => this.cartView()}
            ></MaterialCommunityIcons>
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
            <Ionicons
                name={"md-cart"}
                style={styles.icon4}
                onPress={() => this.cartView()}
            ></Ionicons>
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
