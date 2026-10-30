/* 1. Zona de importaciones */
import { StyleSheet, View,} from 'react-native';
import MenuScreen from './screens/MenuScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


/* 2. Zona Main */
export default function App() {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <MenuScreen></MenuScreen>
    
    </View>
    </SafeAreaProvider>
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
