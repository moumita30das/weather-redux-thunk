import React, { Component } from 'react';
import { Alert, Button } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, View, Text, Image, TextInput, TouchableHighlight } from 'react-native';
import { checkLogin } from '../actions/action';
import { bindActionCreators } from 'redux';
import configureStore from '../store/configureStore'
import { LOGIN_CLICK } from '../constants';


var logoImage = require("../assets/logo-w.png")
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            inputUsername: "",
            inputPassword: "",
            isLoggedIn: false,
            zipCode:''
        }

        console.log("constructor");
        this.saveData();
    }
    shouldComponentUpdate(nextProps) {
        if (nextProps.isLoggedIn){
            this.props.navigation.navigate("WeatherReportList");
        }
        return true;
    }
    componentDidMount = () => {
        console.log("did mount");
        AsyncStorage.getItem('userId').then((value) => this.setState({ 'userName': value }));
        AsyncStorage.getItem('password').then((value) => this.setState({ 'password': value }));
    }
    saveData = async () => {
        let userId = "moumita";
        let password = "password";
        console.log("save data");
        try {
            await AsyncStorage.setItem('userId', userId);
            await AsyncStorage.setItem('password', password);
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }
    handleZipCode = (text) => {
        this.setState({ zipCode: text })
     }
    formValidate = async () => {
        const { inputUsername, inputPassword, isLoggedIn } = this.state;
        let myusername = this.state.userName;
        let mypassword = this.state.password;
        let zipCode = this.state.zipCode;
        if (inputUsername == "" && inputPassword == "") {
            Alert.alert('Plese fill the Username and Password');
        }
        else if (inputUsername == myusername && inputPassword == mypassword) {
            if (zipCode.length == 6){
                AsyncStorage.setItem('zipCode', zipCode);
                this.props.checkLogin(isLoggedIn);
                Alert.alert('Success!');
            } else {
                Alert.alert('Please provide valid zip code');
            }
            
        } else {
            Alert.alert('Incorrect credential');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.mainbody}>
                        <Image source={logoImage} style={styles.imgLogin} />
                    </View>

                    <View style={{ marginBottom: 16 }}>
                        <Text style={styles.lablelUser}>
                            Username
                  </Text>
                        <TextInput style={styles.inputUser} autoCapitalize="none" onChangeText={inputUsername => this.setState({ inputUsername })}></TextInput>
                        {/* <Item reguar style={styles.inputUser}>
                      <Input autoCapitalize="none" style={{color: "#8392E0"}}></Input>
                  </Item> */}
                    </View>

                    <View style={{ marginBottom: 16 }}>
                        <Text style={styles.lablelUser}>
                            Password
                  </Text>
                        <TextInput style={styles.inputUser} autoCapitalize="none" secureTextEntry={true} onChangeText={inputPassword => this.setState({ inputPassword })}></TextInput>
                        {/* <Item reguar style={styles.inputUser}>
                      <Input autoCapitalize="none" style={{color: "#8392E0"}}></Input>
                  </Item> */}
                    </View>
                    <View style={{ marginBottom: 16 }}>
                        <Text style={styles.lablelUser}>
                            Zip code
                  </Text>
                        <TextInput style={styles.inputUser} autoCapitalize="none" maxLength = {6} onChangeText={this.handleZipCode}></TextInput>
                        {/* <Item reguar style={styles.inputUser}>
                      <Input autoCapitalize="none" style={{color: "#8392E0"}}></Input>
                  </Item> */}
                    </View>
                    <View>
                        <TouchableHighlight
                            style={styles.btnSignin}
                            onPress={this.formValidate}
                            underlayColor='#fff'>
                            <Text style={styles.labelBtn}>Sign In</Text>
                        </TouchableHighlight>
                        {/* <Button  title="Sign In" color="#FFFFFF" borderRadius={8} >
                
             </Button> */}
                    </View>
                </View>


                {/* <Text style={styles.title}>Login screen</Text> */}
            </View>
        );
    }
}


const mapStateToProps = state => ({
    isLoggedIn: state.login.isLoggedIn,
});

export default connect(mapStateToProps,{ checkLogin })(Login);


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainbody: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30
    },
    imgLogin: {
        width: 300,
        height: 230,
        // alignItems: 'center',//
        // marginLeft: 60,
        //marginTop: 10,
        marginBottom: 40
    },
    lablelUser: {
        fontSize: 20,
        color: "#414E93",
        marginBottom: 8,
    },
    inputUser: {
        width: 300,
        height: 50,
        //marginLeft: 14,
        borderColor: "#43519D",
        backgroundColor: "#283786",
        borderRadius: 8,
        color: "#8392E0",
    },
    btnSignin: {
        width: 300,
        height: 50,
        //marginLeft: 14,
        marginTop: 0,
        borderRadius: 8,
        backgroundColor: "#50D9EA",
        color: "#FFFFFF",
        //paddingTop:10,
        /// paddingBottom:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelBtn: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        height: 30,
        width: 100,
        // backgroundColor: "red",
        marginTop: 0,
    },

});