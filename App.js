import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';


import Inicio from './src/components/Inicio';
import Home from './src/components/Home';
import Produto from './src/components/Produto';

export default class App extends Component {
  render() {
    return (


      <Router titleStyle={{ Color: '#fff' }}>
        <Scene navigationBarStyle={{ backgroundColor: '#fff' }} hideNavBar={true} key='inicio' component={Inicio} />
        <Scene navigationBarStyle={{ backgroundColor: '#3CB371' }} key='home' component={Home} hideNavBar={false} title="Bem Vindo" />
        <Scene navigationBarStyle={{ backgroundColor: '#3CB371' }} key='Produto' component={Produto} hideNavBar={false} title="Acompanhamentos" initial />
      </Router>

    );
  }
} 