import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, ScrollView, ImageBackground,TouchableOpacity,Image,Content } from "react-native";
import HeaderX from "../components/HeaderX";
import MaterialButtonWithShadow1 from "../components/MaterialButtonWithShadow1";
import CupertinoButtonDelete from "../components/CupertinoButtonDelete";
import MaterialButtonHamburger1 from "../components/MaterialButtonHamburger1";
import PropTypes from 'prop-types';
import { LinearGradient } from "expo-linear-gradient";
import Slideshow from 'react-native-slideshow';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-between"
  },
  headerX: {
    height: 44,
    alignSelf: "stretch"
  },
  mosaic: {
    //fontFamily: "josefin-sans-regular",
    color: "#043b59",
    fontSize: 60,
    alignSelf: "stretch",
    marginLeft: 15,
    fontWeight: "bold"
  },
  rect: {
    height: 173,
    alignSelf: "stretch"
  },
  group2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch"
  },
  featured: {
    //fontFamily: "roboto-regular",
    color: "#be2900",
    alignSelf: "center",
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold"
  },
  materialButtonWithShadow1: {
    height: 36,
    width: 93,
    marginRight: 10
  },
  scrollArea: {

    alignSelf: "stretch"
  },
  scrollArea_contentContainerStyle: {
  },
  group: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1
  },
  product3: {
    width: 157,
    marginLeft: 0,
    alignSelf: "stretch",
    marginRight: 25
  },
  product2: {
    width: 157,
    marginLeft: 0,
    alignSelf: "stretch",
    marginRight: 25
  },
  product1: {
    width: 157,
    marginLeft: 0,
    alignSelf: "stretch",
    marginRight: 25
  },
  product: {
    width: 157,
    marginLeft: 0,
    alignSelf: "stretch",
    marginRight: 25
  },
  cupertinoFooter1: {
    alignSelf: "stretch",
    backgroundColor: "transparent",

  } ,containerprod: {

    width: 157,
    marginLeft: 0,
    alignSelf: "stretch",
    marginRight: 25,
    marginBottom:30,

    backgroundColor: "rgba(242,241,241,0.7)",
    elevation: 15,
    borderRadius: 15,
    overflow: "hidden",
  
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: "center",
    justifyContent: "space-between"
  },
  container2prod: {
    //   borderWidth: 2,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  loremIpsum2prod: {
    // fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    marginLeft: 16
  },
  materialButtonHamburger1prod: {
    height: 36,
    width: 36,
    borderTopLeftRadius: 14,
    borderBottomRightRadius: 14,
    alignSelf: "flex-end"
  }
  ,
  groupprod: {
    height: 60,
    alignSelf: "stretch",
    marginTop: 8,
    marginRight: 0,
    flexDirection: "row"
  },
  cupertinoButtonDelete2prod: {
    height: 23,
    width: 36,
    marginRight: -157
  },
  group3prod: {
    width: 96,
    height: 17
  },
  group2prod: {
    height: 32,
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 27
  },
  productNameprod: {
    // fontFamily: "roboto-700",
    color: "#121212",
    height: 32,
    width: 96,
    marginTop: 0,
    marginLeft: 31,
    marginRight: 0
  },
  loremIpsumprod: {
    //  fontFamily: "roboto-regular",
    color: "rgba(168,164,164,1)",
    fontSize: 7,
    width: 91,
    height: 34,
    marginTop: 0,
    marginLeft: 31,
    marginRight: 0
  },
  imageprod: {
    width: 157,
    height: 130,
    alignSelf: "stretch",
    marginBottom: 20
  },
  productdetailprod: {
    height: 30,
    alignSelf: "stretch"
  },
  headerX: {
    height: 44,
    alignSelf: "stretch"
  },
  productlist: {
    height: 58,
    alignSelf: "stretch"
  },
});

export default class HomeScreen extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          
          url: 'https://imfndclub.com/wp-content/uploads/2017/06/Blog-Cover-1.png',
        }, {
         
          url: 'https://2.bp.blogspot.com/-YGVCMw2LSrM/T5mN5rlbalI/AAAAAAAAAds/eKvmtNEZcOk/s1600/Screen+shot+2012-04-26+at+2.01.32+PM.png',
        }, {
          
          url: 'https://i.ytimg.com/vi/xRPcDYdRym8/maxresdefault.jpg',
        },
      ],
    };
  }
  static navigationOption = {
    header: null,
  };

  
 
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }
 
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  viewProduct (prod) {
    current = prod;
    this.props.navigation.navigate('ProductDetails');
  }
  render() {
    var productList = [];
    ProdList.products.forEach(function (prod) {
      productList.push(
        <TouchableOpacity style={[styles.containerprod, this.props.style]} onPress={this.viewProduct.bind(this, prod)}>
          <View style={styles.groupprod}>
            <CupertinoButtonDelete
              style={styles.cupertinoButtonDelete2prod}
            ></CupertinoButtonDelete>
            <View style={styles.group3prod}>
              <View style={styles.group2prod}>
                <Text style={styles.productNameprod}>{prod.title}</Text>
                <Text style={styles.loremIpsumprod}>{prod.description}</Text>
              </View>
            </View>
          </View>
          <Image
            source={{ uri: prod.imagePath }}
            resizeMode="contain"
            style={styles.imageprod}
          ></Image>
          <View style={styles.container2prod}>
            <Text style={styles.loremIpsum2prod}>${prod.quantity}</Text>
            <MaterialButtonHamburger1
              style={styles.materialButtonHamburger1prod}
            ></MaterialButtonHamburger1>
          </View>
        </TouchableOpacity>
      );
    }.bind(this));
    const { navigation } = this.props;

    return (

      <View style={styles.container}>
      
      <ImageBackground
          resizeMode={'stretch'} // or cover
          imageStyle={{ opacity: 0.4}}
          style={{ flex: 1, flexDirection: 'column', justifyContent: "space-between" }} // must be passed from the parent, the number may vary depending upon your screen size
          source={require("../img/1.jpg")}
        >
          <StatusBar
            hidden
            barStyle="dark-content"
            backgroundColor="rgba(255,255,255,1)"
          />
          <HeaderX style={styles.headerX} navigation={this.props.navigation}></HeaderX>
          <Text style={styles.mosaic}>MOSAIC</Text>
          <Slideshow
            dataSource={this.state.dataSource}
            position={this.state.position}
            containerStyle={{marginLeft:15,marginRight:15,borderRadius:35}}

            onPositionChanged={position => this.setState({ position })} />

          <View style={styles.group2}>
            <Text style={styles.featured}>Featured</Text>
            <MaterialButtonWithShadow1
              style={styles.materialButtonWithShadow1} navigation={this.props.navigation}
            ></MaterialButtonWithShadow1>
          </View>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.group}>

                {productList}
              </View>
            </ScrollView>
          </View>
</ImageBackground>
      </View>
    );

  }
}//         