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
        paddingLeft:15,
        paddingTop:20,
        
    },
    textMenu:{
        fontWeight:'bold',
        backgroundColor:'white',
        width: 70,
        height: 20,
        textAlign:'center',
        borderRadius: 10,
        fontSize:15,
    },
    abaMenu:{
        justifyContent: 'center', 
        alignItems: 'center', 
        gap:30,
        
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
        paddingLeft:320,
        paddingTop:650,
        borderColor:'black'
         
    },
    textlista:{
        fontWeight: 'bold',
        backgroundColor: 'white',
        width: 70,
        height: 20,
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 15,
        borderWidth: 1,            
        borderColor: 'black' 
    }
})