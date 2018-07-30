import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import logo from '../img/Logo2.png';

export default class Cadastro extends Component {
    render() {
        return (
            <View style={styles.container}>


                <Image style={styles.imgLogo} source={logo} />

                <TextInput style={styles.campoTexto} underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff" placeholder="Usuário" />

                <TextInput style={styles.campoTexto} underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff" placeholder="Email" />

                <TextInput style={styles.campoTexto} underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff" secureTextEntry={true} placeholder="Senha" />

                <TouchableOpacity
                    onPress={() => { Actions.home(); }}
                    style={styles.botao}
                >
                    <Text style={styles.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5c426b",
        justifyContent: 'center',
        alignItems: 'center'
    },
    campoTexto: {
        width: 300,
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 25,
        padding: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#fff",
        borderColor: '#fff',
        borderWidth: 2,
        fontWeight: 'bold',
        marginVertical: 10
    },
    textoBotao: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textoCada: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 35
    },
    botao: {
        backgroundColor: '#2d723c',
        paddingVertical: 12,
        width: 300,
        marginVertical: 10,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgLogo: {
        margin: 15,
        width: 210,
        height: 80

    }
});