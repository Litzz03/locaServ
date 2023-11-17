import { Image, View } from "react-native";
import { styles } from "./styles";


function LoginProvider() {

    const imagePath = require('../../../assets/Logo.png')

    return (
        <View>

            <View>
                <Image style={styles.image} source={imagePath} />
            </View>

        </View>
    )
}

export default LoginProvider