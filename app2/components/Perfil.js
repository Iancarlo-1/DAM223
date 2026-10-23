import {Text, View, Button, StyleSheet} from 'react-native';
import { useState } from 'react';

export const Perfil = ({nombre,carrera,materia,cuatri,style}) => {
    const[mostrar,setMostrar] = useState(false)
    return (
        <View style={[estilos.tarjeta,style]}>

            <Text style={estilos.nombres}>{nombre}</Text>
            
            { mostrar &&
            <>
            <Text style={estilos.carrera}>{carrera}</Text>
            <Text style={estilos.otroTexto}>{materia}</Text>
            <Text style={estilos.otroTexto}>{cuatri}</Text>
            </>
            }   

            {/* { ()=>{} } = Es una funcion anonima ya que no importa su nomrbe sino interesa la accion */}
            <Button title='Ver perifl' onPress={ ()=>setMostrar(!mostrar) } ></Button>
        </View>
    );
}

const estilos = StyleSheet.create({
    nombres:{
        fontSize:24,
        fontWeight:800,
        textTransform:'uppercase',
        color: 'white'
    },
    carrera:{
        fontSize:20,
        fontFamily:'Roboto',
        color:'blue',

    },
    otroTexto:{
        fontSize:18,
        fontFamily:'Courier',
        color:'red',
        fontStyle:'italic',
    },
    tarjeta:{
        borderWidth:4,
        borderRadius:12,
        padding:15,
        margin:10,
    },

})
