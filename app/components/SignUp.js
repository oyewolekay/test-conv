import React, { Component } from 'react';
import { View, Button, AsyncStorage } from 'react-native';

import styles from '../styles/index';

class SignUp extends Component {
    static navigationOptions = {
        title: 'Create Account',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign Up" onPress={this._signUpAsync} />
                <Button title="Sign In" onPress={this._showSignIn} />
            </View>
        );
    }

    _signUpAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };

    _showSignIn = () => {
        this.props.navigation.goBack();
    };
}

export default SignUp;