import {Text, View, Button} from 'react-native';
import { useState } from 'react';

export const Perfil = ({nombre,carrera,materia,cuatri}) => {
    const[mostrar,setMostrar] = useState(false)
    return (
        <View>

            <Text>{nombre}</Text>
            
            { mostrar &&
            <>
            <Text>{carrera}</Text>
            <Text>{materia}</Text>
            <Text>{cuatri}</Text>
            </>
            }   

            {/* { ()=>{} } = Es una funcion anonima ya que no importa su nomrbe sino interesa la accion */}
            <Button title='Ver perifl' onPress={ ()=>setMostrar(!mostrar) } ></Button>
        </View>
    );
}