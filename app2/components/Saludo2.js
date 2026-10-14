
import { View, Button, Text, Image } from 'react-native';

export const Saludo2 = () => {
  return (
    <View>
      <Text> Hola RN: Componente Compuesto </Text>
      <Image source={require('../assets/favicon.png')} />
      <Button title="Presiona aqui para saludar"></Button>
    </View>
  );
};
