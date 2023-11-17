import { View } from 'react-native';
import { styles } from '../../components/Header/styles';
import Header from '../../components/Header';

function Home(){

    return(
        <View style={styles.container}>
            <Header/>
        </View>
    )
}

export default Home