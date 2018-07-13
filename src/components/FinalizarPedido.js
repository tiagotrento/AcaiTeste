import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'firebase';

export default class FinalizaPedido extends Component{
    render(){
        return(
            <View style={styles.MainContainer}>
               <View style={styles.styleList} > <Text style={{ fontSize: 20, color: 'purple', fontWeight: '300' }} > Escolha o endereço </Text></View>
               
               <View style={styles.styleList} ><Text style={{ fontSize: 20, color: 'purple', fontWeight: '300' }} > Escolha o modo de pagamento </Text></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
        margin: 10,
        paddingTop: 75
    },
    styleList: {
        padding: 10,
        // paddingHorizontal: 15,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
});