/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from "react-native";
import {Button} from "react-native-elements";

const radius = 90;

const buttonAction = Platform.select({
    ios: 'iOS Main Action',
    android: 'Android Main Action',
});

type Props = {};
export default class HomeScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#070707',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.welcome}>Your fancy stuff here.</Text>
                </View>
                <View style={styles.middle}>
                </View>
                <View style={styles.bottom}>
                    <Button buttonStyle={styles.buttonStyle} title={buttonAction} titleStyle={styles.ttlStyle} onPress={()=> this.props.navigation.navigate('Login')}> </Button>
                    <Text style={styles.instructionsBottom}>Non-Important Action</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ttlStyle:{
        color: '#070707',
    },
    buttonStyle: {
        borderRadius: 3,
        backgroundColor: '#FBA6BF',
    },
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#070707',
    },
    middle:{
        flex:1,
        justifyContent: 'center',
        width: radius * 2,
        height: radius * 2,
        borderRadius: radius,
        borderStyle: 'solid',
        borderWidth: 4,
        borderColor: '#FBA6BF',
    },
    top:{
        alignItems: 'center',
        justifyContent: 'center',
        flex:2,
    },
    bottom:{
        flex:1,
        justifyContent: 'flex-start',
        marginTop:55,
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF',
        lineHeight: 43,
        letterSpacing: -0.08,
    },
    instructions: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    instructionsBottom: {
        flex:1,
        textAlign: 'center',
        color: '#FBA6BF',
        marginBottom: 5,
        marginTop: 30,
        justifyContent:'space-between',
    }
});