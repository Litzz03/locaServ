import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


function Header(){

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>LocaServ</Text>
            </View>
            <View style={styles.buttonContainer}>
                
            </View>
        </View>
    )
}

export default Header