import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight, Alert } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import { Actions } from 'react-native-router-flux';

import firebase from 'firebase'

export default class App extends Component {
    render() {
        refProdutos = firebase.database().ref(`/adicionais/`)
        .push(id)
        console.disableYellowBox = true;
        return (
            <View style={styles.container}>
            
                <ScrollView>

                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 190 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Banana</Text>
                        </View>
                        <ToggleSwitch
                            id= 'Banana'
                            isOn={false}
                            onColor='green'
                            offColor='#a0a0a0'
                            // label  = 'Banana'
                            // labelStyle={{ color: 'black', fontSize: 20, fontWeight: '400' }}
                            size='medium'
                            onToggle={(isOn) => refProdutos }
                        />

                    </View>
                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 190 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Morango</Text>
                        </View>
                        <ToggleSwitch
                            isOn={false}
                            onColor='green'
                            offColor='#a0a0a0'
                            // label  = 'Banana'
                            // labelStyle={{ color: 'black', fontSize: 20, fontWeight: '400' }}
                            size='medium'
                            onToggle={(isOn) => console.log('changed to : ', isOn)}
                        />
                    </View>
                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 190 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Pinga 51</Text>
                        </View>
                        <ToggleSwitch
                            isOn={false}
                            onColor='green'
                            offColor='#a0a0a0'
                            // label  = 'Banana'
                            // labelStyle={{ color: 'black', fontSize: 20, fontWeight: '400' }}
                            size='medium'
                            onToggle={(isOn) => console.log('changed to : ', isOn)}
                        />
                    </View>
                    <View style={styles.styleList} >
                        <View style={{ paddingRight: 190 }} >
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: '300' }} >Banana</Text>
                        </View>
                        <ToggleSwitch
                            isOn={false}
                            onColor='green'
                            offColor='#a0a0a0'
                            // label  = 'Banana'
                            // labelStyle={{ color: 'black', fontSize: 20, fontWeight: '400' }}
                            size='medium'
                            onToggle={(isOn) => Alert.alert('changed to : ', isOn)}
                        />
                    </View>
                    <View>
                        <TouchableHighlight
                            onPress={() => Actions.Login()} >
                            <Text style={{ fontSize: 20 }} >Confirmar Pedido</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
                {/* if (onToggle==isOn) {
                            Alert.alert(
                                'Alert Title',
                                'My Alert Msg',
                                [
                                  {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                                ],
                                { cancelable: false }
                              )
                        } */}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        flex: 1,
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