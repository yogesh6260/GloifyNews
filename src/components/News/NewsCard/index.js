import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {ICONS} from '../../../constants/Icons';
import {IMAGES} from '../../../constants/Images';
import {useTheme} from '@react-navigation/native';
import {boxShadow} from '../../../styles/mixins';

const NewsCard = ({
  cardImg,
  title,
  desc,
  source,
  time,
  category,
  author,
  onPress,
  navigation,
}) => {
  const {colors} = useTheme();
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
              style={[styles.cardReactIcon, {tintColor: colors.text}]}
              source={ICONS.LIKE}
            />

            <Text style={[styles.cardReactCount, {color: colors.text}]}>
              {0}
            </Text>
          </View>
          <View style={styles.cardAction}>
            <TouchableOpacity style={styles.cardReact}>
              <Image
                style={[styles.cardReactIcon, {tintColor: colors.text}]}
                source={ICONS.LIKE}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardReact}>
              <Image
                style={[styles.cardReactIcon, {tintColor: colors.text}]}
                source={ICONS.SHARE}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardReact}
              onPress={() =>
                navigation.navigate('AudioTab', {
                  source: {
                    title,
                    desc,
                  },
                })
              }>
              <Image
                style={[styles.cardReactIcon, {tintColor: colors.text}]}
                source={ICONS.HEADPHONE}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardReact}>
              <Image
                style={[styles.cardReactIcon, {tintColor: colors.text}]}
                source={ICONS.MORE}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default NewsCard;
