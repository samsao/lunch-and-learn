import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import Talk from '@mobile/models/talk';
import { selectTalk } from '@mobile/reducers/talk_selection';
import { Cell } from '@mobile/components/reusable';
import {
  SpeakerView,
  TalkDetail,
  ExpandedTalkDetail,
} from '@mobile/components/calendar';
import {
  Padding,
  Colors,
  LayoutSpringAnimation,
} from '@mobile/constants/style';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: Padding.MEDIUM,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderColor: Colors.LIGHT_GREY,
    position: 'relative',
  },
});

type Props = {
  actions: { selectTalk: any },
  talk: any,
  isExpanded: boolean
};

class TalkCell extends React.Component {
  props: Props;

  componentWillMount() {
    console.log('CELL MONTING');
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext(LayoutSpringAnimation);
  }

  render() {
    const { talk } = this.props;
    return (
      <TouchableWithoutFeedback
        key={talk.id}
        onPress={() => this.props.actions.selectTalk(this.props.talk.id)}
      >
        <View>
          <Cell>
            {this.renderTalk()}
          </Cell>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderTalk() {
    const { talk, isExpanded } = this.props;
    if (isExpanded) {
      return (
        <View
          style={_.assign({}, styles.container, { flexDirection: 'column' })}
        >
          <ExpandedTalkDetail talk={talk} />
          <SpeakerView speaker={talk.speaker} hideDetail={false} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <SpeakerView speaker={talk.speaker} hideDetail={true} />
        <TalkDetail talk={talk} />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps: Props) => {
  const isExpanded = state.selectedTalk.id === ownProps.talk.id;
  return { isExpanded };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ selectTalk }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TalkCell);
