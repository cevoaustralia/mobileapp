/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {createAppContainer, createStackNavigator} from "react-navigation";

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
}, {
    initialRouteName: "Home",
    headerMode: "float",
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
    render() {
        return <AppContainer/>;
    }
}

