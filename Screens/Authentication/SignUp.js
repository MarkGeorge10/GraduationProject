/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View,ScrollView, Text,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator,Button} from 'react-native';
import CurvedView from '../../components/curvedView';
import Ionicons from 'react-native-vector-icons/Ionicons';



// eslint-disable-next-line no-unused-vars
class  SignUpScreen extends Component{

    
    constructor(props) {
        super(props);
        this.state = {
        companyName:'',
        companyEmail:'',
        companyAddress:'',
        companyPhone:'',
        password:'',
        confirmPassword:'',
        error:null,
        isLoaded:false
        };
       
    }

    Submit = () => {
           
                   // if (this.state.newPassword === this.state.rePassword){
                        var url = "https://mosaic-test-api.herokuapp.com/users/signin";
                       
                        
                      fetch(url,
                        {
                            method: 'POST',
                            
                            body: JSON.stringify({ 
                                "fullname": "Mark",
                                "email": "marssk@gmail.com",
                                "Address": "a",
                                //"phone":companyPhone,
                                "Password": "123",
                                "verifypassword": "123" }),
                            } ).then((response)  =>
                            {
                                if (response.status === 200){

                                    Alert.alert(
                                        'Alert',
                                        'created user successfully',
                                        [
                                          {text: 'OK', onPress: () =>  this.props.navigate('MainApp'),
                                        },
                                        ],
                                      );
                                     }
                                else {
                                    if (response.status === 500)
                                {
                                    alert('Error while resetting the password');

                                }
                                }
                            }
                                ).catch((error) => {
                                    console.log(error);
                                    alert('Please check your internet connection and try again.');
                                        //  this.setState({loading: false});
                                });
                   // }

                   /* else {
                        alert('Passwords do not match');
                    }*/
                }
               

 
     
   
    render(){        
      return (
        <View style={styles.container}>
            
            <CurvedView>
            

            </CurvedView>

            
            <ScrollView style={styles.emailAndPass}>

                    <View style={styles.containeremailAndPass}>


                    <TextInput
                                style={styles.input} 
                                placeholder="Company Name"
                                value={this.state.companyName}
                                onChangeText={companyName => this.setState({companyName})}
                                multiline
                            />

                          


                        
                            <TextInput
                             style={styles.input} 
                                placeholder="Company Email"
                                value={this.state.companyEmail}
                                onChangeText={companyEmail => this.setState({companyEmail})} 
                            />



                            <TextInput
                             style={styles.input} 
                                placeholder="Company Address"
                                value={this.state.companyAddress}
                                onChangeText={companyAddress => this.setState({companyAddress})}
                                />



                            <TextInput
                             style={styles.input} 
                                placeholder="Company Phone"
                                keyboardType="numeric"
                                
                                value={this.state.companyPhone}
                                onChangeText={companyPhone=>this.setState({companyPhone})}
                                />

                            <TextInput
                             style={styles.input} 
                                placeholder="Company Password"
                                value={this.state.password}
                                secureTextEntry
                                onChangeText={password=>this.setState({password})}
                                />
                                <TextInput
                                    style={styles.input} 
                                    placeholder="Confirm Password"
                                    value={this.state.confirmPassword}
                                    secureTextEntry
                                    onChangeText={confirmPassword=>{
                                        this.setState({confirmPassword})
                                            
                                            
                                        } 
                                        
                                    }
                                />

                    
                    <Button title="Submit" style={styles.buttonContainer}
                    onPress={()=>this.Submit}/>
                       
                 

                        

                    <TouchableOpacity>
                        <Text style={styles.errorText}>
                            {this.state.error}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        //fontWeight:'bold',
        fontSize:20,
        color:'black',
        fontFamily:"arial"
        
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
