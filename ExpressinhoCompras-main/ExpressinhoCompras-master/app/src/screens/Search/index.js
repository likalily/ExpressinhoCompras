import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Container } from './styles'
import Fundo from '../../assets/Fundo.png';

export default () => {
  return (
    <Image
            source={require('../../assets/Fundo.png')}
            style={styles.container}>
        
        </Image>
     
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});