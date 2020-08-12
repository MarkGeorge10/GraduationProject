import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
  Alert
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
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around"
  },
  button: {

    elevation: 15,
    overflow: "hidden",
    marginTop: 0,
    marginBottom: 24,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: "center",
    flex: 1,
    width: '100%',
    height: 139,
    alignSelf: 'center',
    flexDirection: "column",
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 30,
    borderColor: 'rgba(255,255,255,0.8)' ,
    justifyContent: "space-around",
    marginTop: 7,


  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginLeft: 0
  },
  furniture: {
    ////fontFamily: "roboto-regular",
    color: "rgba(11,45,90,1)",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
  }
  , right: {
    width: 151,
    justifyContent: "flex-start",
    marginLeft: 0,
    marginTop: 8,
    alignSelf: "stretch",
    marginBottom: 0
  }, left: {
    width: 150,
    borderRadius: 70,
    shadowOpacity: 0.01,
    alignSelf: "stretch",
    marginBottom: 0,
    marginLeft: 0
  }
});
class Categories extends Component {
  constructor(props) {
    super(props);
    //this.onChoice = this.onChoice.bind(this);

  }

  handleCategory = (text) => {
    this.setState({ category: text });
  };
  componentDidMount() { }

  componentWillUnmount() { }

  onChoice(category) {

    // if validation fails, value will be null
    fetch('https://mosaic-test-api.herokuapp.com/search?query=' + category, {
      method: 'GET',

      headers: JSON.stringify({
        'query': category,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.error != null) {
          if (responseData.error.message == "no product exist") {
            Alert.alert("No products yet in that category!")
          }

        }
        else {
          this.setState({ products: responseData });
          ProdList = this.state.products;
          this.props.navigation.navigate('Products')

        }

      }).catch(() => { Alert.alert("nonono") });


  }
  render() {
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
              <View style={styles.left}>

                <TouchableOpacity style={styles.button} onPress={this.onChoice.bind(this, 'Electronic Material')}>
                  <Image
                    source={require("../img/shelf_(2).png")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                  <Text style={styles.furniture}>Electronics</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.onChoice.bind(this, 'Chemicals')}>
                  <Image
                    source={require("../img/shelf_(3).png")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                  <Text style={styles.furniture}>Chemicals</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.onChoice.bind(this, 'Textiles')}>
                  <Image
                    source={require("../img/shelf_(4).png")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                  <Text style={styles.furniture}>Textiles</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.right}>

                <TouchableOpacity style={styles.button} onPress={this.onChoice.bind(this, 'Lights')}>
                  <Image
                    source={require("../img/shelf_(6).png")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                  <Text style={styles.furniture}>Lights</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.onChoice.bind(this, 'Agriculture')}>
                  <Image
                    source={require("../img/shelf_(7).png")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                  <Text style={styles.furniture}>Agriculture</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.onChoice.bind(this, 'Industry')}>
                  <Image
                    source={require("../img/shelf_(8).png")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                  <Text style={styles.furniture}>Indsutrial parts</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}


export default Categories;
