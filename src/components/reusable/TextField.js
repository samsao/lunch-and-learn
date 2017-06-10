import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Padding, Colors } from '@mobile/constants/style/';

const styles = StyleSheet.create({
  field: {
    paddingLeft: Padding.MEDIUM,
    width: '100%',
    height: 50,
    fontSize: 16,
    color: Colors.GREEN,
  },
  invalidField: {
    borderWidth: 1,
    borderColor: Colors.RED,
    paddingLeft: Padding.MEDIUM,
    width: '100%',
    height: 50,
    fontSize: 16,
    color: Colors.RED,
  },
});

export default class TextField extends React.Component {

  props: {
    value: string,
    onChangeText: (text: string) => void,
    placeholder: string,
    isEmail: boolean,
    secureTextEntry: boolean,
    isValid: boolean,
  }
  render() {
    return (
      <View>
        <TextInput
          style={this.props.isValid ? styles.field : styles.invalidField}
          keyboardType={this.props.isEmail ? 'email-address' : 'default'}
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />
      </View>
    );
  }
}
