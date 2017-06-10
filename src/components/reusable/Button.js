import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Padding, Colors } from '@mobile/constants/style/';

const styles = StyleSheet.create({
  text: {
    padding: Padding.EXTRA_SMALL,
  },
});

export default class Button extends React.Component {
  props: {
    text: string,
    onButtonTap: () => void,
    isButtonActive: boolean,
  }

  styles = StyleSheet.create({
    container: {
      backgroundColor: this.props.isButtonActive ? Colors.GREEN : Colors.LIGHT_GREY,
      borderColor: this.props.isButtonActive ? Colors.GREEN : Colors.LIGHT_GREY,
      borderWidth: 5,
      borderRadius: 50,
      width: 150,
      alignItems: 'center',
    },
  })

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onButtonTap}
        style={this.styles.container}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
