import { StyleSheet, View, Text} from 'react-native';




/* 2. Zona Main */
export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      
    <Text> Aqui va la practica </Text>
        <Text> Equipo de </Text>

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