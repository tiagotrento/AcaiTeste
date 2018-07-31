import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }
handleSignUp = () => {
  // TODO: Firebase stuff...
  console.log('handleSignUp')
}
render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" onPress={this.handleSignUp} />
        <Button
          title="Already have an account? Login"
          onPress={() => { Actions.SignUp(); }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})

// import React, { Component } from 'react';
// import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import logo from '../img/Logo2.png';

// export default class SignUp extends Component {
//     render() {
//         return (
//             <View style={styles.container}>


//                 <Image style={styles.imgLogo} source={logo} />

//                 <TextInput style={styles.campoTexto} underlineColorAndroid="rgba(0,0,0,0)"
//                     placeholderTextColor="#fff" placeholder="Usuário" />

//                 <TextInput style={styles.campoTexto} underlineColorAndroid="rgba(0,0,0,0)"
//                     placeholderTextColor="#fff" placeholder="Email" />

//                 <TextInput style={styles.campoTexto} underlineColorAndroid="rgba(0,0,0,0)"
//                     placeholderTextColor="#fff" secureTextEntry={true} placeholder="Senha" />

//                 <TouchableOpacity
//                     onPress={() => { Actions.home(); }}
//                     style={styles.botao}
//                 >
//                     <Text style={styles.textoBotao}>Cadastrar</Text>
//                 </TouchableOpacity>


//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#5c426b",
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     campoTexto: {
//         width: 300,
//         backgroundColor: "rgba(255,255,255,0.3)",
//         borderRadius: 25,
//         padding: 12,
//         paddingHorizontal: 16,
//         fontSize: 16,
//         color: "#fff",
//         borderColor: '#fff',
//         borderWidth: 2,
//         fontWeight: 'bold',
//         marginVertical: 10
//     },
//     textoBotao: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: 'bold'
//     },
//     textoCada: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginTop: 35
//     },
//     botao: {
//         backgroundColor: '#2d723c',
//         paddingVertical: 12,
//         width: 300,
//         marginVertical: 10,
//         borderColor: '#fff',
//         borderWidth: 2,
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     imgLogo: {
//         margin: 15,
//         width: 210,
//         height: 80

//     }
// });