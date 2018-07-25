import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './src/components/Home';
import Produto from './src/components/Produto';
import Login from './src/components/Login';
import Cadastro from './src/components/Cadastro';
import firebase from 'firebase'
import FinalizaPedido from './src/components/FinalizarPedido';
import Carrinho from'./src/components/Carrinho';
import Historico from'./src/components/Historico';
import TabeView from'./src/components/TabeView';

export default class App extends Component {
 
  componentWillMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyA9PDK5HhIx_GGSAscMPY_hfo1eW37m1lg",
			authDomain: "planetacai-ed61e.firebaseapp.com",
			databaseURL: "https://planetacai-ed61e.firebaseio.com",
			projectId: "planetacai-ed61e",
			storageBucket: "planetacai-ed61e.appspot.com"
		});
	} 
  render() {
    return (
      <Router titleStyle={{ Color: '#fff' }}>
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='TabeView' component={TabeView} hideNavBar={false} title="TabeView"  />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='home' component={Home} hideNavBar={false} title="Bem Vindo"  />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Produto' component={Produto} hideNavBar={false} title="Acompanhamentos" />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Login' component={Login} hideNavBar={true} title="Login"  />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Cadastro' component={Cadastro} hideNavBar={false} title="Cadastro"  />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='FinalizarPedido' component={FinalizaPedido} hideNavBar={false} title="Finalizar Pedido" />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Historico' component={Historico} hideNavBar={false} title="Historico" />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Carrinho' component={Carrinho} hideNavBar={false} title="Carrinho" />
      </Router>

    );
  }
} 