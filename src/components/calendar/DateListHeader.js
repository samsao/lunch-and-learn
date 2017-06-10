import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import { Padding, Colors } from '@mobile/constants/style';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: Colors.WHITE,
    height: Padding.MEDIUM,
    justifyContent: 'center',
    paddingLeft: Padding.MEDIUM,
  },
  textStyle: {
    fontSize: 14,
    color: Colors.BLACK,
  },
});
export default class DateListHeader extends React.Component {
  props: {
    date: string
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>
          {moment(this.props.date).calendar()}
        </Text>
      </View>
    );
  }
}
