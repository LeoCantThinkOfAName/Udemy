import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {
        loggedIn: null
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDnFakhfPv5b5rZiMWP8PXEMjvzUn9IRIg',
            authDomain: 'auth-83531.firebaseapp.com',
            databaseURL: 'https://auth-83531.firebaseio.com',
            projectId: 'auth-83531',
            storageBucket: 'auth-83531.appspot.com',
            messagingSenderId: '1010934994584'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false});
            }
        });
    };

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
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

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                { this.renderContent() }
            </View>
        );
    }
}

export default App;
