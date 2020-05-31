/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import CurvedView from '../../components/curvedView';
import Logo from '../../components/Logo';
import EmailAndPass from '../../components/EmailAndPass';


// eslint-disable-next-line no-unused-vars
class  SignUpScreen extends Component{

    state={
        email:'',
        password:'',
        error:'Login failed'
    }

    static navigationOption = {
        header: null,
      };
  
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
        width:300,
        backgroundColor:'rgba(255,255,255,.5)',
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
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        
    },
    buttonContainer:{
        backgroundColor:'#ffbf00',
        padding:13,
        borderRadius:8,
        width:'50%',
        alignSelf:'center',
        margin:20,
        padding:10,
        
    }

  });
  
  export default SignUpScreen;
