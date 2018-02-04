import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Dimensions, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Images from '@assets/images';
import Color from '../config/Colors';

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
    return (
        <LinearGradient
            style={styles.body}
            colors={[Color.bgColor1, Color.bgColor2]}
            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
        >
            <StatusBar hidden />
            <View style={styles.container}>
                <Image 
                    source={Images.logoPatternWhite}
                    style={styles.image}
                />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'contain',
        width: (width - 2),
    },
}); 

export default SplashScreen;