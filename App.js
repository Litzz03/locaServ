import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import InputGeneric from './src/components/InputGeneric';
import Header from './src/components/Header';
import Splash from './src/screens/Splash';


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
