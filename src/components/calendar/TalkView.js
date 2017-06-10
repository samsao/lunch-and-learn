import React from 'react';
import { ListView, Text } from 'react-native';
import Talk from '@mobile/models/talk';
import TalkCell from '@mobile/components/calendar/TalkCell';

type Props = {
  talks: Talk[]
};

type State = {
  dataSource: any
};

export default class TalkView extends React.Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = { dataSource: null };
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.setState({ dataSource: ds.cloneWithRows(this.props.talks) });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(talk) => <TalkCell talk={talk} />}
      />
    );
  }
}
