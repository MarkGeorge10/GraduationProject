/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import CurvedView from '../../components/curvedView';
import Ionicons from 'react-native-vector-icons/Ionicons';



// eslint-disable-next-line no-unused-vars
class  SignUpScreen extends Component{

    state={
        companyName:'',
        companyEmail:'',
        companyAddress:'',
        companyPhone:'',
        password:'',
        error:''
    }

    static navigationOption = {
        header: null,
      };
  
    render(){
       
        
      return (
        <View style={styles.container}>
            
            <CurvedView>
            

            </CurvedView>

            
            <View style={styles.emailAndPass}>

                    <View style={styles.containeremailAndPass}>


                    <TextInput
                                style={styles.input} 
                                placeholder="Company Name:"
                                value={this.state.companyName}
                                onChangeText={companyName => this.setname(companyName)}
                               
                                multiline


                            />

                          


                        
                            <TextInput
                             style={styles.input} 
                                placeholder="Company Email"
                                value={this.state.email}
                                onChangeText={companyEmail => this.setemail(companyEmail)}
                                
                                
                                
                            />



                            <TextInput
                             style={styles.input} 
                                placeholder="Company Address"
                                value={this.state.companyAddress}
                                onChangeText={companyAddress => this.setadress(companyAddress)}
                                
                                
                              
                                />



                            <TextInput
                             style={styles.input} 
                                placeholder="Company Phone"
                                value={this.state.companyPhone}
                                onChangeText={companyPhone => this.setphone(companyPhone)}
                                />

                    

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('MainApp')}>
                        <Text style={styles.button}>Sign Up</Text>
                         </TouchableOpacity>
                 

                        

                    <TouchableOpacity>
                        <Text style={styles.errorText}>
                            {this.state.error}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  
    }
  };
  
  const styles = StyleSheet.create({
      container:{
          flex:1,
          justifyContent:'center',
        
         
      },
      containeremailAndPass:{
        flex:1,
        padding:20


      },

      logoContainer:{
          flex:1,
          justifyContent:'center',
          alignItems:'center'
      },
      emailAndPass:{
          flex:2
      },
      input:{
        height:40,
        
        backgroundColor:'rgba(255,255,255,.5)',
        
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
        borderBottomWidth: 1.0,
    },
    errorText:{
        fontSize:25,
        color:'red',
        alignSelf:'center',
        marginTop:45,
        fontWeight:'bold'
    },
    button:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        color:'black'
        
    },
    buttonContainer:{
        backgroundColor:'#ffbf00',
        padding:13,
        borderRadius:8,
        width:'50%',
        alignSelf:'center',
        margin:20,
        padding:10,
        
    },
    buttonContainer3:{
        //backgroundColor:'#ffbf00',
        
       // borderRadius:8,
        width:"90%",
        alignSelf:'center',
        padding:15,
        borderColor:'black',
        borderWidth:1,
        borderRadius:12,
        
    },
    input:{
        height:40,
        width:300,
        backgroundColor:'rgba(255,255,255,10)',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15
    },

  });
  
  export default SignUpScreen;
