import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, SectionList, StatusBar, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import pote1 from '../img/poteOne.png';
import pote2 from '../img/poteTho.png';
import pote3 from '../img/poteTree.png';
import carrinho from '../img/carrinho.jpg';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.menu}>

        <StatusBar
          backgroundColor="#5c426b"
          barStyle="light-content"
        />
        {/* <TouchableHighlight
          onPress={() => { Actions.formlogin(); }}>
        </TouchableHighlight> */}

        <View style={styles.menuGrupo}>
          {/* <TouchableHighlight
          onPress={() => { Actions.formLogin(); }}> */}
          <TouchableHighlight
          onPress={() => { Actions.Produto(); }}
          >
            <Image style={styles.imgMenu} source={pote1} />

          </TouchableHighlight>
          <Image style={styles.imgMenu} source={pote2} />

        </View>

        
        <Image source={pote3} />


        {/* <View style={ styles.carrinho } >
          <TouchableHighlight
            // onPress={() => { Actions.carrinho(); }}
          >
            <Image style={styles.imgMenu} source={carrinho} />

          </TouchableHighlight>
        </View> */}


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

  },
  carrinho: {
    alignItems: 'center',
    justifyContent: 'center',

    margin: 15
  }
});