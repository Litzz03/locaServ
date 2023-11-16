import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";


function Header(){

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>LocaServ</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}><Text style={styles.textButton}>---</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Header