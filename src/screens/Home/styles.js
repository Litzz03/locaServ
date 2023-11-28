import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    containerMap:{
        flex:1
    },
    map:{
        flex: 1
    },
    menu:{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        paddingLeft:12,
        paddingTop:20,
        
    },
    textMenu:{
        fontWeight:'bold',
        backgroundColor:'white',
        width: 90,
        height: 30,
        textAlign:'center',
        borderRadius: 10,
        fontSize:20,
        borderWidth: 1
    },
    abaMenu:{
        justifyContent: 'center', 
        alignItems: 'center', 
        gap:30
    },
    textAba:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },
    lista:{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        paddingLeft:290,
        paddingTop:600       
    },
    textlista:{
        fontWeight: 'bold',
        backgroundColor: 'white',
        width: 90,
        height: 30,
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 20,
        borderWidth: 1
    }
})