import { StyleSheet } from 'react-native';

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from '../../global/styles/theme';

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
    },
    labelBusca: {
        width: '100%',
        marginTop: 27,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.borderBottom,
        paddingBottom: 8,
        marginBottom: 20
    },
    textLabel1: {
        color: theme.colors.labelLight,
        fontWeight: '600'
    },
    textLabel2: {
        color: theme.colors.labelBold,
        fontWeight: 'bold'
    },
});