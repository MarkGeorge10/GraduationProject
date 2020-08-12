/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View,ScrollView, Text,StyleSheet,TextInput,TouchableOpacity,ActivityIndicator,Button,Alert} from 'react-native';
import CurvedView from '../../components/curvedView';
import Ionicons from 'react-native-vector-icons/Ionicons';



// eslint-disable-next-line no-unused-vars
class  SignUpScreen extends Component{

    state={
      error:null
    };
   
    componentDidMount() {}

    componentWillUnmount() {}
  
    onSignupPress() {
        var fullname = this.state.fullname;
        var Address = this.state.Address;
      var email = this.state.email;
      var password = this.state.password;
      var conpassword = this.state.conpassword;
      var err = this.state.error;

      if(password == conpassword){

        // if validation fails, value will be null
        fetch('https://mosaic-test-api.herokuapp.com/users/signin', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          fullname: fullname,
          email: email,
          password: password,
          verifyPassword: conpassword,
      }),
        })
          .then((response) => response.json())
          .then((responseData) => {
            //this.props.navigate('MainApp')
            Alert.alert("New company is created");
            
          }).catch(()=>{});

      }
      else{
        
          this.setState({
            err:"password dosen't match"
          })
      
      }
     
        
      
    }

    handleFullName = (text) => {
        this.setState({ fullname: text });
      };
    
      handleAddress = (text) => {
        this.setState({ Address: text });
      };
      handleEmail = (text) => {
        this.setState({ email: text });
      };
    
      handlePassword = (text) => {
        this.setState({ password: text });
      };
      handleConfirmPassword = (text) => {
        this.setState({ conpassword: text });
      };
     
   
    render(){        
      return (
        <View style={styles.container}>
            
            <CurvedView>
            

            </CurvedView>

            
            <ScrollView style={styles.emailAndPass}>

                    <View style={styles.containeremailAndPass}>

                    <Text style={{color:"red"}}>{this.state.error === null ? "":this.state.error}</Text>


                    <TextInput
                                style={styles.input} 
                                placeholder="Company Name"
                                
                                onChangeText={this.handleFullName}
                                multiline
                            />

                          


                        
                            <TextInput
                             style={styles.input} 
                                placeholder="Company Email"
                                
                                onChangeText={this.handleEmail} 
                            />



                            <TextInput
                             style={styles.input} 
                                placeholder="Company Address"
                                
                                onChangeText={this.handleAddress}
                                />



                           
                            <TextInput
                             style={styles.input} 
                                placeholder="Company Password"
                               
                                secureTextEntry
                                onChangeText={this.handlePassword}
                                />
                                <TextInput
                                    style={styles.input} 
                                    placeholder="Confirm Password"
                                    
                                    secureTextEntry
                                    onChangeText={this.handleConfirmPassword} 
                                        
                                    
                                />

                    
                        <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.onSignupPress()}>
                            <Text style={styles.button}>Sign up</Text>
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
