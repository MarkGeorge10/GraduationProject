import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView, Image, FlatList, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper'



export default class CardView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        };

    }


    render() {
        const { counter } = this.state

        return (

            <View style={styles.cart}>

                <Image
                    style={{ width: 70, height: 80, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginLeft: 13, marginRight: 5 }}

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
                                count: this.state.count - 1
                            })
                        }}>

                            <Text style={styles.Minus}>-</Text>


                        </TouchableOpacity>
                        <Text style={styles.number} >
                            {this.state.count}
                        </Text>

                        <TouchableOpacity onPress={() => {
                            this.setState({
                                count: this.state.count + 1
                            })
                        }}>

                            <Text style={styles.Add} >+</Text>
                        </TouchableOpacity>



                    </View>

                </View>


                <View style={{ height: 80, width: 55, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
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
};
const styles = StyleSheet.create({



    cart: {
        width: 300,
        height: 100,
        flexDirection: 'row',
        //alignContent: 'center',

        alignSelf: 'center',

        backgroundColor: 'white',


        marginTop: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
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
        height: 80,
        width: 140,
        justifyContent:'flex-end',
        justifyContent: 'space-between'

    },
    text1: {
        alignItems: 'flex-start',
        marginLeft: 5,
        marginTop: 7,
    },
    text2: {
        flexDirection: 'row',
        marginLeft: 5,
        
        width: 85,
        height: 30,
        backgroundColor: '#f5f0f0',
        borderStyle: 'solid',
        paddingVertical: 8,
        borderWidth: 0.4,
        borderRadius: 8,
        borderColor: 'grey',



    },
    Minus: {
        width: 28,
        height: 20,
        justifyContent: 'flex-start',
     
      
        marginLeft: 4,



    },
    Add: {
        width: 28,
        height: 20,
        justifyContent: 'flex-end',

       
       



    },
    number: {
        width: 28,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
 

    }

    ,

    col: {

        width: 50,
        height: 70,
        alignItems: 'flex-end',
        alignSelf: 'center',
        fontSize: 15,
        marginLeft: 5,
        marginBottom: 7,

        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'grey'




    },

    viewcounter: {
        width: 100,
        height: 30,

        //alignContent: 'center',

        alignSelf: 'center',

        backgroundColor: 'grey',
        borderStyle: 'solid',


        borderRadius: 10,
        borderColor: 'grey',


    }

});



