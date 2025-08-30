import React, {useState}from 'react';
import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';
import Form from './src/components/Form';
/*LLAMAR EL HOOK*/


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>App de Citas Médicas {'\n'}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>
      <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.btnNC}>
        <Text style={styles.btntextNC}>Nueva Cita</Text>
      </Pressable>
      <Form modalVisible={modalVisible}
        setModalVisible={setModalVisible} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66a0bbff',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#c9cbceff',
    fontWeight: '600',
    marginTop: 60,
  },
  titleBold: {
    fontWeight: '900',
    color: '#6d28d9',
  },
  btnNC: {
    backgroundColor: '#d68232ff',
    padding: 10,
    borderRadius: 20,
    width: '40%',
    alignSelf: 'center',
  },
  btntextNC: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
