import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Home from './Home';
import Carrinho from './Carrinho';
import Historico from './Historico';



const TabNav = TabNavigator(
  {
  
  Icon: {
    screen: Home
  },
  Carrinho: {
    screen: Carrinho
  },
  Historico: {
    screen: Historico
  }

  },
{

}
);


export default class TabeView extends Component {
  render() {
    return (
      <TabNav />
    );
  }
}
