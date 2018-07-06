import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/loginForm.js';

class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp ({
                apiKey: "AIzaSyCUU6Lwu6TO7tF3Ss_w3Rg4E2LeVHcnc-M",
                authDomain: "react-native-project-auth.firebaseapp.com",
                databaseURL: "https://react-native-project-auth.firebaseio.com",
                projectId: "react-native-project-auth",
                storageBucket: "react-native-project-auth.appspot.com",
                messagingSenderId: "630596402072"
        });
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true })
            }
            else {
                this.setState({ loggedIn: false })
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                 return (
                     <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                             Log out 
                        </Button>  
                     </CardSection>  
                 );
            case false:
                return <LoginForm />;
            default:
                return ( 
                    <CardSection>
                      <Spinner size="large" />
                    </CardSection>
                 );
        }
    }

    render () {
        return (
            <View>
                <Header headerText="authentication" />
                {this.renderContent()}
            </View>
        );
    }
}
export default App;
