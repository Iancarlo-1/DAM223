import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
  ScrollView,
  Platform,
} from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const handleEnviar = () => {
    if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
      mostrarAlerta('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (isNaN(semestre) || semestre.trim() === '') {
      mostrarAlerta('Error', 'El semestre debe ser un número.');
      return;
    }

    const tallerTexto = taller ? 'Sí' : 'No';
    const constanciaTexto = constancia ? 'Sí' : 'No';
    const deportesTexto = deportes ? 'Sí' : 'No';

    mostrarAlerta(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${tallerTexto}\nConstancia: ${constanciaTexto}\nDeportes: ${deportesTexto}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Carrera"
          value={carrera}
          onChangeText={setCarrera}
        />
        <TextInput
          style={styles.input}
          placeholder="Semestre"
          keyboardType="numeric"
          value={semestre}
          onChangeText={setSemestre}
        />
      </View>

      <Text style={styles.subtitulo}>Opciones</Text>

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>¿Asistirá al taller?</Text>
        <Switch
          value={taller}
          onValueChange={setTaller}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={taller ? '#007bff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>¿Requiere constancia?</Text>
        <Switch
          value={constancia}
          onValueChange={setConstancia}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={constancia ? '#007bff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>¿Participará en deportes?</Text>
        <Switch
          value={deportes}
          onValueChange={setDeportes}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={deportes ? '#007bff' : '#f4f3f4'}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleEnviar}>
        <Text style={styles.buttonText}>Enviar Registro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#000',
  },
  inputContainer: {
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});