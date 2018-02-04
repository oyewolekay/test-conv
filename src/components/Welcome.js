import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Images from '@assets/images';
import Color from '../config/Colors';
import Font from '../config/Fonts';

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
    return (
        <LinearGradient
            style={styles.body}
            colors={[Color.bgColor1, Color.bgColor2]}
            start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
        >
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.container}>
                <Image
                    source={Images.conversePatternWhite}
                    style={styles.image}
                />
            </View>
            <View style={styles.bottomBlock}>
                <Text style={styles.button}>Start</Text>
                <View style={styles.linkBlock}>
                    <Text style={styles.link}>Create an Account</Text>
                    <Text style={[styles.link, { marginHorizontal: 8 }]}>|</Text>
                    <Text style={styles.link}>Join with LinkedIn</Text>
                </View>
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
        width: width,
    },
    bottomBlock: {
        alignItems: 'center',
        paddingVertical: 30,
    },
    linkBlock: {
        marginTop: 30, 
        flexDirection: 'row',
        justifyContent: 'center',
    },
    link: {
        color: Color.linkColor,
        fontSize: Font.primary,
    },
    button: {
        color: Color.primaryBlue, 
        backgroundColor: Color.linkColor,
        borderRadius: 55,
        paddingVertical: 6,
        width: 110,
        textAlign: 'center',
        fontSize: Font.primary,
    }
})

export default SplashScreen;