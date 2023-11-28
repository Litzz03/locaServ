import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import InputList from "../InputList";


function Filter(){

    const navigation = useNavigation()

    handleScreen = (screen) =>{
        navigation.navigate(screen)
    }
    return(
        <View style={styles.container}>
           <View>
            <Text style={styles.text}>Distancia(KM)</Text>
            <InputList/>
           </View>
           <View>
            <Text style={styles.text}>Cidade</Text>
            <InputList/>
           </View>
           <View>
            <Text style={styles.text}>Tipo de servico</Text>
            <InputList/>
           </View>

        </View>
    )
}

export default Filter