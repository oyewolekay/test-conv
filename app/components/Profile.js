import React from 'react';
import { ActivityIndicator, AsyncStorage, Button, StatusBar, StyleSheet, View, } from 'react-native';

import styles from '../styles/index';

class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profile',
        drawerLabel: 'Profile',
    };
  
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="default" />
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
            </View>
        );
    }
  
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

export default Profile;