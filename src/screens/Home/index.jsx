import { View } from 'react-native';
import Header from '../../components/Header';
import { styles } from './styles';
import MapView from 'react-native-maps';

function Home(){

    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.containerMap}>
            <MapView style={styles.map}
                initialRegion={{
                latitude: -26.077870910412756,
                longitude: -53.05259619302107,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            />
            </View>
        </View>
    )
}

export default Home