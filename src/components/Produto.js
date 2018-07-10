import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import firebase from 'firebase'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            SwitchOnValueHolder: false
        }
    }

    Magica = (value) => {
        this.setState({

            SwitchOnValueHolder: value

        })
        if (value == true) {
            firebase.database().ref(`/adicionais/`)
                .push('açai')
        }
        else {

            firebase.database().ref(`/adicionais/`).remove()
        }
    }

    render() {

        return (

            <View style={styles.MainContainer}>
                <ScrollView>

                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 210 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Banana</Text>
                        </View>
                        <Switch
                            onValueChange={(value) => this.Magica(value)}
                            style={{ marginBottom: 10 }}
                            value={this.state.SwitchOnValueHolder} />
                    </View>
                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 200 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Morango</Text>
                        </View>
                        <Switch
                            onValueChange={(value) => this.Magica(value)}
                            style={{ marginBottom: 10 }}
                            value={this.state.SwitchOnValueHolder} />
                    </View>
                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 208 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Abacaxi</Text>
                        </View>
                        <Switch
                            onValueChange={(value) => this.Magica(value)}
                            style={{ marginBottom: 10 }}
                            value={this.state.SwitchOnValueHolder} />
                    </View>
                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 250 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Kiwi</Text>
                        </View>
                        <Switch
                            onValueChange={(value) => this.Magica(value)}
                            style={{ marginBottom: 10 }}
                            value={this.state.SwitchOnValueHolder} />
                    </View>
                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 190 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Amendoim</Text>
                        </View>
                        <Switch
                            onValueChange={(value) => this.Magica(value)}
                            style={{ marginBottom: 10 }}
                            value={this.state.SwitchOnValueHolder} />
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

