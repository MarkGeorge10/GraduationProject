import React , {Component} from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Button} from 'react-native';
import {Card} from 'react-native-paper'
class  Products extends Component{

    render(){

      return (
        
            <View style={styles.container}>
                <View style={styles.articleContainer}>
                    <Text style={styles.heading}>Welcome to Products Page</Text>
                    <Button
                        title=" Go to Products"
                        onPress={() => this.props.navigation.navigate('ProductDetails')}
                         />
                  
    
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
    mycard:{

margin:10,

    },

 cardview:{
flexDirection:'row',


 }   
});

export default Products;
