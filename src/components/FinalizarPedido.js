import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';



export default class FinalizarPedido extends Component {
    render() {
        return (
            <View style={styles.container}>


                <TextInput style={styles.campoTexto}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                    placeholder="Endereço"
                    autoCapitalize="none"
                />

                <TextInput style={styles.campoTexto}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                    placeholder="Bairro"
                    autoCapitalize="none"
                />

                <TextInput style={styles.campoTexto}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                    placeholder="Telefone"
                    autoCapitalize="none"
                />

                <TextInput style={styles.campoTexto}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#fff"
                    placeholder="Ponto de referencia"
                    autoCapitalize="none"
                />


                <TouchableOpacity
                    onPress={() => this.handleLogin()}
                    style={styles.botao} >
                    <Text style={styles.textoBotao}>Cadastro</Text>
                </TouchableOpacity>

                <Text style={styles.txt}> Detalhes do Pedido </Text>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    campoTexto: {
        width: 300,
        backgroundColor: "#B0C4DE",
        borderRadius: 15,
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
        backgroundColor: '#5c426b',
        paddingVertical: 12,
        width: 300,
        marginVertical: 10,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#5c426b',
        fontSize: 16,
        fontWeight: 'bold'
        
    }
});