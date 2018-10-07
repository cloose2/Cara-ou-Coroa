
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';




export default class Outros extends Component {
  render() {
    return (
      <View style = {styles.cenaPrincipal}  >
        <Text>Aqui serão apresentados outros jogos</Text>
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


