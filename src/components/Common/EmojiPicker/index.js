import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {EMOJIE} from '../../../constants/Icons';

const EmojiPicker = ({onSelectReaction}) => {
  const reactions = [
    EMOJIE.LIKE,
    EMOJIE.LOVE,
    EMOJIE.HAHA,
    EMOJIE.WOW,
    EMOJIE.SAD,
  ];

  return (
    <View style={styles.reactionContainer}>
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

const styles = StyleSheet.create({
  reactionContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50, // Adjust based on where you want it to appear
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  reactionButton: {
    marginHorizontal: 5,
  },
  reactionIcon: {
    width: 30,
    height: 30,
  },
});

export default EmojiPicker;
