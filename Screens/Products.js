import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Dimensions, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper'
class Products extends Component {
    const = { width, height } = Dimensions.get("window");
    render() {

        return (


            <View style={styles.view}>
                <ScrollView

                >
                    <Text>{height}</Text>
                    <View style={styles.card} >
                        <Card style={styles.card1}>
                        <Image

                            source={require('../img/bbb.jpg')}
                            resizeMode='cover'
                            style={{ width: 150, height: 150, margin: 5 }}
                        />





                        <Image

                            source={require('../img/ccc.png')}
                            resizeMode='cover'
                            style={{ width: 150, height: 150, margin: 5 }}
                        />


                        <Image

                            source={require('../img/ddd.jpg')}
                            resizeMode='cover'
                            style={{ width: 150, height: 150, margin: 5 }}
                        />


                        <Image

                            source={require('../img/eee.jpg')}
                            resizeMode='cover'
                            style={{ width: 150, height: 150, margin: 5 }}
                        />


                        <Image

                            source={require('../img/bbb.jpg')}
                            resizeMode='cover'
                            style={{ width: 150, height: 150, margin: 5 }}
                        />
                        </Card>
                   

                  
                        <Card style={styles.card2}>
                        <Image

                            source={require('../img/bbb.jpg')}
                            resizeMode='cover'
                            style={{ width: 150, height: 150, margin: 5 }}
                        />
                        <Image

                            source={require('../img/bbb.jpg')}
                            resizeMode='cover'
                            style={{ width: 150, height: 150, margin: 5 }}
                        />
                        <Image

                            source={require('../img/bbb.jpg')}
                            resizeMode='cover'
                            style={{ width: 150, height: 150, margin: 5 }}
                        />
                        <Image

                            source={require('../img/bbb.jpg')}
                            resizeMode='cover'
                            style={{ width: 150, height: 150, margin: 5 }}
                        />
                        <Image

                            source={require('../img/bbb.jpg')}
                            resizeMode='cover'
                            style={{ width: 150, height: 150, margin: 5 }}
                        />
                      </Card>
                   </View>

                </ScrollView>
          <View>
                <Button
                        title="Cart"
                        onPress={() => this.props.navigation.navigate('Cart')}
                         />
            </View>

            </View>
        );

    }
}



const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',

      
        flex: 1

    },
 
    card:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
    
        width:"100%",
        

    },
    card2: {
        alignItems: 'center',
        backgroundColor:"blue",
        margin: 4,
        width:"50%",
       
       
    },
    card1: {
        alignItems: 'center',
        backgroundColor:"red",
        margin: 4,
        width:"50%",
       
    }
   

});

export default Products;
