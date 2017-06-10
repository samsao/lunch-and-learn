import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import moment from 'moment';
import Talk from '@mobile/models/talk';
import { Button } from '@mobile/components/reusable';
import { Padding, Colors } from '@mobile/constants/style/';

type Props = {
  talk: Talk
};

type State = {
  isUserAttending: boolean
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '80%',
  },
  title: {
    color: Colors.GREEN,
  },
  date: {
    paddingTop: Padding.MEDIUM,
    paddingBottom: Padding.MEDIUM,
  },
});

export default class TalkDetail extends React.Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      isUserAttending: false,
    };
  }

  onButtonTap = () => {
    // Linking.openURL(this.props.talk.slidesURL)
    this.setState({ isUserAttending: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.talk.title}
        </Text>

        <Text style={styles.date}>
          {moment(this.props.talk.date).format('LT')}
        </Text>

        <Button
          text='Going'
          onButtonTap={this.onButtonTap}
          isButtonActive={this.state.isUserAttending}
        />
      </View>
    );
  }
}
