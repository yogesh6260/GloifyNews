import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {ICONS} from '../../../constants';
import styles from './styles';
import {moderateScale} from '../../../styles/metrics';
import {useTheme} from '@react-navigation/native';

const MagDetail = ({navigation, route}) => {
  const {
    title,
    image,
    pdfLink,
    publishedBy,
    language,
    frequency,
    category,
    date,
  } = route.params.item;
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
          android_ripple={{
            color: 'lightgray',
            borderless: false,
            radius: moderateScale(12),
          }}>
          <Image
            source={ICONS.BACK}
            style={[styles.backIcon, {tintColor: colors.text}]}
          />
        </Pressable>
        <Text style={[styles.headerText, {color: colors.text}]}>{title}</Text>
      </View>
      <Pressable
        android_ripple={{color: 'lightgray', borderless: false}}
        style={[
          styles.magzineContainer,
          {backgroundColor: colors.bulletinBackground},
        ]}
        onPress={() =>
          navigation.navigate('MagViewer', {
            title: title,
            date: date,
            pdfLink: pdfLink,
          })
        }>
        <View style={styles.posterContainer}>
          <Image source={image} style={styles.poster} />
        </View>
        <View style={styles.subContainerRight}>
          <Text style={[styles.date, {color: colors.text}]} numberOfLines={1}>
            {date}
          </Text>
          <View style={styles.textContainer}>
            <Text style={[styles.label, {color: colors.text}]}>
              {'Published by'}
            </Text>
            <Text style={[styles.text, {color: colors.text}]}>
              {publishedBy}
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.label, {color: colors.text}]}>
              {'Language'}
            </Text>
            <Text style={[styles.text, {color: colors.text}]}>{language}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.label, {color: colors.text}]}>
              {'Category'}
            </Text>
            <Text style={[styles.text, {color: colors.text}]}>{category}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.label, {color: colors.text}]}>
              {'Frequency'}
            </Text>
            <Text style={[styles.text, {color: colors.text}]}>{frequency}</Text>
          </View>
          <View style={styles.reactionContainer}>
            <Pressable android_ripple={{color: 'lightgray', borderless: false}}>
              <Image
                source={ICONS.LIKE}
                style={[
                  styles.reactionIcon,
                  {
                    tintColor: colors.icon,
                  },
                ]}
              />
            </Pressable>
            <View
              style={[styles.borderRight, {borderRightColor: colors.icon}]}
            />
            <Pressable android_ripple={{color: 'lightgray', borderless: false}}>
              <Image
                source={ICONS.SHARE}
                style={[styles.reactionIcon, {tintColor: colors.icon}]}
              />
            </Pressable>
            <View
              style={[styles.borderRight, {borderRightColor: colors.icon}]}
            />
            <Pressable android_ripple={{color: 'lightgray', borderless: false}}>
              <Image
                source={ICONS.DOWNLOAD}
                style={[styles.reactionIcon, {tintColor: colors.icon}]}
              />
            </Pressable>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MagDetail;
