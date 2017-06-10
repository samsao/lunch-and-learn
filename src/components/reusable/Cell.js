import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Padding, Colors } from '@mobile/constants/style/';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.LIGHT_GREY,
    shadowColor: Colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: Padding.MEDIUM,
    marginRight: Padding.MEDIUM,
    marginTop: Padding.SMALL,
    marginBottom: Padding.EXTRA_SMALL,
    backgroundColor: Colors.WHITE,
  },
});

export default class Cell extends React.Component {
  props: {
    style?: {},
    children?: typeof React.Element,
  };

  static defaultProps = {
    children: null,
  }

  static defaultProps = {
    style: styles.container,
  };

  render() {
    return (
      <View style={this.props.style}>
        {this.props.children}
      </View>
    );
  }
}
