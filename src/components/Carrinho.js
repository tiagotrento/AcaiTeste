import React, { Component } from 'react';
import { StyleSheet, Text,View} from 'react-native';

export default class Carrinho extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            Carrinho
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