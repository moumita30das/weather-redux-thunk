import React, { Component } from 'react';
import {StyleSheet,View,ImageBackground,Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

var backgroundImage=require('../assets/weather-bg1.png');
export default class Splash extends Component {

    constructor(props){
        super(props);
        this.saveData();
        setTimeout(()=>{
            this.props.navigation.navigate("Login");
        },5000);
    }
    render() {
        return (
           <ImageBackground source={backgroundImage} style={{height:'100%', width:'100%'}}/> 
        );
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
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },

});