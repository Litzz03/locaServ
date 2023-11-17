import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InputGeneric from './src/components/InputGeneric';
import Header from './src/components/Header';
import ButonsScreen from './src/components/ButonScreen';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Oig</Text>
      <Text>2</Text>
      <Text>Teste</Text>
      <InputGeneric texto={'Cnpj'}/>
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
