import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: theme.colors.inputBackground,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 32 ,
        height: 32,
        borderRadius: 4,
        paddingHorizontal: 10
    },
    icon: {
        marginRight: 8
    },
    textInput: {
        height: 22,
        width: "100%",
        fontSize: 15,
        color: "#D1D1D1"
    }
})