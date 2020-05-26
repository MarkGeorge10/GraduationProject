/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,TextInput,TouchableOpacity,Dimensions} from 'react-native';

import Logo from '../components/Logo';
import EmailAndPass from '../components/EmailAndPass';


// eslint-disable-next-line no-unused-vars
class  CurvedView extends Component{

    state={
        
        email:'',
        password:'',
        error:'Login failed'
    }
  
    render(){
  
      return (

            <View style={styles.subcontainer}>
                    <View style={styles.top_background}>
                        <View style={styles.top_content}>
                            
                            <Text style={styles.text2}>MOSAIC</Text>

                            <Logo />
                        </View>
                    </View>
            </View>
            

            
       
    );
  
    }
  };


  const sWidth  = Dimensions.get('window').width;
const sHeight = Dimensions.get('window').height;
const ratio   = sWidth / sHeight;
  
  const styles = StyleSheet.create({


    subcontainer: {
        width: sWidth,
        //height: sHeight,
        backgroundColor: '#fff',
        marginBottom:30
      },
      top_background: {
        width: sHeight * 2,
        height: sHeight * 2,
        borderRadius: sHeight * 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: '#003366',
        alignItems: 'center',
        marginLeft: ((ratio * sHeight) * 0.5) - (sHeight),
        marginTop: -sHeight * 1.7,
        paddingTop: sHeight * 1.7,
      },
      top_content: {
        paddingTop: sHeight * 0.02,
        width: sWidth,
        height: sHeight * 0.2,
        alignItems: 'center',
      },
       
      text2: {
        marginTop: sHeight * 0.04,
        marginBottom: sHeight * 0.08,
        fontSize: 33,
        fontWeight: 'bold',
        color: '#fff'
      },

  });
  
  export default CurvedView;
