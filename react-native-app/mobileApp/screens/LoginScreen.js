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

const loginStyles = StyleSheet.create({
    ttlStyle:{
        color: '#070707',
    },
    buttonStyle: {
        borderRadius: 3,
        backgroundColor: '#FF7A64',
    },
    tempo: {
        flex: 1,
        backgroundColor: '#070707',
    },
    temptText: {
        color: '#FFFFFF',
        fontSize: 25,
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
            <View style={loginStyles.buttonContainer}><Button buttonStyle={loginStyles.buttonStyle} title="Press Me!" titleStyle={loginStyles.ttlStyle} onPress={()=> Alert.alert("Button has been pressed", "Really its been pressed")}></Button></View>
        </View>
    }
}