/* 1. Zona de importaciones */
import { StyleSheet, View, Button, Text} from 'react-native';
import { useState } from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';
import TextScreen from './TextScreen';
import ModalScreen from './ModalScreen';
import ImageScreen from './ImageScreen';
import FlatScreen from './FlatScreen';
import ActivityScreen from './ActivityScreen';



/* 2. Zona Main */
export default function MenuScreen() {
  const [screen, setScreen]= useState('menu');

    switch(screen){
        case 'safe':
            return <SafeScreen/>

        case 'press':
            return <PressableScreen/>
        
        case 'tarjetas':
            return <TarjetasScreen/>

        case 'activity':
            return <ActivityScreen/>
        
        case 'flat':
            return <FlatScreen/>

        case 'image':
            return <ImageScreen/>

        case 'modal':
            return <ModalScreen/>

        case 'text':
            return <TextScreen/>

        case 'menu':
            default:
        
                return (
                <View style={styles.container}>
                
                    <Text> Menu de practicas </Text>
                    <Button title='Practica Tarjetas' onPress={()=>setScreen('tarjetas')}></Button>
                    <Button title='Practica SafeAreaView' onPress={()=>setScreen('safe')}></Button>
                    <Button title='Practica Pressable' onPress={()=>setScreen('press')}></Button>
                    <Button title='Practica Activity' onPress={()=>setScreen('activity')}></Button>
                    <Button title='Practica Flat' onPress={()=>setScreen('flat')}></Button>
                    <Button title='Practica Image' onPress={()=>setScreen('image')}></Button>
                    <Button title='Practica Modal' onPress={()=>setScreen('modal')}></Button>
                    <Button title='Practica Text' onPress={()=>setScreen('text')}></Button>
                    
                </View>
                );
}/* switch */
                }/* funcion */

/* 3. Zona estética */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
