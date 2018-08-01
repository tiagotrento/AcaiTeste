import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Statusbar, View } from 'react-native';
import Home from './src/components/Home';
import Produto from './src/components/Produto';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import firebase from 'firebase';
import FinalizaPedido from './src/components/FinalizarPedido';
import Carrinho from './src/components/Carrinho';
import Historico from './src/components/Historico';
import TabeViews from './src/components/TabeViews';
import Main from './src/components/Main';
import Loading from './src/components/Loading';
import SwitchNavigator from 'react-navigation';

export default class App extends Component {

  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyA9PDK5HhIx_GGSAscMPY_hfo1eW37m1lg",
        authDomain: "planetacai-ed61e.firebaseapp.com",
        databaseURL: "https://planetacai-ed61e.firebaseio.com",
        projectId: "planetacai-ed61e",
        storageBucket: "planetacai-ed61e.appspot.com"
      });
    }
  }
  render() {
    return (
      <Router titleStyle={{ Color: '#fff' }}>
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='TabeViews'
          component={TabeViews} hideNavBar={true} title="TabeViews" />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='home'
          component={Home} hideNavBar={false} title="Bem Vindo" />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Produto'
          component={Produto} hideNavBar={false} title="Acompanhamentos" />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Loading'
          component={Loading} hideNavBar={true} title="Loading" initial />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Login'
          component={Login} hideNavBar={true} title="Login" />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='SignUp'
          component={SignUp} hideNavBar={false} title="SignUp" />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Main'
          component={Main} hideNavBar={false} title="Main" />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='FinalizarPedido'
          component={FinalizaPedido} hideNavBar={false} title="Finalizar Pedido" />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Historico'
          component={Historico} hideNavBar={false} title="Historico" />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Carrinho'
          component={Carrinho} hideNavBar={false} title="Carrinho" />
      </Router>

    );
  }
} 