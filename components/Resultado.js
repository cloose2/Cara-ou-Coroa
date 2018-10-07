
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

const moedaCara = require('../imgs/moeda_cara.png');
const moedaCoroa = require('../imgs/moeda_coroa.png');


export default class Resultado extends Component {
    constructor (props){
        super(props);
        this.state = {resultado:''};
    }
    componentWillMount(){
        const numAleatorio = Math.floor(Math.random()*2);
        let caraoucoroa ='';
        if(numAleatorio==0){
            caraoucoroa = 'cara';
        }else{
            caraoucoroa = 'coroa';
        }
        this.setState({resultado:caraoucoroa});
    }

  render() {
      if(this.state.resultado=='cara'){
        return (
            <View style={styles.cenaPrincipal}>
                <Image source ={moedaCara}/>
            </View>
          );
      }else{
    return (
      <View style={styles.cenaPrincipal}>
          <Image source ={moedaCoroa}/>
      </View>
    );
}
  }
}

const styles = StyleSheet.create({
  cenaPrincipal:{
    flex:1,
    backgroundColor:'#61BD8C',
    justifyContent:'center',
    alignItems:'center'
  }
});


