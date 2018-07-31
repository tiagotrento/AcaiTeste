import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'
export default class Loading extends Component {
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.props.navigation.navigate(user ? 'Main' : 'SignUp')
  //   })
  // }
componentDidMount() {
    const usuario = firebase.auth();

    usuario.onAuthStateChanged(
      (usuarioAtual) => {
        if (usuarioAtual) {
          Actions.Main();
        } else {
          Actions.Login();
        }
      }
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})