import { Text, TouchableOpacity, View } from 'react-native';
import Header from '../../components/Header';
import { styles } from './styles';
import MapView from 'react-native-maps';
import ButonsScreen from '../../components/ButonScreen';
import Modal from 'react-native-modal';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



function Home() {
  const [isVisible, setVisibility] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setVisibility(!isVisible);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerMap}>
            <MapView
          style={styles.map}
              initialRegion={{
                latitude: -26.077870910412756,
                longitude: -53.05259619302107,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
                
        <View style={styles.menu}>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.textMenu}>Menu</Text>
          </TouchableOpacity>

          <Modal isVisible={isVisible} onBackdropPress={toggleModal}>
            <View style={styles.abaMenu}>
              <TouchableOpacity onPress={() => console.log('Item 1')}>
                <Text style={styles.textAba}>Perfil</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Item 2')}>
                <Text style={styles.textAba}>Endereco</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('testScreen')}>
                <Text style={styles.textAba}>Sair</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.textAba}>Fechar Aba</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>

        
        <View style={styles.lista}>
          <TouchableOpacity onPress={() => navigation.navigate('companyList')} >
            <Text style={styles.textlista}>Lista</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;
