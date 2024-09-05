import {View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {IMAGES} from '../../constants/Images';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();
  const user = useSelector(state => state.user);

  useEffect(() => {
    setTimeout(() => {
      if (!user.isLoggedIn) {
        navigation.navigate('Login');
      } else {
        if (user.preference.newsTopics.length === 0) {
          navigation.navigate('Category');
        } else {
          navigation.navigate('Dashboard');
        }
      }
    }, 3000);
  });
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <StatusBar backgroundColor={colors.background} />
      <Image source={IMAGES.LOGO} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;
