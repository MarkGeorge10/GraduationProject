/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,Image,TouchableOpacity,Dimensions} from 'react-native';



// eslint-disable-next-line no-unused-vars
class  GettingStarted extends Component{

  
    render(){
  
      return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image
                source={require('../../img/logo.png')}
                style={{height:200,width:200}} />

            </View>

    

            <Text style={styles.text2}>MOSAIC</Text>

                   
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('LaunchScreen')}>
                            <Text style={styles.button}>Getting Started</Text>
                        </TouchableOpacity>

                       
                

        </View>
    );
  
    }
  };


  const sWidth  = Dimensions.get('window').width;
const sHeight = Dimensions.get('window').height;
const ratio   = sWidth / sHeight;
  
  const styles = StyleSheet.create({

    imageContainer:{
        marginTop:100,
        flex:6,
        justifyContent:'center',
        alignItems:'center',

    },

      container:{
          flex:1,
          justifyContent:'center',
        
         
      },
      button:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        
    },
    text2: {
        flex:5,
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf:'center',
        color:'#003368'
        
      },


     
    buttonContainer:{
        backgroundColor:'#ffbf00',
        borderRadius:18,
        width:'60%',
        height:'8%',
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
        

        margin:20,
        padding:10,
        
        
        
    },
   

  });
  
  export default GettingStarted;
