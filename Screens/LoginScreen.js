/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,TextInput,TouchableOpacity,Dimensions} from 'react-native';
import CurvedView from '../components/curvedView';
import Logo from '../components/Logo';
import EmailAndPass from '../components/EmailAndPass';


// eslint-disable-next-line no-unused-vars
class  LoginScreen extends Component{

    state={
        
        email:'',
        password:'',
        error:'Login failed'
    }
  
    render(){
  
      return (
        <View style={styles.container}>

            
            <CurvedView />

            <View style={styles.emailAndPass}>

                    <View style={styles.containeremailAndPass}>
                    <TextInput 
                    placeholder="email" 
                    style={styles.input} 
                    value={this.state.email}
                    onChangeText={email=>this.setState({email:email})}
                    />
                    <TextInput 
                    placeholder="password"
                    style={styles.input} 
                    value={this.state.password}
                    onChangeText={pass=>this.setState({password:pass})}

                    />

                   
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigate('MainApp')}>
                            <Text style={styles.button}>Login</Text>
                        </TouchableOpacity>

                       
                

                    <View style={styles.rowbuttons}>
                        <TouchableOpacity style={styles.buttonContainer2} onPress={() => this.props.navigate('SignUpScreen')}>
                            <Text style={styles.button}>Create Account</Text>
                        </TouchableOpacity>
                        

                        <TouchableOpacity style={styles.buttonContainer2} onPress={() => this.props.navigate('')}>
                            <Text style={styles.button}>Forget your Password ?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.buttonContainer3} onPress={() => this.props.navigate('SignUpScreen')}>
                            <Text style={styles.button}>Sign up with Facebook</Text>
                        </TouchableOpacity>
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




      container:{
          flex:1,
          justifyContent:'center',
        
         
      },
      containeremailAndPass:{
        flex:3,
        padding:20


      },
      rowbuttons:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        

      },

     
      emailAndPass:{
          flex:2
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
    errorText:{
        fontSize:25,
        color:'red',
        alignSelf:'center',
        marginTop:45,
        fontWeight:'bold'
    },
    button:{
        textAlign:'center',
        //color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        
    },
    buttonContainer:{
        backgroundColor:'#ffbf00',
        padding:13,
        borderRadius:18,
        width:'50%',
        alignSelf:'center',
        margin:20,
        padding:10,
        
    },
    buttonContainer2:{
        //backgroundColor:'#ffbf00',
        
       // borderRadius:8,
        width:sWidth/1.8,
        alignSelf:'center',
        margin:20,
        
        
    },
    buttonContainer3:{
        //backgroundColor:'#ffbf00',
        
       // borderRadius:8,
        width:"100%",
        alignSelf:'center',
        padding:20,
        borderColor:'black',
        borderWidth:1,
        borderRadius:12,
        
    }

  });
  
  export default LoginScreen;
