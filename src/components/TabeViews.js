import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
  Route,
  NavigationState,
} from 'react-native-tab-view';
import Home from './Home';
import TabBarMenu from './TabBarMenu';
import Carrinho from './Carrinho';


// type State = NavigationState<
//   Route<{
//     key: string,
//     title: string,
//   }>
//   >;

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class TabeViews extends Component {
  static title = 'inicio';
  static backgroundColor = 'purple';
  static appbarElevation = 0;

  state = {
    index: 0,
    routes: [
      { key: 'Home', title: 'Home' },
      { key: 'Carrinho', title: 'Carrinho' },

    ],
  };

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderTabBar = props => (
    <TabBarMenu
      {...props}
    />
  );

  _renderScene = SceneMap({
    'Home': Home,
    'Carrinho': Carrinho,
  });

  render() {
    return (
      <TabView
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: 'purple',
  },
  tab: {
    width: 120,
  },
  indicator: {
    backgroundColor: 'purple',
  },
  label: {
    color: 'purple',
    fontWeight: '400',
  },
});