import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {EMOJIE, ICONS} from '../../../constants/Icons';
import {IMAGES} from '../../../constants/Images';
import {useTheme} from '@react-navigation/native';
import {boxShadow} from '../../../styles/mixins';
import EmojiPicker from '../../Common/EmojiPicker';
import {useDispatch, useSelector} from 'react-redux';
import {
  addUserReactionToFirestore,
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
  const [selectedReaction, setSelectedReaction] = useState(
    userReaction ? EMOJIE[userReaction.reaction].src : null,
  );

  const userId = useSelector(state => state.user.data.id);
  const userReaction = useSelector(
    state =>
      state.user.preference.reactions &&
      state.user.preference.reactions.find(
        reaction => reaction.articleId === articleId,
      ),
  );
  // console.log(userReaction);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchReactions = async () => {
  //     const fetchedReactions = await getReactionsFromFirestore(articleId);

  //     setReactions(fetchedReactions);
  //   };

  //   fetchReactions();
  // }, [articleId]);

  const handleReactionPress = async reactionType => {
    // Get the icon source for the selected reaction type
    const selectedIcon = Object.keys(EMOJIE).find(
      key => EMOJIE[key].type === reactionType,
    );

    const iconSrc = selectedIcon ? EMOJIE[selectedIcon].src : null;

    if (selectedReaction === iconSrc) {
      // If the same reaction is selected, remove it
      await removeUserReactionFromFirestore(reactionType, userId, articleId);
      dispatch(removeUserReactions({articleId}));
      setSelectedReaction(null);
    } else {
      // Add new reaction
      await addUserReactionToFirestore(reactionType, userId, articleId);
      dispatch(saveUserReactions({articleId, reaction: reactionType}));
      setSelectedReaction(iconSrc);
    }

    // Close the reaction picker if it is open
    setShowReactionPicker(false);
  };

  const handlePress = async () => {
    if (userReaction && userReaction.reaction) {
      const reactionType = Object.keys(EMOJIE).find(
        key => EMOJIE[key].src === selectedReaction,
      );
      await removeUserReactionFromFirestore(reactionType, userId, articleId);
      dispatch(removeUserReactions({articleId}));
      setSelectedReaction(null);
    } else {
      await addUserReactionToFirestore(EMOJIE.LIKE.type, userId, articleId);
      dispatch(saveUserReactions({articleId, reaction: EMOJIE.LIKE.type}));
      setSelectedReaction(EMOJIE.LIKE.src);
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
      ]}
      onPress={onPress}>
      {cardImg ? (
        <Image style={styles.cardImg} source={{uri: cardImg}} />
      ) : (
        <Image style={styles.cardImg} source={IMAGES.LOGO} />
      )}

      <View style={styles.cardContent}>
        <Text
          style={[styles.cardTitle, {color: colors.text}]}
          numberOfLines={3}>
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

        <Text style={[styles.cardDesc, {color: colors.text}]} numberOfLines={5}>
          {desc}
        </Text>

        <Text style={styles.cardReadMore} numberOfLines={1}>
          Tap to read more by{' '}
          <Text style={[styles.authorName, {color: colors.text}]}>
            {author}
          </Text>
        </Text>

        <View style={styles.cardActionTab}>
          <View style={styles.cardReact}>
            <Image
              style={[
                styles.cardReactIcon,
                selectedReaction ? {} : {tintColor: colors.text},
              ]}
              source={selectedReaction || EMOJIE.LIKE.src}
            />
            <Text style={[styles.cardReactCount, {color: colors.text}]}>
              {0}
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
                  selectedReaction ? {} : {tintColor: colors.text},
                ]}
                source={selectedReaction || EMOJIE.LIKE.src}
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
