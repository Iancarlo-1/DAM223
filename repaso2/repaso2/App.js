import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  Pressable, 
  Image, 
  TextInput, 
  Platform, 
  Alert,
  ActivityIndicator,
  FlatList
} from 'react-native';

export default function ImageBackgroundScreen() {
  const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const bgMain = require('./assets/FONDO_APP.jpg');
  const logoApp = require('./assets/android-icon-foreground.png');

  const manejarRegistro = () => {
    const faltantes = [];

    if (titulo.trim() === '') faltantes.push('Título');
    if (autor.trim() === '') faltantes.push('Autor');
    if (genero.trim() === '') faltantes.push('Género');

    if (faltantes.length > 0) {
      mostrarAlerta('Faltan los siguientes datos:', faltantes.join(', '));
      return;
    }

    setCargando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };

      setLibros((librosAnteriores) => [...librosAnteriores, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');
      setCargando(false);

      mostrarAlerta('¡Éxito!', 'El libro fue registrado correctamente.');
    }, 4000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashBlackBackground}>
        <View style={styles.transparentCard}>
          <Image 
            source={logoApp} 
            style={styles.logo} 
          />
          <Text style={styles.splashTitle}>Repaso 2</Text>
          <Text style={styles.splashSubtitle}>Cargando...</Text>
        </View>
      </View>
    );
  }

  return (
    <ImageBackground
      source={bgMain}
      style={styles.mainContainer}
      resizeMode="cover"
    >
      <View style={styles.mainCard}>
        <Text style={styles.titulo}>Registro de datos</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={titulo}
          onChangeText={setTitulo}
          editable={!cargando}
        />

        <TextInput 
          style={styles.input}
          placeholder="Autor"
          value={autor}
          onChangeText={setAutor}
          editable={!cargando}
        />

        <TextInput
          style={styles.input}
          placeholder="Género"
          value={genero}
          onChangeText={setGenero}
          editable={!cargando}
        />

        {cargando ? (
          <View style={styles.cargandoContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.textoCargando}>Guardando libro...</Text>
          </View>
        ) : (
          <Pressable 
            style={({ pressed }) => [
              styles.botonPressable,
              pressed && styles.botonPresionado
            ]} 
            onPress={manejarRegistro}
          >
            <Text style={styles.textoBoton}>Agregar libro</Text>
          </Pressable>
        )}

        <Text style={styles.subtituloLista}>Libros Registrados ({libros.length})</Text>
        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          style={styles.listaContainer}
          renderItem={({ item }) => (
            <View style={styles.itemLibro}>
              <Text style={styles.itemTitulo}>{item.titulo}</Text>
              <Text style={styles.itemDetalle}>Autor: {item.autor} | Género: {item.genero}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.textoVacio}>No hay libros registrados aún.</Text>
          }
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashBlackBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  transparentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)', 
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
    maxWidth: 400,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  splashTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  splashSubtitle: {
    color: '#CCCCCC',
    fontSize: 14,
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    padding: 20,
    borderRadius: 18,
    alignItems: 'center',
    width: '85%',
    maxWidth: 400,
    maxHeight: '85%',
  },
  titulo: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#FFF',
  },
  botonPressable: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 5,
  },
  botonPresionado: {
    backgroundColor: '#0056b3',
    opacity: 0.8,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cargandoContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  textoCargando: {
    marginTop: 8,
    color: '#333',
    fontSize: 14,
  },
  subtituloLista: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  listaContainer: {
    width: '100%',
  },
  itemLibro: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  itemTitulo: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333',
  },
  itemDetalle: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  textoVacio: {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic',
    marginTop: 10,
  },
});