import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {IMAGES} from '../../../constants/Images';
import styles from './styles';
import {ICONS} from '../../../constants/Icons';
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
      style={[styles.bulletin, {backgroundColor: colors.tileBackground}]}
      onPress={handlePress}>
      <View style={styles.bulletinLeft}>
        <Text style={[styles.bulletinHeading, {color: colors.text}]}>
          {heading}
        </Text>
        <View style={styles.bulletinLeftBottom}>
          <Text style={[styles.bulletinSource, {color: colors.text}]}>
            {source}
          </Text>
          <View style={styles.bulletinSubLeft}>
            <Text style={[styles.bulletinReadTime, {color: colors.text}]}>
              {readTime}m
            </Text>
            <TouchableOpacity onPress={handleMore}>
              <Image
                source={ICONS.MORE}
                style={[styles.moreIcon, {tintColor: colors.text}]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bulletinRight}>
        {urlToImage ? (
          <Image source={{uri: urlToImage}} style={styles.bulletinImg} />
        ) : (
          <Image source={IMAGES.LOGO} style={styles.bulletinImg} />
        )}
      </View>
    </Pressable>
  );
};

export default NewsBulletin;
