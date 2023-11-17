import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InputGeneric from './src/components/InputGeneric';
import Header from './src/components/Header';
<<<<<<< HEAD
import ButonsScreen from './src/components/ButonScreen';

=======
import Splash from './src/screens/Splash';
import ButonsScreen from './src/components/ButonScreen';
>>>>>>> 75928d1c4b0343ba1c97d09ffdc8aa2525545a52


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header></Header>
      <ButonsScreen/>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
