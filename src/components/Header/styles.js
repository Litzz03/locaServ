import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        height: '10%',
        width: '100%',
        backgroundColor: '#E42424',
        flexDirection: "row"
    },
    header:{
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    title:{
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonContainer:{
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center" 
    },
    button:{
        width: '30%',
        backgroundColor:"#E42424",
        alignItems: "center",
    },
    textButton:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 10,
        fontWeight: "900"
    },
    iconMenuHeader:{
        name: "Menu",
        size: 40,
        color: "white",
        backgroundColor:"#E42424"
    }
})