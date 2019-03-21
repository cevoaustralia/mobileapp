/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';
import {Button} from 'react-native-elements';

const radius = 80;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const buttonAction = Platform.select({
  ios: 'iOS Main Action',
  android: 'Androind Main Action',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.welcome}>Your fancy stuff here.</Text>
          </View>
          <View style={styles.middle}>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
          </View>
          <View style={styles.bottom}>
            <Button buttonStyle={styles.buttonStyle} title={buttonAction} onPress={() => {Alert.alert("You Pressed Me.", "Why did you Press ME!")}}> </Button>
            <Text style={styles.instructionsBottom}>{instructions}</Text>
            <Text style={styles.instructionsBottom}>Non-Important Action</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
    flex:3,
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
    justifyContent:'space-between',
  }
});
