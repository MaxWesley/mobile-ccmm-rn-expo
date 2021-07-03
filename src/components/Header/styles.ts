import { StyleSheet } from 'react-native';

import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getStatusBarHeight() + 26,
    },
    textLogo: {
        fontWeight: 'bold',
        fontSize: 24,
        color: "#83868A",
    }
});