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
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    title:{
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttonContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center" 
    },
    button:{
        width: '30%'
    },
    textButton:{
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 10,
        fontWeight: "900"
    }
})