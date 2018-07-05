import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/loginForm.js';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp ({
                apiKey: "AIzaSyCUU6Lwu6TO7tF3Ss_w3Rg4E2LeVHcnc-M",
                authDomain: "react-native-project-auth.firebaseapp.com",
                databaseURL: "https://react-native-project-auth.firebaseio.com",
                projectId: "react-native-project-auth",
                storageBucket: "react-native-project-auth.appspot.com",
                messagingSenderId: "630596402072"
        });
    }
    render () {
        return (
            <View>
                <Header headerText="authintication" />
                <LoginForm/>
            </View>
        );
    }
}
export default App;
