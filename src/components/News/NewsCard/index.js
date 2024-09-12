import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {EMOJIE, ICONS} from '../../../constants/Icons';
import {IMAGES} from '../../../constants/Images';
import {useTheme} from '@react-navigation/native';
import {boxShadow} from '../../../styles/mixins';
import EmojiPicker from '../../Common/EmojiPicker';
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
  const {colors} = useTheme();
  const [showReactionPicker, setShowReactionPicker] = useState(false);
  const [reactionCount, setReactionCount] = useState(0);
  const [reactions, setReactions] = useState({});

  const userId = useSelector(state => state.user.data.id);
  const userReaction = useSelector(
    state =>
      state.user.preference.reactions &&
      state.user.preference.reactions.find(
        reaction => reaction.articleId === articleId,
      ),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchReactions = async () => {
      const {totalCount, reactions} = await getReactionsFromFirestore(
        articleId,
      );
      console.log(reactions);

      setReactionCount(totalCount);
      const reactionIcons = {};
      Object.keys(reactions).forEach(reactionType => {
        const usersWithReaction = reactions[reactionType];
        const usersWithTrueReaction = Object.keys(usersWithReaction).filter(
          userId => usersWithReaction[userId] === true,
        );
        if (usersWithTrueReaction.length > 0) {
          reactionIcons[reactionType] = usersWithTrueReaction.length;
        }
      });

      setReactions(reactionIcons);
    };
    fetchReactions();
  }, [articleId]);

  const renderReactionIcons = (
    <View
      style={[
        styles.reactionIconContainer,
        {backgroundColor: colors.background},
      ]}>
      {reactions
        ? Object.keys(reactions).map((reactionType, index) => {
            const iconSrc = EMOJIE[reactionType].src;
            return (
              <View key={index} style={styles.reactionIconWrapper}>
                <Image
                  style={[
                    styles.reactionIcon,
                    {backgroundColor: colors.background},
                  ]}
                  source={iconSrc}
                />
              </View>
            );
          })
        : null}
    </View>
  );

  const handleReactionPress = async reactionType => {
    if (userReaction) {
      // If reaction already present remove it
      await removeUserReactionFromFirestore(
        userReaction.reaction,
        userId,
        articleId,
      );
      dispatch(removeUserReactions({articleId}));
      await addUserReactionToFirestore(reactionType, userId, articleId);
      dispatch(saveUserReactions({articleId, reaction: reactionType}));
    } else {
      // Add new reaction
      await addUserReactionToFirestore(reactionType, userId, articleId);
      dispatch(saveUserReactions({articleId, reaction: reactionType}));
    }

    // Close the reaction picker if it is open
    setShowReactionPicker(false);
  };

  const handlePress = async () => {
    if (userReaction && userReaction.reaction) {
      await removeUserReactionFromFirestore(
        userReaction.reaction,
        userId,
        articleId,
      );
      dispatch(removeUserReactions({articleId}));
    } else {
      await addUserReactionToFirestore(EMOJIE.LIKE.type, userId, articleId);
      dispatch(saveUserReactions({articleId, reaction: EMOJIE.LIKE.type}));
    }
  };

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
        {backgroundColor: colors.background},
        boxShadow(colors.card),
      ]}>
      {cardImg ? (
        <Image style={styles.cardImg} source={{uri: cardImg}} />
      ) : (
        <Image style={styles.cardImg} source={IMAGES.LOGO} />
      )}

      <View style={styles.cardContent}>
        <Text
          style={[styles.cardTitle, {color: colors.text}]}
          numberOfLines={3}
          onPress={onPress}>
          {title}
        </Text>

        <View style={styles.cardSubTitle}>
          <Text style={[styles.cardSubTitleLeft, {color: colors.text}]}>
            {source} • {time}
          </Text>

          <Text style={[styles.cardSubTitleRight, {color: colors.text}]}>
            category
          </Text>
        </View>

        <Text
          style={[styles.cardDesc, {color: colors.text}]}
          numberOfLines={5}
          onPress={onPress}>
          {desc}
        </Text>

        <Text style={styles.cardReadMore} numberOfLines={1} onPress={onPress}>
          Tap to read more by{' '}
          <Text style={[styles.authorName, {color: colors.text}]}>
            {author}
          </Text>
        </Text>

        <View style={styles.cardActionTab}>
          <View style={styles.cardReact}>
            {userReaction ? (
              renderReactionIcons
            ) : (
              <Image
                style={[styles.cardReactIcon, {tintColor: colors.text}]}
                source={EMOJIE.LIKE.src}
              />
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
                  userReaction ? {} : {tintColor: colors.text},
                ]}
                source={
                  userReaction
                    ? EMOJIE[userReaction.reaction].src
                    : EMOJIE.LIKE.src
                }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardReact} onPress={onShare}>
              <Image
                style={[styles.cardReactIcon, {tintColor: colors.text}]}
                source={ICONS.SHARE}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardReact} onPress={onAudio}>
              <Image
                style={[styles.cardReactIcon, {tintColor: colors.text}]}
                source={ICONS.HEADPHONE}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardReact} onPress={onMore}>
              <Image
                style={[styles.cardReactIcon, {tintColor: colors.text}]}
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
