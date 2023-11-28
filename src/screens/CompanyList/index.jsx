import { Button, FlatList, Text, View } from "react-native"
import { styles } from './styles';
import Header from "../../components/Header";
import CompanyCard from "../../components/CompanyCard";
import { useState } from "react";
import Filter from "../../components/Filter";

function CompanyList(){

  const [company, setcompany] = useState([])
  
  function handleProdutoAdd(){
    setcompany([...company, 'Empresa Teste'])
  } 
  return(
    <View style={styles.container}> 
      <Header/>
      <Filter/>
      <Button onPress={handleProdutoAdd} title="testButton"/>
      <FlatList
        data={company}
        keyExtractor={company => company}
        renderItem={ ({item}) => (
          <CompanyCard nameCompany='Empresa Teste'
                  ramo="Ramo"
                  key={item}/>
            )}
            ListEmptyComponent={() => 
            <Text styles={styles.listEmpty}>Sem Empresas informado</Text>
        }
      />
    </View>
  )
}

export default CompanyList