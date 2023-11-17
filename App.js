import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InputGeneric from './src/components/InputGeneric';
import Header from './src/components/Header';
import Splash from './src/screens/Splash';
import ButonsScreen from './src/components/ButonScreen';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header></Header>
      <ButonsScreen/>
      
      <Splash></Splash>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
