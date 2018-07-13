import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView, Button } from 'react-native';
import firebase from 'firebase';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            SwitchOnValueHolder: false
        };
        this.state = {
            Morango: false
        };
        this.state = {
            Abacaxi: false
        };
        this.state = {
            Kiwi: false
        };
        this.state = {
            Amendoim: false
        }
    }


    // ---------RADIO BUTTON------------
    onSelect( index, value) {
        this.setState({
            text: firebase.database().ref(`/Tipo de Açai/`)
            .child('Sabor').set(value)
        })
    }
    // ---------RADIO BUTTON------------

    Banana = (value) => {
        this.setState({
            SwitchOnValueHolder: value
        })
        if (value == true) {
            firebase.database().ref(`/adicionais/`)
                .child('adicional').set('banana')
        }
        else {
            firebase.database().ref(`/adicionais/`).child('adicional').remove()
        }
    };
    Morango = (value) => {
        this.setState({
            Morango: value
        })
        if (value == true) {
            firebase.database().ref(`/adicionais/`)
                .child('adicional2').set('Morango')
        }
        else {
            firebase.database().ref(`/adicionais/`).child('adicional2').remove()
        }
    };
    Abacaxi = (value) => {
        this.setState({
            Abacaxi: value
        })
        if (value == true) {
            firebase.database().ref(`/adicionais/`)
                .child('adicional3').set('Abacaxi')
        }
        else {
            firebase.database().ref(`/adicionais/`).child('adicional3').remove()
        }
    };
    Kiwi = (value) => {
        this.setState({
            Kiwi: value
        })
        if (value == true) {
            firebase.database().ref(`/adicionais/`)
                .child('adicional4').set('Kiwi')
        }
        else {
            firebase.database().ref(`/adicionais/`).child('adicional4').remove()
        }
    };
    Amendoim = (value) => {
        this.setState({
            Amendoim: value
        })
        if (value == true) {
            firebase.database().ref(`/adicionais/`)
                .child('adicional5').set('Amendoim')
        }
        else {
            firebase.database().ref(`/adicionais/`).child('adicional5').remove()
        }
    };

    render() {
        return (

            <View style={styles.MainContainer}>

                <View style={{ borderWidth: 1, borderRadius: 2 }} >
                    <Text style={{ fontSize: 20, color: 'purple', fontWeight: '300' }} >  Valor atual: 1 DOL </Text>
                </View>
                
                <ScrollView>

                <View style={{ alignItems: 'center', padding: 20  }} ><Text style={{ fontSize: 20, color: 'purple', fontWeight: '300' }} >Escolha o sabor do seu Açai</Text></View>
                <View style={{ borderWidth: 0.5, borderRadius: 10 }} >
                    <RadioGroup color='purple'
                        onSelect={(index, value) => this.onSelect(index, value)}>
                        <RadioButton value={'Açai Puro'} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Açai Puro</Text>
                        </RadioButton>

                        <RadioButton value={'Açai com Cupu'}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Açai com Cupu</Text>
                        </RadioButton>

                        <RadioButton value={'Açai Fitnes'}>
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Açai Fitnes (Diete)</Text>
                        </RadioButton>
                    </RadioGroup>

                    {/* <Text style={styles.text}>{this.state.text}</Text> */}

                </View>

                <View style={{ alignItems: 'center', padding: 20 }} ><Text style={{ fontSize: 20, color: 'purple', fontWeight: '300' }} > Escolha Até Três Adicionais </Text></View>
                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 210 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Banana</Text>
                        </View>
                        <Switch
                            onValueChange={(value) => this.Banana(value)}
                            style={{ marginBottom: 10 }}
                            value={this.state.SwitchOnValueHolder} />
                    </View>
                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 200 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Morango</Text>
                        </View>
                        <Switch
                            onValueChange={(value) => this.Morango(value)}
                            style={{ marginBottom: 10 }}
                            value={this.state.Morango} />
                    </View>
                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 208 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Abacaxi</Text>
                        </View>
                        <Switch
                            onValueChange={(value) => this.Abacaxi(value)}
                            style={{ marginBottom: 10 }}
                            value={this.state.Abacaxi} />
                    </View>
                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 250 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Kiwi</Text>
                        </View>
                        <Switch
                            onValueChange={(value) => this.Kiwi(value)}
                            style={{ marginBottom: 10 }}
                            value={this.state.Kiwi} />
                    </View>
                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 190 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Amendoim</Text>
                        </View>
                        <Switch
                            onValueChange={(value) => this.Amendoim(value)}
                            style={{ marginBottom: 10 }}
                            value={this.state.Amendoim} />
                    </View>
                    <View style={{ paddingTop: 15 }} >
                        <Button
                            color='purple'
                            title='Confirmar Pedido'
                            onPress={false}
                        />
                    </View>
                </ScrollView>
            </View>
        );
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