/* 1. Zona de importaciones */
import { StyleSheet, View,} from 'react-native';
import MenuScreen from './screens/MenuScreen';




/* 2. Zona Main */
export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen></MenuScreen>
    
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
    justifyContent: 'center',
  },
  
});
