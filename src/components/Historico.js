import React, { Component } from 'react';
import { StyleSheet, Text,View} from 'react-native';

export default class Historico extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Historico de Pedidos
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
    backgroundColor: '#F5FCFF',
  },
 
});