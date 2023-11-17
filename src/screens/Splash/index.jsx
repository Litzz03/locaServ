import { Image, Text } from "react-native"
import { View } from "react-native"
import { styles } from "./styles";

function Splash(){
  
  const imagePath = require('/Users/Guilherme/Desktop/locaServ-1/assets/Logo.png');
return(
  <View style={styles.background}>
    <View>
    <Image style={styles.image} source={imagePath} />
    </View>
   <Text style={styles.title}>
     LocaServ
    </Text>
  </View>
)
}

export default Splash