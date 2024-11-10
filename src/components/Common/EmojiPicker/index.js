import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {EMOJIE} from '../../../constants';
import {useTheme} from '@react-navigation/native';
import styles from './styles';

const EmojiPicker = ({onSelectReaction}) => {
  const reactions = [
    EMOJIE.LIKE,
    EMOJIE.LOVE,
    EMOJIE.HAHA,
    EMOJIE.WOW,
    EMOJIE.SAD,
    EMOJIE.ANGRY,
  ];

  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.reactionContainer,
        {shadowColor: colors.text, backgroundColor: colors.background},
      ]}>
      {reactions.map((reaction, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onSelectReaction(reaction.type)}
          style={styles.reactionButton}>
          <Image source={reaction.src} style={styles.reactionIcon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default EmojiPicker;
