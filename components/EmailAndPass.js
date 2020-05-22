/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React , {Component} from 'react';
import {View, Text,StyleSheet, TextInput,TouchableOpacity} from 'react-native';


class  EmailAndPass extends Component{

    state={
        email:'',
        password:'',
        error:'Login failed'
    }

    render(){

      return (

        <View style={styles.container}>
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

             <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigate('Home')}>
                 <Text style={styles.button}>Login</Text>
             </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.errorText}>
                    {this.state.error}
                </Text>
            </TouchableOpacity>

        </View>
    );

    }
  }


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20

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
        fontSize:20
    },
    buttonContainer:{
        backgroundColor:'#383B98',
        padding:13,
        borderRadius:8,
        width:'60%',
        alignSelf:'center',
        marginTop:35
    }
});


export default EmailAndPass;
