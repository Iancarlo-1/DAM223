/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';
import { Perfil } from '../components/Perfil';



/* 2. Zona Main */
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      
      <Perfil 
              
              nombre="Iancarlo Abreu Martinez"  
              carrera="TIID" 
              materia="Movil" 
              cuatri="4"
              style={styles.tarjeta1}>
              

      </Perfil>

      <Perfil 
              
              nombre="Miguel Zamora Bocanegra"  
              carrera="TIID" 
              materia="Movil" 
              cuatri="4"
              style={styles.tarjeta2}>
             

      </Perfil>

      <Perfil 
              
              nombre="Exal Paul Bolaños Velasco"  
              carrera="TIID" 
              materia="Movil" 
              cuatri="4"
              style={styles.tarjeta3}>
              

      </Perfil>
      
      <StatusBar style="auto" />
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
  tarjeta1:{
    backgroundColor:'#840b0b',

  },
  tarjeta2:{
    backgroundColor:'#555251',
  },
  tarjeta3:{
    backgroundColor:'#ac5425',
    justifyContent: 'center',
  },
});
