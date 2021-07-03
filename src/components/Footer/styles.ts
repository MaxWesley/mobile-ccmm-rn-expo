import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18
    },
    textDev: {
        color: theme.colors.textDescription,
        fontWeight: '600'
    },
    textName: {
        color: theme.colors.textName,
        fontWeight: '800'
    }
});