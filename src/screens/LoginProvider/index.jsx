import { Image, View } from "react-native";
import { styles } from "./styles";
import InputGeneric from "../../components/InputGeneric";
import Header from "../../components/Header";
import ButonsScreen from "../../components/ButonScreen";


function LoginProvider() {

    const imagePath = require('../../../assets/LogoBranco.png')

    return (
        <View style={styles.container}>
            
                <Header />
            
            <View>
                <Image style={styles.image} source={imagePath} />
            </View>

            <View style={styles.inputs}>
                <InputGeneric texto="Cnpj/Cpf" />
                <InputGeneric texto="Usuário" />
                <InputGeneric texto="Senha" />
            </View>

            <ButonsScreen title="Login" destinyScreen='home'/>

            <View style={styles.containerButton}>
                <ButonsScreen title="Prestador" destinyScreen='loginProvider'/>
                <ButonsScreen title="Cliente" destinyScreen='loginClient'/>
            </View>




        </View>
    )
}

export default LoginProvider