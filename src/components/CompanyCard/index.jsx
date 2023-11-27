import { Text, View } from "react-native";
import { styles } from "./styles";


function CompanyCard(props){

    return(
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.textNameCompany}>{props.nameCompany}</Text>
                <View style={styles.ramoContainer}>
                    <Text style={styles.textRamo}>{props.ramo}</Text>
                </View>
                <Text style={styles.textInfos}>Endereço / Tipo do Serviço / Atendimento em Casa ou Estabelecimento</Text>
            </View>
            <View style={styles.logoContainer}>
                <Text>LOGO</Text>
            </View>
        </View>
    )
}

export default CompanyCard