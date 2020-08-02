import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground
} from "react-native";
import HeaderX from "../components/HeaderX";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  headerX: {
    height: 44,
    alignSelf: "stretch"
  },
  scrollArea: {
    flex: 1,
    alignSelf: "stretch",
    marginTop: 7,
    justifyContent: 'center',
    marginLeft: 4,
    marginRight: 4
  },
  scrollArea_contentContainerStyle: {
    flexGrow: 1,
    flexDirection: "column",
    alignSelf: "stretch",
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    maxWidth: 700,
    width: '100%',
    height: 139,
    alignSelf: 'center',
    flexDirection: "row",
    backgroundColor: "rgba(248,248,246,1)",
    borderRadius: 28,
    justifyContent: "space-around",
    marginTop: 7,


  },
  image: {
    width: 61,
    height: 61,
    alignSelf: "center",
    marginLeft: 0
  },
  furniture: {
    fontFamily: "roboto-regular",
    color: "rgba(11,45,90,1)",
    fontSize: 34,
    alignSelf: "center"
  },
  button1: {
   
    backgroundColor: "rgba(235,244,244,1)",
    flex: 1,
    maxWidth: 700,
    width: '100%',
    height: 139,
    alignSelf: 'center',
    flexDirection: "row",
    borderRadius: 28,
    justifyContent: "space-around",
    marginTop: 7,
  },
  image1: {
    width: 61,
    height: 61,
    alignSelf: "center",
    marginLeft: 0
  },
  furniture1: {
    fontFamily: "roboto-regular",
    color: "rgba(32,78,127,1)",
    fontSize: 34,
    alignSelf: "center"
  },
  button2: {
   
    backgroundColor: "rgba(193,209,222,1)",
    flex: 1,
    maxWidth: 700,
    width: '100%',
    height: 139,
    alignSelf: 'center',
    flexDirection: "row",
    borderRadius: 28,
    justifyContent: "space-around",
    marginTop: 7,
  },
  image2: {
    width: 61,
    height: 61,
    alignSelf: "center",
    marginLeft: 0
  },
  furniture2: {
    fontFamily: "roboto-regular",
    color: "rgba(71,109,148,1)",
    fontSize: 34,
    alignSelf: "center"
  },
  button3: {
    backgroundColor: "rgba(17,130,199,1)",
    flex: 1,
    maxWidth: 700,
    width: '100%',
    height: 139,
    alignSelf: 'center',
    flexDirection: "row",
    borderRadius: 28,
    justifyContent: "space-around",
    marginTop: 7,
  },
  image3: {
    width: 61,
    height: 61,
    alignSelf: "center",
    marginLeft: 0
  },
  furniture3: {
    fontFamily: "roboto-regular",
    color: "rgba(185,217,234,1)",
    fontSize: 34,
    alignSelf: "center"
  },
  button4: {
 
    backgroundColor: "rgba(71,109,148,1)",
    flex: 1,
    maxWidth: 700,
    width: '100%',
    height: 139,
    alignSelf: 'center',
    flexDirection: "row",
    borderRadius: 28,
    justifyContent: "space-around",
    marginTop: 7,
  },
  image4: {
    width: 61,
    height: 61,
    alignSelf: "center",
    marginLeft: 0
  },
  furniture8: {
    fontFamily: "roboto-regular",
    color: "rgba(218,229,234,1)",
    fontSize: 34,
    alignSelf: "center"
  },
  button5: {
   
    backgroundColor: "rgba(11,45,90,1)",
    flex: 1,
    maxWidth: 700,
    width: '100%',
    height: 139,
    alignSelf: 'center',
    flexDirection: "row",
    borderRadius: 28,
    justifyContent: "space-around",
    marginTop: 7,
  },
  image5: {
    width: 61,
    height: 61,
    alignSelf: "center",
    marginLeft: 0
  },
  furniture5: {
    fontFamily: "roboto-regular",
    color: "rgba(251,251,251,1)",
    fontSize: 34,
    alignSelf: "center"
  }
});
class  Categories extends Component{
  render(){
      return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode={'stretch'} // or cover
        imageStyle={{ opacity: 0.4 }}
        style={{ flex: 1 }} // must be passed from the parent, the number may vary depending upon your screen size
        source={require("../img/1.jpg")}
      >
        <StatusBar hidden backgroundColor="rgba(255,255,255,0)" />
        <HeaderX style={styles.headerX} navigation={this.props.navigation}></HeaderX>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Products')}>
              <Image
                source={require("../img/shelf_(2).png")}
                resizeMode="contain"
                style={styles.image}
              ></Image>
              <Text style={styles.furniture}>Furniture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={() => this.props.navigation.navigate('Products')}>
              <Image
                source={require("../img/shelf_(4).png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
              <Text style={styles.furniture1}>Furniture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Products')}>
              <Image
                source={require("../img/shelf_(3).png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
              <Text style={styles.furniture2}>Furniture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3} onPress={() => this.props.navigation.navigate('Products')}>
              <Image
                source={require("../img/shelf_(6).png")}
                resizeMode="contain"
                style={styles.image3}
              ></Image>
              <Text style={styles.furniture3}>Furniture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button4} onPress={() => this.props.navigation.navigate('Products')}>
              <Image
                source={require("../img/shelf_(7).png")}
                resizeMode="contain"
                style={styles.image4}
              ></Image>
              <Text style={styles.furniture8}>Furniture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button5} onPress={() => this.props.navigation.navigate('Products')}>
              <Image
                source={require("../img/shelf_(8).png")}
                resizeMode="contain"
                style={styles.image5}
              ></Image>
              <Text style={styles.furniture5}>Furniture</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );}
}


export default Categories;
