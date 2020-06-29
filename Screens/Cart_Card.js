/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, Image, FlatList, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import { calcRatio, calcWidth, calcHeight } from '../Dimension';


export default class CardView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

    }


    render() {
        const { counter } = this.state;

        return (

            <View style={styles.cart}>

                <Image
                    style={{ width: calcWidth(70), height: calcHeight (80), alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginLeft: calcHeight (13), marginRight:(5)  }}

                    source={this.props.image}

                />

                <View style={styles.viewchild}>
                    <Text style={styles.text1}  >{this.props.name}</Text>


                    <View style={styles.text2}>
                        <TouchableOpacity onPress={() => {

                            if (this.state.count <= 0) {
                                this.state.count = 1;

                            }


                            this.setState({
                                count: this.state.count - 1,
                            });
                        }}>

                            <Text style={styles.Minus}>-</Text>


                        </TouchableOpacity>
                        <Text style={styles.number} >
                            {this.state.count}
                        </Text>

                        <TouchableOpacity onPress={() => {
                            this.setState({
                                count: this.state.count + 1,
                            });
                        }}>

                            <Text style={styles.Add} >+</Text>
                        </TouchableOpacity>



                    </View>

                </View>


                <View style={{ height:calcHeight  (80), width:calcWidth(55)  , justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Text>{this.props.price}</Text>

                </View>

              </View>











        //          <View>  dh kda 8lt leh b2a 3shan ana mdea elchildren style w elparent la

        //         <Card style={styles.cart}>



        //          <Text>{name}</Text>


        //          </Card>

        //        </View>

        //   <View style={styles.cart}>

        //      1)mn3mlsh card view a7sn
        //      2)  <View>   deh kda 8lt leh 3shan ally gwaha hayb2a chikdren of children fa msh hay5od flex direction row hay5od col by default
        //      <Image
        //          style={{ width: 60, height: 60 ,justifyContent:'center' ,marginLeft:13,marginRight:5}}

        //          source={this.props.image}

        //     />
        //      <Text>bbbeee</Text>

        //  </View>


        //      </View>

        );

    }
}
const styles = StyleSheet.create({


    cart: {
        width: calcWidth(300),
        height: calcHeight (100),
        flexDirection: 'row',
        //alignContent: 'center',

        alignSelf: 'center',

        backgroundColor: 'white',


        marginTop: calcHeight (18),
        shadowColor: '#000',
        shadowOffset: {
            width: calcWidth (0),
            height:calcHeight (5) ,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        borderRadius: 10,



    },
    text: {
        flexDirection: 'column',


    },
    viewchild: {

        flexDirection: 'column',
        height: calcHeight (80),
        width: calcWidth (140),
        justifyContent:'flex-end',
        justifyContent: 'space-between',

    },
    text1: {
        alignItems: 'flex-start',
        marginLeft: calcWidth (5),
        marginTop: calcHeight (7),
    },
    text2: {
        flexDirection: 'row',
        marginLeft: calcWidth (5),

        width: calcWidth (85),
        height: calcHeight (30),
        backgroundColor: '#f5f0f0',
        borderStyle: 'solid',
        paddingVertical: calcHeight (8),
        borderWidth: calcWidth(0.4),
        borderRadius: 8,
        borderColor: 'grey',



    },
    Minus: {
        width: calcWidth(28),
        height: calcHeight (20),
        justifyContent: 'flex-start',


        marginLeft: calcWidth(4),



    },
    Add: {
        width: calcWidth(28),
        height: calcHeight(20),
        justifyContent: 'flex-end',






    },
    number: {
        width: calcWidth(28),
        height: calcHeight(20),
        justifyContent: 'center',
        alignItems: 'center',


    }

    ,

    col: {

        width:calcWidth(50),
        height: calcHeight(70),
        alignItems: 'flex-end',
        alignSelf: 'center',
        fontSize: calcWidth(15),
        marginLeft: calcWidth(5),
        marginBottom: calcHeight(7),

        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'grey',




    },

    viewcounter: {
        width: calcWidth(100),
        height: calcHeight(30),

        //alignContent: 'center',

        alignSelf: 'center',

        backgroundColor: 'grey',
        borderStyle: 'solid',


        borderRadius: 10,
        borderColor: 'grey',


    },

});



