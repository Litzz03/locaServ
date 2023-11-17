import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


function ButonsScreen(props) {

    return (
        <View style={[styles.container]}>
            <TouchableOpacity onPress={props.telas} style={[styles.button]}>
                <Text style={styles.text}>{props.texto}</Text>
            </TouchableOpacity>

        </View>
    )
}
export default ButonsScreen