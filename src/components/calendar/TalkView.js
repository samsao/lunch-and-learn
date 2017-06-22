import React from 'react';
import { ListView, View } from 'react-native';
import Talk from '@mobile/models/talk';
import TalkCell from '@mobile/components/calendar/TalkCell';
import { Notification } from '@mobile/components/reusable';
import * as ComponentStatus from '@mobile/components/reusable/ComponentStatus';

type Props = {
  talks: Talk[]
};

type State = {
  dataSource: any,
  succeeded: boolean,
  failed: boolean
};

export default class TalkView extends React.Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = { dataSource: null, succeeded: false, failed: false };
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.setState({ dataSource: ds.cloneWithRows(this.props.talks) });
  }

  topView() {
    return (
      <View>
        <Notification
          status={ComponentStatus.FAILURE}
          text={'There was an error'}
          display={this.state.failed}
          duration={3000}
        />
        <Notification
          status={ComponentStatus.SUCCESS}
          text={'Success'}
          display={true}
          duration={3000}
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.topView()}
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(talk) => <TalkCell talk={talk} />}
        />
      </View>
    );
  }
}
