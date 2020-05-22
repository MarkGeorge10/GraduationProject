/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,TextInput,TouchableOpacity,Button} from 'react-native';




class  PostScreen extends Component{
  
    render() {
        return (
           
            <View style={styles.container}>
                
  
                  <Button
                    title="Go to Shipment"
                    onPress={() => this.props.navigation.navigate('addshipment')}
                      />

                <Button
                    title="Go to product"
                    onPress={() => this.props.navigation.navigate('addproduct')}
                      />
              </View>
            
         
        )
      }
    }
  
    
  
    
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    });
  
    export default PostScreen;