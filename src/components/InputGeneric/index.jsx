import { Text, TextInput, View } from "react-native";
import { styles } from "./style";


function InputGeneric(props) {
    return (
        <View style={[styles.container]}>
            <TextInput keyboardType={props.tipo} onChangeText={props.sets} placeholder={props.texto} style={styles.input}></TextInput>
        </View>
    )
}
export default InputGeneric