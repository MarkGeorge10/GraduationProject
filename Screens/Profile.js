/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, SafeAreaView, Button } from 'react-native';
import { Title } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class Profile extends Component {



    state = {
        email: '',
        name: '',
        phone:'',
        address:'',
        editname: false,
        editemail: false,
        editadress:false,
        editphone:false,
        blur: true,
        profiledata: {
            name: 'Nada',
            email: 'Nada@gmail',
            phone:'1222222222222',
            adress:'eeeeeeeee',
        },
    }
//el func el3adia msh btstna action bt7sl 3la tol
// arow btstna el action

nada (){

alert('hi');

}
//btnfz awl 7aga fe elscreen
//ro7 hat el7aga ally fe eldatabase
    componentDidMount() {

        this.setemail(this.state.profiledata.email);
        this.setname(this.state.profiledata.name);
        this.setadress(this.state.profiledata.adress);
        this.setphone(this.state.profiledata.phone);
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

    clickhandler = () => {
      //send data to backend
        console.log('Before',this.state.profiledata);
  //maynf3sh state equal state

  let data=this.state.profiledata;
  data.name=this.state.name;
  data.email=this.state.email;
  data.phone=this.state.phone;
  data.adress=this.state.adress;
//arg3 llprofile 7agtha

//callback
this.setState({

profiledata:data,
editname: false,
editemail: false,
editphone: false,
editadress: false,


},
()=>{
    console.log('After',this.state.profiledata);

}
);


    }



    render() {

        return (
            <SafeAreaView>
                <ScrollView  keyboardShouldPersistTaps={'handled'}>
                    <View style={styles.container}>


                        <View style={{backgroundColor:'#1F456E',flexDirection:'row',borderBottomRightRadius:20,borderBottomLeftRadius:20,marginBottom:5,height:200}}>
                            <Image
                                style={{ width: 140, height: 140,  borderRadius: 140 / 2,alignSelf:'center',margin:10 }}

                                source={require('../img/aaa.jpg')}

                            />


                       <View style={{flexDirection:'column',alignSelf:'center',marginLeft:15}}>
                         <View >
                            <Title style={{ fontSize: 22,color:'white' }}>Textile Company </Title>
                            </View>

                            <View>
                                <Text style={{fontSize: 16,color:'white'}}> Nada Mohamed</Text>
                                </View>
                                </View>
                            </View>




                        <View style={styles.card}>
                            <Text style={{ justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }}>Company Name:</Text>

                            <TextInput
                                placeholder="Company Name:"
                                value={this.state.name}
                                onChangeText={name => this.setname(name)}
                                
                                editable={this.state.editname}



                            />

                            <TouchableOpacity onPress={() => this.setState({ editname: !this.state.editname })} style={styles.editbutton}>
                                    <MaterialIcons name={'edit'} size={20} color={'black'} />
                             </TouchableOpacity>




                        </View>


                        <View style={styles.card}>
                            <Text style={{ justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }}>Company Email:</Text>

                            <TextInput
                                placeholder="CompanyEmail"
                                value={this.state.email}
                                onChangeText={email => this.setemail(email)}
                                
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
                               
                                editable={this.state.editadress}




                            />
                            <TouchableOpacity
                                style={styles.editbutton}
                                onPress={() => this.setState({ editadress: !this.state.editadress })}
                             ><MaterialIcons name={'edit'} size={20} color={'black'} /></TouchableOpacity>



                        </View>






                        <View style={styles.card}>
                            <Text style={{ justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center' }}>Company Phone:</Text>

                            <TextInput
                                placeholder="CompanyPhone"
                                value={this.state.phone}
                                onChangeText={phone => this.setphone(phone)}
                                
                                editable={this.state.editphone}




                            />
                            <TouchableOpacity
                                style={styles.editbutton}
                                onPress={() => this.setState({ editphone: !this.state.editphone })}
                             ><MaterialIcons name={'edit'} size={20} color={'black'} /></TouchableOpacity>



                        </View>

                        <View style={{}}>

                        <TouchableOpacity style={styles.buttonContainer} onPress={this.clickhandler}>
                            <Text style={{textAlign:'center',fontSize:20,color:'#fff'}}>Save changes</Text>
                        </TouchableOpacity>

                           
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );

    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,

        


    },
    card: {
        margin: 10,
        width: '100%',
        height: "8%",
        alignSelf:'flex-start',
        justifyContent:'space-around',
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    editbutton: {
        alignSelf: 'center',
       },

       buttonContainer:{
        backgroundColor:'#ffbf00',
        padding:8,
        borderRadius:25,
        width:'40%',
        alignSelf:'center',
        margin:25,
        
        
    },

});

export default Profile;
