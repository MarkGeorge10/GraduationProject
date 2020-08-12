/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, SafeAreaView, Button, Alert } from 'react-native';
import { Title } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { add } from 'lodash';



class Profile extends Component {

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        };
    };
    onEdit() {
        var fullname = this.state.name;
        var Address = this.state.adress;
        var email = this.state.email;
        var password = this.state.password;
        var phone = this.state.phone;
        var img = this.state.image;
        // if validation fails, value will be null
        fetch('https://mosaic-test-api.herokuapp.com/users/' + User.user_id + '/edit', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'fullname': fullname,
                'email': email,
                'phone': phone,
                'Address': Address,
                'password': password,
                "image_path": img
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.error != null) {
                    Alert.alert(JSON.stringify(responseData.error))


                }
                else {
                    User = responseData;
                    Alert.alert("Updated!")


                }

            }).catch();


    }

    state = {
        image: User.image_path,

        email: '',
        name: '',
        phone: '',
        address: '',
        editname: false,
        editemail: false,
        editadress: false,
        editpassword: false,
        editphone: false,
        blur: true,
        profiledata: {
            name: User.fullname,
            email: User.email,
            phone: User.phone,
            adress: User.Address,
            password: "password"
        },
    }
    //el func el3adia msh btstna action bt7sl 3la tol
    // arow btstna el action

    nada() {

        alert('hi');

    }
    //btnfz awl 7aga fe elscreen
    //ro7 hat el7aga ally fe eldatabase
    componentDidMount() {

        this.setemail(this.state.profiledata.email);
        this.setname(this.state.profiledata.name);
        this.setadress(this.state.profiledata.adress);
        this.setphone(this.state.profiledata.phone);
        this.setpassword(this.state.profiledata.password);

    }
    //change state local
    setemail = (email) => {
        this.setState({ email: email });
    }
    setname = (name) => {
        this.setState({ name: name });
    }
    setphone = (phone) => {
        this.setState({ phone: phone });
    }
    setadress = (adress) => {
        this.setState({ adress: adress });
    }
    setpassword = (password) => {
        this.setState({ password: password });
    }

    clickhandler = () => {
        Alert.alert("Successfully updated!")
      

        let data = this.state.profiledata;
        data.name = this.state.name;
        data.email = this.state.email;
        data.phone = this.state.phone;
        data.adress = this.state.adress;
        data.password = this.state.password;

        //arg3 llprofile 7agtha

        //callback
        this.setState({

            profiledata: data,
            editname: false,
            editemail: false,
            editphone: false,
            editadress: false,
            editpassword: false

        },
            () => {
                console.log('After', this.state.profiledata);

            }
        );


    }

    render() {
       

        return (
                <ScrollView keyboardShouldPersistTaps={'handled'}>
                    <View style={styles.container}>


                        <View style={{ backgroundColor: '#1F456E', flexDirection: 'row', borderBottomRightRadius: 20, borderBottomLeftRadius: 20, marginBottom: 15, height: 200 }}>

                            <Image onPress={this._pickImage}
                                style={{ width: 140, height: 140, borderRadius: 140 / 2, alignSelf: 'center', margin: 10 }}

                                source={{ uri: this.state.image }} />



                            <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: 15 }}>
                                <View >
                                    <Title style={{ fontSize: 22, color: 'white' }}>{User.fullname}</Title>

                                </View>


                            </View>
                            <TouchableOpacity onPress={this._pickImage} style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: 5 }}>
                                <MaterialIcons name="edit" size={20} color="black" />
                            </TouchableOpacity>
                        </View>





                        <View style={styles.card}>
                            <Text style={{ justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }}>Company Name:</Text>

                            <TextInput
                                placeholder="Company Name:"
                                value={this.state.name}
                                onChangeText={name => this.setname(name)}
                                multiline
                                width="40%"
                                editable={this.state.editname}





                            />

                            <TouchableOpacity onPress={() => this.setState({ editname: !this.state.editname })} style={styles.editbutton}>
                                <MaterialIcons name="edit" size={20} color="black" />
                            </TouchableOpacity>




                        </View>


                        <View style={styles.card}>
                            <Text style={{ justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }}>Company Email:</Text>

                            <TextInput
                                placeholder="CompanyEmail"
                                value={this.state.email}
                                onChangeText={email => this.setemail(email)}
                                multiline
                                width="40%"
                                editable={this.state.editemail}






                            />
                            <TouchableOpacity style={styles.editbutton} onPress={() => this.setState({ editemail: !this.state.editemail })}>
                                <MaterialIcons name={'edit'} size={20} color={'black'} />
                            </TouchableOpacity>



                        </View>

                        <View style={styles.card}>
                            <Text style={{ justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }}>Company Address:</Text>

                            <TextInput
                                placeholder="CompanyAdress"
                                value={this.state.adress}
                                onChangeText={adress => this.setadress(adress)}
                                multiline
                                width="40%"

                                editable={this.state.editadress}





                            />
                            <TouchableOpacity
                                style={styles.editbutton}
                                onPress={() => this.setState({ editadress: !this.state.editadress })}
                            ><MaterialIcons name={'edit'} size={20} color={'black'} /></TouchableOpacity>



                        </View>
                        <View style={styles.card}>
                            <Text style={{ justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }}>Password:</Text>

                            <TextInput
                                placeholder="Password"
                                value={this.state.password}
                                onChangeText={password => this.setpassword(password)}
                                width="40%"
                                secureTextEntry={true}

                                editable={this.state.editpassword}





                            />
                            <TouchableOpacity
                                style={styles.editbutton}
                                onPress={() => this.setState({ editpassword: !this.state.editpassword })}
                            ><MaterialIcons name={'edit'} size={20} color={'black'} /></TouchableOpacity>



                        </View>





                        <View style={styles.card}>
                            <Text style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center' }}>Company Phone:</Text>

                            <TextInput
                                placeholder="CompanyPhone"
                                value={this.state.phone}
                                onChangeText={phone => this.setphone(phone)}
                                width="40%"
                                editable={this.state.editphone}




                            />
                            <TouchableOpacity
                                style={styles.editbutton}
                                onPress={() => this.setState({ editphone: !this.state.editphone })}
                            ><MaterialIcons name={'edit'} size={20} color={'black'} /></TouchableOpacity>



                        </View>


                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onEdit()}>
                            <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }} >Save changes</Text>
                        </TouchableOpacity>




                    </View>

                </ScrollView>
        );

    }
}



const styles = StyleSheet.create({
    container: {
         //borderWidth: 2,
        flex: 1,
        height: '100%'


    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderBottomWidth: 1,
        borderBottomColor: '#9a9a9c',
        padding: 4,
        margin: 10,
        width: '85%',
        height: "6%",
        alignSelf: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderRadius: 5,


    },
    editbutton: {
        alignSelf: 'center',
    },

    buttonContainer: {
        backgroundColor: '#ffbf00',
        padding: 8,
        borderRadius: 25,
        width: '40%',
        alignSelf: 'center',
        marginBottom: 90,
        marginTop: 30,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },

    },

});

export default Profile;
