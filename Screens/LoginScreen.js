/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Button, Alert, Animated } from 'react-native';
//import CurvedView from '../../components/curvedView';
import Logo from '../../components/Logo';
import { LinearGradient } from "expo-linear-gradient";

// eslint-disable-next-line no-unused-vars
class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleEmail = (text) => {
        this.setState({ email: text });
    };

    handlePassword = (text) => {
        this.setState({ password: text });
    };
    componentDidMount() { }

    componentWillUnmount() { }

    onLoginPress() {
        var email = this.state.email;
        var password = this.state.password;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            Alert.alert("Email is incorrect");
        }
        else {
            if (email && password) {
                // if validation fails, value will be null
                fetch('https://mosaic-test-api.herokuapp.com/users/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        credential: {
                            'email': email,
                            'password': password,
                        },
                    }),
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        if (responseData.error != null) {
                    //       this.props.navigate('MainApp') //// till we fi

                            Alert.alert("Your Email or password is incorrect");
                        }
                        else {
                            this.props.navigate('MainApp')
                        }

                    }).catch(() => { });
            }
        }
    }



    render() {

        return (

            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0,0,0,0.5)', 'transparent']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 370,
                    }}
                />


                <View style={styles.subcontainer}>
                    <View style={styles.top_background}>
                        <View style={styles.top_content}>

                            <Text style={styles.text2}>MOSAIC</Text>

                            <Logo />
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.emailAndPass}>

                    <View style={styles.containeremailAndPass}>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#9a9a9c"
                            style={styles.input}
                            keyboardType='email-address'
                            onChangeText={this.handleEmail}
                        />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#9a9a9c"
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={this.handlePassword}
                        />






                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onLoginPress()}>
                            <Text style={styles.button}>Login</Text>
                        </TouchableOpacity>





                        <TouchableOpacity style={styles.buttonContainer3} onPress={() => this.props.navigate('SignUpScreen')}>
                            <Text style={styles.button}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );

    }
};

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const sWidth = Dimensions.get('window').width;
const sHeight = Dimensions.get('window').height;
const ratio = sWidth / sHeight;

const styles = StyleSheet.create({

    errorMessage: {

        height: 40,
        alignItems: 'center',
        justifyContent: "center",
        marginHorizontal: 30

    },

    subcontainer: {
        width: sWidth,
        //height: sHeight,

        //   backgroundColor: '#f2eeee',
        marginBottom: 30
    },
    top_background: {
        width: sHeight * 2,
        height: sHeight * 2,
        borderRadius: sHeight * 1,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        // backgroundColor: '#f5f2f2',
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
        marginTop: sHeight * 0.06,
        marginBottom: sHeight * 0.08,
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',

    },
    container: {
        //backgroundColor: '#f2eeee',
        flex: 1,
        justifyContent: 'center',



    },
    containeremailAndPass: {
        //   borderWidth:2,
        flex: 3,
        padding: 20,
        alignItems: "center"


    },
    rowbuttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',


    },


    emailAndPass: {
        marginTop: 60,
        flex: 2

    },
    input: {
        height: 40,
        width: 300,
        backgroundColor:'rgba(255,255,255,0.4)',
        borderBottomWidth: 1,
        borderBottomColor: '#9a9a9c',
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 5,
        fontSize: 15
    },
    errorText: {
        fontSize: 25,
        color: 'red',
        alignSelf: 'center',
        marginTop: 45,
        fontWeight: 'bold'
    },
    button: {
        textAlign: 'center',
        //color:'#fff',

        fontSize: 20,

    },
    buttonContainer: {
        backgroundColor: '#ffbf00',
        padding: 13,
        borderRadius: 18,
        width: '50%',
        alignSelf: 'center',
        margin: 20,
        padding: 10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },

    },
    buttonContainer2: {
        //backgroundColor:'#ffbf00',

        // borderRadius:8,
        width: sWidth / 1.8,
        alignSelf: 'center',
        margin: 20,
        paddingRight: 5,
        borderLeftWidth: 1,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },

    },
    buttonContainer3: {
        backgroundColor: '#fff',

        // borderRadius:8,
        width: "60%",
        alignSelf: 'center',
        padding: 15,
        borderColor: 'black',
        // borderWidth:1,
        borderRadius: 12,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
    }

});

export default LoginScreen;
