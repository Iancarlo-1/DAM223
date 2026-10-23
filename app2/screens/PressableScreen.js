/* 1. Zona de importaciones */
import { StyleSheet, View, Text} from 'react-native';




/* 2. Zona Main */
export default function PressableScreen() {
  return (
    <View style={styles.container}>
      
    <Text> Aqui va la practica 11 </Text>
        <Text> Equipo de Karen</Text>

    </View>
  );
}

/* 3. Zona estética */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  
});
