import {View, Image, Text, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../constants/Images';
import {useTheme} from '@react-navigation/native';

const SplashScreen = () => {
  const {colors, dark} = useTheme();
  StatusBar.setBackgroundColor(colors.background, true);
  StatusBar.setBarStyle(dark ? 'light-content' : 'dark-content', true);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.imageContainer}>
        <Image source={IMAGES.LOGO} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.appName, {color: 'black'}]}>JioNews</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
