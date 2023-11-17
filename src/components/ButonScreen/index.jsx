import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native"


function ButonsScreen(props) {

    const navigation = useNavigation()

    handleScreen = (screen, params) =>{
        navigation.navigate(screen, params)
    }
    
    return (
        <View style={[styles.container]}>
            <TouchableOpacity style={[styles.button]}
              onPress={() => handleScreen(props.destinyScreen, props.params)}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>

        </View>
    )
}
export default ButonsScreen