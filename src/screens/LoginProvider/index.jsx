import { Image, View } from "react-native";
import { styles } from "./styles";
import InputGeneric from "../../components/InputGeneric";
import Header from "../../components/Header";


function LoginProvider() {

    const imagePath = require('../../../assets/Logo.png')

    return (
        <View style={styles.container}>

            <View >
            <Header/>

            </View>

            <View>
                <Image style={styles.image} source={imagePath} />
            </View>

            <View style={styles.inputs}>
                <InputGeneric  texto="Cnpj/Cpf"/>
                <InputGeneric texto="Usuário" />
                <InputGeneric texto="Senha"/>
            </View>




        </View>
    )
}

export default LoginProvider