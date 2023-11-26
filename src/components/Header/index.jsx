import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


function Header(){

    const navigation = useNavigation()

    handleScreen = (screen) =>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>LocaServ</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => handleScreen('testScreen')}>
                    <MaterialCommunityIcons name="menu" size={50} color="white"/>               
                </TouchableOpacity>        
            </View>
        </View>
    )
}

export default Header