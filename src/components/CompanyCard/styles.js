import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        width: '100%',
        height: 100
    },
    logoContainer:{
        width: '30%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D9D9D9"
    },
    infoContainer:{
        width: '70%',
        marginLeft: 10
    },
    textNameCompany:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 7
    },
    ramoContainer:{
        borderWidth: 1,
        width: 150,
        borderRadius: 15,
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    textRamo:{
        fontSize: 15
    },
    textInfos:{
        fontSize: 15
    }
})