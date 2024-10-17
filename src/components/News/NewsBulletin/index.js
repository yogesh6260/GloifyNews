import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {IMAGES, ICONS} from '../../../constants';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {moderateScale} from '../../../styles/metrics';

const NewsBulletin = ({
  heading,
  source,
  readTime,
  urlToImage,
  handlePress,
  handleMore,
}) => {
  const {colors} = useTheme();

  const [loading, setLoading] = useState(true);

  return (
    <Pressable
      android_ripple={{
        color: 'lightgray',
        borderless: false,
        radius: moderateScale(20),
      }}
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
            <Pressable
              android_ripple={{
                color: 'lightgray',
                borderless: false,
                radius: moderateScale(20),
              }}
              onPress={handleMore}>
              <Image
                source={ICONS.MORE}
                style={[styles.moreIcon, {tintColor: colors.icon}]}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.bulletinRight}>
        <View style={styles.imageContainer}>
          {/* Skeleton Placeholder */}
          {loading && (
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                width="100%"
                height="100%"
                borderRadius={styles.imageContainer.borderRadius} // Match image border radius
              />
            </SkeletonPlaceholder>
          )}
          <Image
            source={urlToImage ? {uri: urlToImage} : IMAGES.NEWS} // Display actual image if available
            style={[styles.bulletinImg, loading && {display: 'none'}]} // Hide until loaded
            onLoadStart={() => setLoading(true)} // Set loading to true when starting to load
            onLoadEnd={() => setLoading(false)} // Set loading to false when image has loaded
          />
        </View>
      </View>
    </Pressable>
  );
};

export default NewsBulletin;
