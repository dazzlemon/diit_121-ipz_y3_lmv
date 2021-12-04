import colors from './colors';
import sizes from './sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderWidth: sizes.borderWidth,
        borderColor: colors.borderColor,
        borderRadius: sizes.borderRadius,
        height: sizes.height,
        backgroundColor: colors.itemBg,
        color: colors.itemFontColor,
        fontSize: 18,
        borderStyle: 'inset',
    },
    picker: {
        backgroundColor: colors.itemBg,
        borderColor: colors.borderColor,
        borderWidth: sizes.borderWidth,
        height: sizes.height,
        color: colors.itemFontColor,
        fontWeight: 'bold',
        borderRadius: sizes.borderRadius,
        borderStyle: 'inset',
    },
    box: {
        flexGrow: 0,
        padding: 25,
        backgroundColor: '#1e2124',
        borderRadius: 7,
    },
    textMain: {
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textInputTitle: {
        textTransform: 'uppercase',
        fontSize: 14,
        color: colors.itemFontColor,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    bg: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        position: 'absolute',
        inset: '0 0 0 0',// fullscreen
    },
    clickableText: {
        color: '#30b2fd',
    },
    tosText: {
        color: '#404040',
        fontSize: 12,
        marginTop: 15,
    },
    inBox: {
        padding: 7,
    },
    button: {
        borderRadius: sizes.borderRadius,
        backgroundColor: '#6665d2',
        height: sizes.height,
    },
    buttonText: {
        color: colors.white,
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',
    },
    clickableTextHover: {
        textDecorationLine: 'underline',
        cursor: 'pointer',
    },
    textInputError: {
        color : colors.errorRed,
    }
});

export default styles;