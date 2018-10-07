
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobre = require('../imgs/sobre_jogo.png');
const btnOutros = require('../imgs/outros_jogos.png');

export default class cenaPrincipal extends Component {
  render() {
    return (
      <View style = {styles.cenaPrincipal}  >
        <View style={styles.apresentacao}>
          <Image source={logo}/>
          <TouchableHighlight onPress={()=>{Actions.resultado();}}>
          <Image source={btnJogar}/>
          </TouchableHighlight>
        </View>
        <View style={styles.rodape}>
        <TouchableHighlight onPress={()=>{Actions.sobre();}}>
          <Image source={btnSobre}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{Actions.outrosjogos();}}>
          <Image source={btnOutros}/>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal:{
    flex:1,
    backgroundColor:'#61BD8C'
  },
  apresentacao:{
    flex:10,
    justifyContent:'center',
    alignItems:'center'
  },
  rodape:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  }
});


