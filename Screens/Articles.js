/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';

class  Articles extends Component{

    render(){

      return (
        <View style={styles.container}>
            <View style={styles.articleContainer}>
                <Text style={styles.heading}>Welcome to Article Page</Text>
                <Text style={styles.content}>content</Text>

                <TouchableOpacity style={{padding:20}}>
                    <Text style={{color:'#189cfc'}}>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
    );

    }
  }



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'


    },
    heading:{
        fontSize:22,
        color:'black',
        padding:10,
        marginBottom:10,
    },
    content:{
        marginTop:10,
        fontSize:19
    },
    articleContainer:{
        padding:10,
        borderBottomWidth: 5,
        borderBottomColor:'rgba(255,255,255,.7)',

    },
});

export default Articles;
