/* 1. Zona de importaciones */
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SafeAreaEjemplo from '../components/SafeAreaEjemplo';
import ScrollViewEjemplo from '../components/ScrollViewEjemplo';


/* 2. Zona Main */
export default function SafeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top','bottom']}>
    <View style={styles.container}>
      
    <Text> Aqui va la practica 10 </Text>
    <Text> Equipo de Dulce</Text>

    </View>
    <SafeAreaEjemplo/>
    <ScrollViewEjemplo/>
    
    </SafeAreaView>
  );
}

/* 3. Zona estética */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloPrincipal:{
    fontSize: 24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom: 15,
  }
  
});
