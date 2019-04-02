/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-elements";
import {FloatingLabelInput} from '../components/FloatingLabelInput';
import Auth0 from 'react-native-auth0';
import TouchID from 'react-native-touch-id';

const auth0Domain = 'garble.auth0.garble';
const auth0ClientID = 'garblegarblegarblegarble';
const auth0 = new Auth0({domain: auth0Domain, clientId: auth0ClientID});

const loginStyles = StyleSheet.create({
    ttlStyle:{
        color: '#070707',
        textAlign: 'center',
    },
    buttonStyle: {
        borderRadius: 3,
        backgroundColor: '#FF7A64',
        alignItems: 'center',
    },
    tempo: {
        flex: 1,
        backgroundColor: '#070707',
        alignContent: 'center'
    },
    temptText: {
        color: '#FFFFFF',
        fontSize: 25,
        textAlign: 'center',
    },

    instructionContainer:{
        flex: 1,
        justifyContent: 'center',
    },
    userNameContainer:{
        flex: 1,
        justifyContent: 'center',
    },
    passwordContainer:{
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer:{
        flex: 2,
    },
});

function auth0Now(){
    //TODO: Auth0 does not support TouchID. Auth0 has deprecated biometrics from its kit of passwordless and has claimed that only Email and SMS code based login is secure enough for Passwordless login at the moment.
    //TODO: We need to come up with a way to properly build a solution of Biometrics with Login.
    //TODO: Possible Approach -- DO a device registration. Without Biometrics. Then during login --> Ask for Biometrics First time --> Then login --> then save this successful accessToken in a storage that can only be accessed by Biometrics --> Next Login ask for Biometrics --> use accessToken or do a refreshToken on this biomnetric pass, so it gives the feeling of a password less login.


    TouchID.authenticate('Login to your Account').then( success => {
            auth0.webAuth.authorize({scope: 'openid profile email', audience: `https://${auth0Domain}/userinfo`}).then(credentials => Alert.alert('here are the creds', credentials.toString())).catch(error => Alert.alert('It failed', error.toString()));
        }
    ).catch( error =>{
        Alert.alert("TouchID Wonky", error.toString());
    })

}

export default class LoginScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Action',
        headerStyle: {
            backgroundColor: '#FF7A64',
        },
        headerTintColor: '#070707',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    };

    state = {
        usernameValue: '',
        pwdValue: '',
    };

    handleUserTextChange = (newText) => this.setState({ usernameValue: newText });
    handleUserPwdChange = (newText) => this.setState({ pwdValue: newText });

    render() {
        return <View style={loginStyles.tempo}>
            <View style={loginStyles.instructionContainer} ><Text style={loginStyles.temptText}>If not authenticated --> Please Authenticate! </Text></View>
            <View style={loginStyles.userNameContainer}><FloatingLabelInput onChangeText={this.handleUserTextChange} value={this.state.usernameValue} style={loginStyles.textInput} textContentType="username" keyboardAppearance="dark" label="Challenge 1"> </FloatingLabelInput></View>
            <View style={loginStyles.passwordContainer}><FloatingLabelInput onChangeText={this.handleUserPwdChange} value={this.state.pwdValue} style={loginStyles.textInput} textContentType="password" secureTextEntry={true} keyboardAppearance="dark" label="Challenge 2"></FloatingLabelInput></View>
            <View style={loginStyles.buttonContainer}><Button buttonStyle={loginStyles.buttonStyle} title="Press Me!" titleStyle={loginStyles.ttlStyle} onPress={()=> auth0Now()}></Button></View>
        </View>
    }
}