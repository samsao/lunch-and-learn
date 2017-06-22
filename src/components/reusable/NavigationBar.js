import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Padding, Colors } from '@mobile/constants/style/';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
  },
  viewStyle: {
    backgroundColor: Colors.GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: Padding.MEDIUM,
    shadowColor: Colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
});

export default class NavigationBar extends React.Component {
  props: {
    name: string
  };
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.name}</Text>
      </View>
    );
  }
}
