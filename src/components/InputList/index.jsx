import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";



function InputList(props) {
    return (
        <View style={[styles.container]}>
            <TextInput keyboardType={props.tipo} onChangeText={props.sets} placeholder={props.texto} style={styles.input}></TextInput>
        </View>
    )
}
export default InputList