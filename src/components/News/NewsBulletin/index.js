import {View, Text, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../../constants/Images';
import styles from './styles';
import {ICONS} from '../../../constants/Icons';
import {useTheme} from '@react-navigation/native';

const NewsBulletin = ({heading, source, readTime, urlToImage}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.bulletin, {backgroundColor: colors.tileBackground}]}>
      <View style={styles.bulletinLeft}>
        <Text style={[styles.bulletinHeading, {color: colors.text}]}>
          {heading}
        </Text>
        <View style={styles.bulletinLeftBottom}>
          <Text style={styles.bulletinSource}>{source}</Text>
          <View style={styles.bulletinSubLeft}>
            <Text style={styles.bulletinReadTime}>{readTime}</Text>
            <Image source={ICONS.MORE} style={styles.moreIcon} />
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
    </View>
  );
};

export default NewsBulletin;
