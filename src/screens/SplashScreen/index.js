import {View, Image, Text, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../constants/Images';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const SplashScreen = () => {
  const {colors, dark} = useTheme();
  const {t} = useTranslation();
  StatusBar.setBackgroundColor(colors.background, true);
  StatusBar.setBarStyle(dark ? 'light-content' : 'dark-content', true);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.imageContainer}>
        <Image source={IMAGES.LOGO} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.appName, {color: 'black'}]}>
          {t('screens.splash.title')}
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
