/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

const loginStyles = StyleSheet.create({
    tempo: {
        flex: 1,
        backgroundColor: '#070707',
    },
    temptText: {
        color: '#FF7A64',
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

    render() {
        return <View style={loginStyles.tempo}><Text style={loginStyles.temptText}>Hi! You clicked a button and its now on a new Screen!</Text></View>
    }
}