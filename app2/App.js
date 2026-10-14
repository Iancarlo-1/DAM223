/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';



/* 2. Zona Main */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <Image source={require('./assets/favicon.png')}></Image>
      <Saludo/>
      <Saludo2/>
      <Perfil/>
      <StatusBar style="auto" />
    </View>
  );
}

/* 3. Zona estética */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
