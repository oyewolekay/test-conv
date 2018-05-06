import React, { Component } from 'react';
import { View, AsyncStorage, Button } from 'react-native';

import styles from '../styles/index';

class Dashboard extends Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
        drawerLabel: 'Dashboard',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Show profile of the app" onPress={this._showProfile} />
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showProfile = () => {
        this.props.navigation.navigate('ProfileVw');
    };
    
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

export default Dashboard;