import {Text, Modal, StyleSheet, View, TextInput, ScrollView, SafeAreaView, Pressable } from 'react-native'
import React from 'react'

export default function Form({modalVisible, setModalVisible}) {

  return (
        <Modal animationType="fade" visible={modalVisible}>
              <SafeAreaView style={styles.container}>
                <ScrollView>
                  <Text style={styles.titulo}>
                    Nueva {''} <Text style={styles.tituloBold}>Cita</Text>{''}
                </Text>
                <View style={styles.field}>
                  <Text style={styles.label}>Nombre del paciente</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Paciente"
                        placeholderTextColor="#000000ff"
                    />
                    <Text style={styles.label}>Nombre del propietario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Propietario"
                        placeholderTextColor="#000000ff"
                    />
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Numero de Celular</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Numero de Celular"
                    placeholderTextColor="#000000ff"
                    keyboardType='phone-pad'
                  />
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Correo Electronico</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Correo Electronico"
                    placeholderTextColor="#000000ff"
                    keyboardType='email-address'
                  />
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Sintomas</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Sintomas"
                    placeholderTextColor="#000000ff"
                  />
                </View>
                <Pressable style={styles.btn_cerrar} 
                    onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.btn_cerrar}>Cerrar</Text>
                  
                </Pressable>
                </ScrollView>
              </SafeAreaView>
        </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6d28d9',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffffff',
    marginTop: 30,
  },
  tituloBold: {
    fontWeight: '900',
    fontSize: 24,
    color: '#ffffffff',
  },
  field: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#ffffffff',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  btn_cerrar: {
    textAlign: 'center',
    color: '#000000ff',
    fontWeight: '900',
    fontSize: 15,
    textTransform: 'uppercase',
    backgroundColor: '#ffffffff',
    padding: 5,
    borderRadius: 30,
    width: '48%',
    alignSelf: 'center',
  },
});
