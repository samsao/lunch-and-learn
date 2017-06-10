import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTalks } from '@mobile/reducers/talk_fetch';
import type { TalkState } from '@mobile/reducers/talk_fetch';
import Talk from '@mobile/models/talk';
import { TalkView } from '@mobile/components/calendar';
import { NavigationBar, EmptyView, Loader } from '@mobile/components/reusable';

type Props = {
  actions: { fetchTalks: () => Array<Talk> },
  isLoading: boolean,
  isEmpty: boolean,
  talks: Talk[]
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

class CalendarPresenter extends React.Component {
  props: Props;
  title = 'Lunch and Learn';

  componentWillMount() {
    this.props.actions.fetchTalks();
  }

  renderContent() {
    if (this.props.isLoading) return undefined;
    return this.props.isEmpty
      ? <EmptyView text='Sorry, there are no upcoming talks' />
      : <TalkView talks={this.props.talks} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar name={this.title} />
        <Loader display={this.props.isLoading} />
        {this.renderContent()}
      </View>
    );
  }
}

const mapStateToProps = (state: { talks: TalkState }) => ({
  talks: state.talks.data,
  isEmpty: state.talks.data.length === 0,
  isLoading: state.talks.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchTalks }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPresenter);
