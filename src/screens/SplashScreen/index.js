import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../constants/Images';
import {useTheme} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.imageContainer}>
        <Image source={IMAGES.LOGO} style={styles.logo} />
      </View>
    </View>
  );
};

export default SplashScreen;
