import React, { Component } from 'react';
import { View, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native';

import styles from '../styles/index';

class AuthLoading extends Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="default" />
                <ActivityIndicator />
            </View>
        );
    }
}

export default AuthLoading;