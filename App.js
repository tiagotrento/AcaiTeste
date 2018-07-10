import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';


import Inicio from './src/components/Inicio';
import Home from './src/components/Home';
import Produto from './src/components/Produto';
import Login from './src/components/Login';
import Cadastro from './src/components/Cadastro';

import firebase from 'firebase'

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


      <Router titleStyle={{ Color: 'white' }}>
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} hideNavBar={true} key='inicio' component={Inicio} />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='home' component={Home} hideNavBar={false} title="Bem Vindo" />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Produto' component={Produto} hideNavBar={false} title="Acompanhamentos" initial />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Login' component={Login} hideNavBar={false} title="Login"  />
        <Scene navigationBarStyle={{ backgroundColor: '#5c426b' }} key='Cadastro' component={Cadastro} hideNavBar={false} title="Cadastro"  />
      </Router>

    );
  }
} 