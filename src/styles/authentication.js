import { StyleSheet, Dimensions, Platform } from 'react-native';
import resolveAssetSource from 'resolveAssetSource';

import Images from '@assets/images';
import Font from '../config/Fonts';
import Color from '../config/Colors';

const { width, height } = Dimensions.get('window');
const imageRect = resolveAssetSource(Images.conversePatternWhite);
const aspectRatio = width / imageRect.width;
const newHeight = aspectRatio * imageRect.height;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: Color.white,
    },
    header: {
        height: 300,
        paddingBottom: 60,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width,
        resizeMode: 'contain'
    },
    content: {
        marginTop: -60,
        zIndex: 1000,
        backgroundColor: Color.white,
        marginHorizontal: 32,
        borderRadius: 8,
        marginBottom: 32,
        padding: 20,
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: Color.gradientColor,
                shadowOffset: { width: 0, height: 13 }, 
                shadowOpacity: 0.3,
                shadowRadius: 6
            },
            android: {
                elevation: 3
            }
        }),
    },
    h3: {
        color: Color.blue, 
        fontWeight: 'bold', 
        fontSize: Font.primary
    },
    formBlock: {
        marginTop: 12,
    }
});

export { styles };