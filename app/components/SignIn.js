import React, { Component } from 'react';
import { View, Button, AsyncStorage } from 'react-native';

import styles from '../styles/index';

class SignIn extends Component {
    static navigationOptions = {
        title: 'Sign In',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign In" onPress={this._signInAsync} />
                <Button title="Sign Up" onPress={this._showSignUp} />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    _showSignUp = () => {
        this.props.navigation.navigate('SignUpVw');
    };
}

export default SignIn;