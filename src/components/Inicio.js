import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Inicio extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#5c426b"
          barStyle="light-content"
        />

        <TouchableOpacity
          onPress={() => { Actions.home(); }}
          style={styles.botao}>
          <Text style={styles.textoBotao}> Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.instructions}>
          Direitos Reservados
        </Text>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5c426b',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff'

  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5

  },
  botao: {
    backgroundColor: '#2d723c',
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginTop: 20,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'

  }
});