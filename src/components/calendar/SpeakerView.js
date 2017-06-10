import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Padding, Colors } from '@mobile/constants/style';
import Speaker from '@mobile/models/speaker';

const imageWidth = 70;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.TRANSPARENT,
    alignItems: 'center',
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: imageWidth / 2,
  },
  name: {
    paddingTop: Padding.SMALL,
    fontSize: 12,
  },
  title: {
    paddingTop: Padding.SMALL,
    paddingBottom: Padding.SMALL,
    fontSize: 12,
  },
});
export default class SpeakerView extends React.Component {
  props: {
    speaker: Speaker,
    hideDetail: boolean
  };

  getDetail() {
    const { speaker } = this.props;
    if (this.props.hideDetail) return undefined;
    return <Text style={styles.title}>{speaker.position}</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: this.props.speaker.picture }}
        />

        <Text style={styles.name}>
          {this.props.speaker.nickname}
        </Text>
        {this.getDetail()}
      </View>
    );
  }
}
