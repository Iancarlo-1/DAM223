import { useState } from 'react';
import { StyleSheet, View, Text, Switch, Pressable} from 'react-native';


/* 2. Zona Main */
export default function PressableScreen() {

    const [encendido, setEncendido]= useState(false);
    const [contador,setContador] = useState(0);
  return (
    <View style={styles.container}>
      
    <Text> Aqui va la practica 11 </Text>
        <Text style ={styles.titulo}> Práctica: Switch y Pressable </Text>
        <Switch
        value={encendido}
        onValueChange={(valor) => setEncendido(valor)}
        />

        <Text sytle={styles.texto}> El switch esta: {encendido ? 'Encendido' : 'Apagado'}</Text>


    <Pressable
    
      style={styles.Boton}
      onPress={() => setContador(contador + 1 )}

      ></Pressable>

      <Text style = {styles.textoBoton}> Presioname </Text>
      <Text style = {styles.texto}> Veces presionado: {contador} </Text>

    </View>

    
  );
};


/* 3. Zona estética */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  
  },
  texto: {
    fontSize: 18,
    marginVertical: 15,
    
  },
  Boton:{
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,

  },
  textoBoton:{
    fontSize: 18,
    fontWeigth: 'bold', 
  },

});
