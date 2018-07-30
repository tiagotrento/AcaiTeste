import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import pote1 from '../img/poteOne.png';
import pote2 from '../img/poteTho.png';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.menu}>
      <View>
        <Text style={{ fontSize: 20, color:'black' }} > Escolha o tamanho do seu Açaí </Text>
      </View>
         <View style={styles.menuGrupo}>
         
          <TouchableHighlight onPress={() => { Actions.Produto(); }} >
            <Image style={styles.imgMenu} source={pote1} />
          </TouchableHighlight>
         
          <TouchableHighlight onPress={() => { Actions.Produto(); }} >  
          <Image style={styles.imgMenu} source={pote2} />
          </TouchableHighlight>
        
        </View>
         <View style={styles.menuGrupo}>
         
          <TouchableHighlight onPress={() => { Actions.Produto(); }} >
            <Image style={styles.imgMenu} source={pote1} />
          </TouchableHighlight>
         
          <TouchableHighlight onPress={() => { Actions.Produto(); }} >  
          <Image style={styles.imgMenu} source={pote2} />
          </TouchableHighlight>
        
        </View>

      </View>


    );
  }
}

const styles = StyleSheet.create({

  menu: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
});