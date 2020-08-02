import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, ScrollView, ImageBackground } from "react-native";
import HeaderX from "../components/HeaderX";
import MaterialButtonWithShadow1 from "../components/MaterialButtonWithShadow1";
import Product from "../components/Product";
import PropTypes from 'prop-types';
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
    fontFamily: "josefin-sans-regular",
    color: "rgba(33,51,61,1)",
    fontSize: 60,
    alignSelf: "stretch"
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
    fontFamily: "roboto-regular",
    color: "rgba(33,51,61,1)",
    alignSelf: "center",
    fontSize: 20,
    marginLeft: 10
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

  }
});

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'http://placeimg.com/640/480/any',
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
  
  render() {const { navigation } = this.props;

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
                
                <Product style={styles.product3} navigation={this.props.navigation}></Product>
                <Product style={styles.product2} navigation={this.props.navigation}></Product>
                <Product style={styles.product1} navigation={this.props.navigation}></Product>
                <Product style={styles.product} navigation={this.props.navigation}></Product>
              </View>
            </ScrollView>
          </View>

        </ImageBackground>
      </View>
    );

  }
}//         