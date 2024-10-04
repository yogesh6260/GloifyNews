import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {EMOJIE, ICONS, IMAGES} from '../../../constants';
import {useTheme} from '@react-navigation/native';
import {boxShadow} from '../../../styles/mixins';
import {EmojiPicker} from '../../Common';
import {useDispatch, useSelector} from 'react-redux';
import {
  addUserReactionToFirestore,
  getReactionsFromFirestore,
  removeUserReactionFromFirestore,
} from '../../../utils/helpers';
import {
  removeUserReactions,
  saveUserReactions,
} from '../../../redux/actions/user/userActions';
import {horizontalScale, verticalScale} from '../../../styles/metrics';

const NewsCard = ({
  cardImg,
  title,
  desc,
  source,
  time,
  category,
  author,
  onPress,
  onShare,
  onLike,
  onAudio,
  onMore,
  articleId,
}) => {
  const {colors, dark} = useTheme();
  const [showReactionPicker, setShowReactionPicker] = useState(false);
  const [reactionCount, setReactionCount] = useState(0);
  const [reactions, setReactions] = useState({});
  const [userReaction, setUserReaction] = useState(null);

  const userId = useSelector(state => state.user.data.id);
  const dispatch = useDispatch();

  // Fetch and set reactions data on component mount
  useEffect(() => {
    const fetchReactions = async () => {
      const {totalCount, reactions} = await getReactionsFromFirestore(
        articleId,
      );
      setReactionCount(totalCount);

      const reactionIcons = {};
      let currentUserReaction = null;

      Object.keys(reactions).forEach(reactionType => {
        const usersWithReaction = reactions[reactionType];
        const usersWithTrueReaction = Object.keys(usersWithReaction).filter(
          uid => usersWithReaction[uid] === true,
        );

        if (usersWithReaction[userId]) {
          currentUserReaction = reactionType; // User's current reaction
        }

        if (usersWithTrueReaction.length > 0) {
          reactionIcons[reactionType] = usersWithTrueReaction.length;
        }
      });

      setReactions(reactionIcons);
      setUserReaction(currentUserReaction);
    };

    fetchReactions();
  }, [articleId, userId]);

  // Close the reaction picker after some time
  useEffect(() => {
    if (showReactionPicker) {
      const timeout = setTimeout(() => {
        setShowReactionPicker(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [showReactionPicker]);

  // Optimistically update reactions after a user selects one
  const handleReactionPress = async reactionType => {
    let updatedReactions = {...reactions};
    let updatedReactionCount = reactionCount;

    // Remove the user's existing reaction if any
    if (userReaction) {
      await removeUserReactionFromFirestore(userReaction, userId, articleId);
      dispatch(removeUserReactions({articleId}));

      // Decrease the count for the previous reaction and remove it if the count reaches 0
      if (updatedReactions[userReaction] > 1) {
        updatedReactions[userReaction] = updatedReactions[userReaction] - 1;
      } else {
        delete updatedReactions[userReaction]; // Remove the reaction if count reaches 0
      }
      updatedReactionCount--;
    }

    // Add the new reaction
    await addUserReactionToFirestore(reactionType, userId, articleId);
    dispatch(saveUserReactions({articleId, reaction: reactionType}));

    // Optimistically update the state for the new reaction
    updatedReactions[reactionType] = (updatedReactions[reactionType] || 0) + 1;
    updatedReactionCount++;

    // Update the state with the new reaction and updated counts
    setUserReaction(reactionType);
    setReactions(updatedReactions);
    setReactionCount(updatedReactionCount);

    setShowReactionPicker(false); // Hide the emoji picker after selection
  };

  // Handle like/reaction button press
  const handlePress = async () => {
    if (userReaction) {
      // Remove current reaction
      await removeUserReactionFromFirestore(userReaction, userId, articleId);
      dispatch(removeUserReactions({articleId}));
      setUserReaction(null);

      // Optimistically update reaction count
      setReactions(prevReactions => ({
        ...prevReactions,
        [userReaction]: prevReactions[userReaction] - 1,
      }));
      setReactionCount(reactionCount - 1);
    } else {
      // Add LIKE reaction by default
      await addUserReactionToFirestore(EMOJIE.LIKE.type, userId, articleId);
      dispatch(saveUserReactions({articleId, reaction: EMOJIE.LIKE.type}));
      setUserReaction(EMOJIE.LIKE.type);

      // Optimistically update reaction count
      setReactions(prevReactions => ({
        ...prevReactions,
        LIKE: (prevReactions.LIKE || 0) + 1,
      }));
      setReactionCount(reactionCount + 1);
    }
  };

  // Handle long press to open emoji picker
  const handleLongPress = () => {
    setShowReactionPicker(true);
  };

  const handleSelectReaction = reactionType => {
    handleReactionPress(reactionType);
  };

  return (
    <Pressable
      style={[
        styles.card,
        {backgroundColor: colors.bulletinBackground},
        boxShadow(colors.card),
      ]}
      onPress={() => setShowReactionPicker(false)}>
      {cardImg ? (
        <Image style={styles.cardImg} source={{uri: cardImg}} />
      ) : (
        <Image style={styles.cardImg} source={IMAGES.NEWS} />
      )}

      <View style={styles.cardContent}>
        <Text
          style={[styles.cardTitle, {color: colors.text}]}
          numberOfLines={3}
          onPress={onPress}>
          {title}
        </Text>

        <View style={styles.cardSubTitle}>
          <Text
            style={[
              styles.cardSubTitleLeft,
              {color: dark ? colors.icon : colors.text},
            ]}>
            {source} • {time}
          </Text>

          <Text
            style={[
              styles.cardSubTitleRight,
              {
                color: colors.tileText,
                backgroundColor: dark
                  ? colors.background
                  : colors.tileBackground,
              },
            ]}>
            {'Business'}
          </Text>
        </View>

        <Text
          style={[styles.cardDesc, {color: dark ? colors.icon : colors.text}]}
          numberOfLines={5}
          onPress={onPress}>
          {desc}
        </Text>

        <Text style={styles.cardReadMore} numberOfLines={2} onPress={onPress}>
          Tap to read more by{' '}
          <Text style={[styles.authorName, {color: colors.text}]}>
            {author}
          </Text>
        </Text>

        <View style={styles.cardActionTab}>
          <View style={styles.cardReact}>
            {Object.keys(reactions).length > 0 ? (
              <View style={[styles.reactionIconContainer]}>
                {Object.keys(reactions).map((reactionType, index) => {
                  const iconSrc = EMOJIE[reactionType].src;
                  return (
                    <View key={index} style={styles.reactionIconWrapper}>
                      <Image style={[styles.reactionIcon]} source={iconSrc} />
                    </View>
                  );
                })}
              </View>
            ) : (
              <Image style={[styles.cardReactIcon]} source={EMOJIE.LIKE.src} />
            )}
            <Text style={[styles.cardReactCount, {color: colors.text}]}>
              {reactionCount}
            </Text>
          </View>

          <View style={styles.cardAction}>
            <TouchableOpacity
              style={styles.cardReact}
              onPress={handlePress}
              onLongPress={handleLongPress}>
              <Image
                style={[
                  styles.cardReactIcon,
                  userReaction ? {} : {tintColor: colors.icon},
                ]}
                source={
                  userReaction ? EMOJIE[userReaction].src : EMOJIE.LIKE.src
                }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardReact} onPress={onShare}>
              <Image
                style={[styles.cardReactIcon, {tintColor: colors.icon}]}
                source={ICONS.SHARE}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardReact} onPress={onAudio}>
              <Image
                style={[styles.cardReactIcon, {tintColor: colors.icon}]}
                source={ICONS.HEADPHONE}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.cardReact,
                {width: horizontalScale(25), height: verticalScale(25)},
              ]}
              onPress={onMore}>
              <Image
                style={[styles.cardReactIcon, {tintColor: colors.icon}]}
                source={ICONS.MORE}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {showReactionPicker && (
        <EmojiPicker onSelectReaction={handleSelectReaction} />
      )}
    </Pressable>
  );
};

export default NewsCard;
