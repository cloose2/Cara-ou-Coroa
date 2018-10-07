
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import {Router,Scene} from 'react-native-router-flux';
import cenaPrincipal from './components/cenaPrincipal';
import Sobre from './components/Sobre';
import Outros from './components/Outros';
import Resultado from './components/Resultado';

export default class App extends Component {
  render() {
    return (
      <Router  sceneStyle={{paddingTop:50, backgroundColor:'#61BD8C'}}>
        <Scene key='principal'  title={'Cara ou Coroa'} component={cenaPrincipal} initil  />
        <Scene key='sobre'  title={'Sobre'}  component={Sobre} />
        <Scene key='outrosjogos' title={'Outros Jogos'}  component={Outros} />
        <Scene key='resultado' title={'Resultado'}  component={Resultado} />
      </Router>
    );
  }
}




