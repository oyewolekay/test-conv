import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Images from '@assets/images';
import Color from '../config/Colors';
import { styles } from '../styles/authentication';

class SignUp extends Component {
    render() {
        return (
            <View style={styles.body}>
                <StatusBar translucent backgroundColor={'transparent'} />
                <LinearGradient
                    style={styles.header}
                    colors={[Color.bgColor1, Color.bgColor2]}
                    start={{x: 0.0, y: 0.15}} end={{x: 0.2, y: 1.0}}
                >
                    <View style={styles.container}>
                        <Image
                            source={Images.conversePatternOpaque}
                            style={styles.image}
                        />
                    </View>
                </LinearGradient>
                <View style={styles.content}>
                    <Text style={styles.h3}>Sign Up</Text>
                    <View style={styles.formBlock}>
                        <Text>Form</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default SignUp;