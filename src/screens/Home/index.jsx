import { View } from 'react-native';
import Header from '../../components/Header';
import { styles } from './styles';
import MapView from 'react-native-maps';

function Home(){

    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.containerMap}>
                <MapView/>
            </View>
        </View>
    )
}

export default Home