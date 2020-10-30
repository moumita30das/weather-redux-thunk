import React, { Component } from 'react';
import {StyleSheet,View,ImageBackground,Image} from 'react-native';

var backgroundImage=require('../assets/weather-bg1.png');
export default class Splash extends Component {

    constructor(props){
        super(props);
        setTimeout(()=>{
            this.props.navigation.navigate("Login");
        },5000);
    }
    render() {
        return (
           <ImageBackground source={backgroundImage} style={{height:'100%', width:'100%'}}/> 
        );
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