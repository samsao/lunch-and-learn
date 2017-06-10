import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Padding, Colors } from '@mobile/constants/style/';

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: Colors.BLACK,
    textAlign: 'center',
    fontFamily: 'Futura-MediumItalic',
    padding: Padding.MEDIUM,
  },
});

export default class LoginTitle extends React.Component {

  render() {
    return <Text style={styles.title}>{'Welcome to\nLunch & Learn'}</Text>;
  }

}
