/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';



class  PostScreen extends Component{
  
    render() {
        return (
           
            <View style={styles.container}>
                
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('addshipment')}>
                <Image
                    style={{ width: 140, height: 140,  borderRadius: 140 / 2,alignSelf:'center',margin:10 }}
                    source={require('../../img/shipping.png')}
                    />
                  <Text style={styles.button}>Add Shipment</Text>
                </TouchableOpacity>

                <View style={styles.separator}></View>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('addproduct')}>
                <Image
                    style={{ width: 140, height: 140,  borderRadius: 140 / 2,alignSelf:'center',margin:10 }}
                    source={require('../../img/addproduct.jpg')}
                    />
                  <Text style={styles.button}>Add product</Text>
                </TouchableOpacity>
                 

                
              </View>
            
         
        )
      }
    }
  
    
  
    
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      button:{
        textAlign:'center',
        //color:'#fff',
        
        fontSize:20,
        
    },
    separator:{
      borderBottomColor:'black',
       borderBottomWidth:1,
       
       width:'90%'
    },
    buttonContainer:{
        //backgroundColor:'#ffbf00',
        //flex:6,
        borderRadius:18,
        width:'100%',
        alignSelf:'center',
        margin:20,
      
       
        
    },
    });
  
    export default PostScreen;