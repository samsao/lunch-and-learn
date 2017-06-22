import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '@mobile/constants/style';
import * as ComponentStatus from '@mobile/components/reusable/ComponentStatus';

type Props = {
  status: string,
  text: string,
  display: boolean,
  duration: ?number
};

type State = {
  display: boolean
};

export default class Notification extends React.Component {
  props: Props;
  state: State;
  timeoutID: number;

  constructor(props: Props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  componentWillMount() {
    const { display, duration } = this.props;
    if (display) {
      this.setState({ display: true });
      if (duration) {
        this.timeoutID = setTimeout(
          () => this.setState({ display: false }),
          3000
        );
      }
    } else {
      this.setState({ display: false });
    }
  }

  componentWillUnmount() {
    if (!this.timeoutID) return;
    clearTimeout(this.timeoutID);
  }

  getViewStyle() {
    if (this.props.status === ComponentStatus.SUCCESS) {
      return styles.successContainer;
    }
    if (this.props.status === ComponentStatus.FAILURE) {
      return styles.failureContainer;
    }
    if (this.props.status === ComponentStatus.STATELESS) {
      return styles.statelessContainer;
    }
    return undefined;
  }

  getTextStyle() {
    if (this.props.status === ComponentStatus.SUCCESS) {
      return styles.successText;
    }
    if (this.props.status === ComponentStatus.FAILURE) {
      return styles.failureText;
    }
    if (this.props.status === ComponentStatus.STATELESS) {
      return styles.statelessText;
    }
    return undefined;
  }

  render() {
    const { text } = this.props;
    const { display } = this.state;
    if (!display) return null;

    return (
      <View style={this.getViewStyle()}>
        <Text style={this.getTextStyle()}>{text}</Text>
      </View>
    );
  }
}

const commonTextStyle = {
  fontSize: 14,
};

const commonContainer = {
  backgroundColor: Colors.GREEN,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  successContainer: {
    ...commonContainer,
    backgroundColor: Colors.SUCCESS_GREEN,
  },
  successText: {
    ...commonTextStyle,
    color: Colors.WHITE,
  },
  failureContainer: {
    ...commonContainer,
    backgroundColor: Colors.RED,
  },
  failureText: {
    ...commonTextStyle,
    color: Colors.WHITE,
  },
  statelessContainer: {
    ...commonContainer,
    backgroundColor: Colors.LIGHT_GREY,
  },
  statelessText: {
    ...commonTextStyle,
    color: Colors.BLACK,
  },
});
