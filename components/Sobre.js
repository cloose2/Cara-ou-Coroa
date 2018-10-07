
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';



export default class Sobre extends Component {
  render() {
    return (
      <View style = {styles.cenaPrincipal}  >
       <Text>Aqui explicará como funciona o jogo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal:{
    flex:1,
    backgroundColor:'#61BD8C'
  }
});


