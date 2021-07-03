import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: theme.colors.cardBackground,
        borderRadius: 4,
        marginBottom: 20,
        paddingHorizontal: 20
    },
    imageProfile: {
        width: 42,
        height: 42,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D1D1D1',
        borderRadius: 21,
    },
    textName: {
        color: theme.colors.textName
    },
    textDescription: {
        color: theme.colors.textDescription
    },
});