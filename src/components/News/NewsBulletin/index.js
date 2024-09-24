import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {IMAGES, ICONS} from '../../../constants';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const NewsBulletin = ({
  heading,
  source,
  readTime,
  urlToImage,
  handlePress,
  handleMore,
}) => {
  const {colors} = useTheme();

  return (
    <Pressable
      style={[styles.bulletin, {backgroundColor: colors.bulletinBackground}]}
      onPress={handlePress}>
      <View style={styles.bulletinLeft}>
        <Text style={[styles.bulletinHeading, {color: colors.text}]}>
          {heading}
        </Text>
        <View style={styles.bulletinLeftBottom}>
          <Text style={[styles.bulletinSource, {color: colors.icon}]}>
            {source}
          </Text>
          <View style={styles.bulletinSubLeft}>
            <Text style={[styles.bulletinReadTime, {color: colors.icon}]}>
              {readTime}m
            </Text>
            <TouchableOpacity onPress={handleMore}>
              <Image
                source={ICONS.MORE}
                style={[styles.moreIcon, {tintColor: colors.icon}]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bulletinRight}>
        {urlToImage ? (
          <Image source={{uri: urlToImage}} style={styles.bulletinImg} />
        ) : (
          <Image source={IMAGES.NEWS} style={styles.bulletinImg} />
        )}
      </View>
    </Pressable>
  );
};

export default NewsBulletin;
