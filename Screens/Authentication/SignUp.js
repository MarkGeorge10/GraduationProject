/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Dimensions, ScrollView, Text, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator, Button, Alert } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Logo from '../../components/Logo';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';




// eslint-disable-next-line no-unused-vars
class SignUpScreen extends Component {

    state = {
        error: null,
        image: null
    };
    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result });
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        };
    };
    componentDidMount() { }

    componentWillUnmount() { }

    onSignupPress() {
        var fullname = this.state.fullname;
        var Address = this.state.Address;
        var email = this.state.email;
        var password = this.state.password;
        var conpassword = this.state.conpassword;
        var phone = this.state.phone;
        var err = this.state.error;
        if (this.state.image) {
            var image = this.state.image.uri;
        }
        else {
            var image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
        }
        console.log("HELLO");
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            Alert.alert("Email is incorrect");
        }
        else {
            if (password == conpassword && email && password && fullname && phone) {
                fetch('https://mosaic-test-api.herokuapp.com/users/signup', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'fullname': fullname,
                        'email': email,
                        'password': password,
                        'verifyPassword': conpassword,
                        'phone': phone,
                        'Address': Address,
                        "image_path": image,

                    }),
                })
                    .then((response) => response.json())
                    .then((responseData) => {
               
                        Alert.alert("New company is created");
                    }).catch(() => { Alert.alert("nonono")                  }  );
            }
            else {
                this.setState({
                    err: "password dosen't match"
                })
                Alert.alert("Missing data");
            }
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
    handlePhone = (text) => {
        this.setState({ phone: text });
    };
    handlePassword = (text) => {
        this.setState({ password: text });
    };
    handleConfirmPassword = (text) => {
        this.setState({ conpassword: text });
    };


    render() {
        const { image } = this.state

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

                        <Text style={{ color: "red" }}>{this.state.error === null ? "" : this.state.error}</Text>


                        <TextInput
                            placeholderTextColor="#9a9a9c"
                            style={styles.input}
                            placeholder="Company Name"
                            onChangeText={this.handleFullName}
                            multiline
                        />





                        <TextInput
                            placeholderTextColor="#9a9a9c"
                            style={styles.input}
                            placeholder="Company Email"
                            keyboardType='email-address'

                            onChangeText={this.handleEmail}
                        />



                        <TextInput
                            placeholderTextColor="#9a9a9c"
                            style={styles.input}
                            placeholder="Company Address"
                            onChangeText={this.handleAddress}
                        />


                        <TextInput
                            placeholderTextColor="#9a9a9c"
                            style={styles.input}
                            placeholder="Company Phone"
                            onChangeText={this.handlePhone}
                            keyboardType='phone-pad'
                        />

                        <TextInput
                            placeholderTextColor="#9a9a9c"
                            style={styles.input}
                            placeholder="Company Password"
                            secureTextEntry={true}
                            onChangeText={this.handlePassword}
                        />
                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor="#9a9a9c"
                            style={styles.input}
                            secureTextEntry={true}

                            onChangeText={this.handleConfirmPassword}


                        />



                        {image && <Image resizeMode="contain" source={{ uri: image.uri }} style={styles.img} />}
                        <TouchableOpacity style={styles.buttonimg} onPress={this._pickImage}>
                            <Ionicons
                                name={"md-image"}
                                style={styles.icon3}
                            ></Ionicons>
                        </TouchableOpacity>




                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onSignupPress()}>
                            <Text style={styles.button}>Sign up</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        );

    }
};

const sWidth = Dimensions.get('window').width;
const sHeight = Dimensions.get('window').height;
const ratio = sWidth / sHeight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',


    }, icon3: {
        color: "rgba(33,51,61,1)",
        fontSize: 25,
        alignSelf: "center",
        padding: 12,
        backgroundColor: '#e3e3e3',
        borderRadius: 20
    }, img: {
        flex: 1,
        //   borderRadius: 25,
        width: '40%',
        alignSelf: 'center',
        margin: 20,
        padding: 8,
        height: 100,

    },
    rowbuttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '20%',

    },
    buttonimg: {
        backgroundColor: '#e3e3e3',
        borderRadius: 25,
        //  width: '20%',
        alignSelf: 'center',
        //margin: 20,
        //padding: 8,
        flex: 1

    }
    , subcontainer: {
        width: sWidth,
        //height: sHeight,
        alignSelf: "center",

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
    containeremailAndPass: {
        flex: 3,
        padding: 20,
        alignItems: "center"


    },


    emailAndPass: {
        flex: 2
    },
    input: {
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.4)',
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
        color: '#fff',
        //fontWeight:'bold',
        fontSize: 20,
        color: 'black',
        //  fontFamily: "arial",
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },

    },
    txt: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 15,
    },
    buttonContainer: {
        backgroundColor: '#ffbf00',
        padding: 13,
        borderRadius: 8,
        width: '50%',
        alignSelf: 'center',
        margin: 20,
        padding: 10,
        // borderWidth:1,
        borderRadius: 12,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },

    },
    buttonContainer3: {
        //backgroundColor:'#ffbf00',

        // borderRadius:8,
        width: "90%",
        alignSelf: 'center',
        padding: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 12,

    }

});

export default SignUpScreen;
