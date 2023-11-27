import { Text, View } from "react-native"
import { styles } from './styles';
import Header from "../../components/Header";

function CompanyList(){
  return(
    <View style={styles.container}> 
      <Header/>
      <Text>
        Teste
      </Text>
    </View>
  )
}

export default CompanyList