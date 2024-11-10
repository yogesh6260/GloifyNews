import {View, Text, Pressable, Animated} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {ICONS} from '../../../constants';
import {moderateScale} from '../../../styles/metrics';
import {getFontFamily} from '../../../utils/fontFamily';

const BottomTab = props => {
  const {colors, dark} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {state} = props;

  const routeIcons = {
    News: ICONS.NEWS,
    'Mags & Papers': ICONS.MAG,
    'TV & Videos': ICONS.TV,
    Coupons: ICONS.COUPON,
  };

  return (
    <View
      style={[
        styles.bottomTabContainer,
        {backgroundColor: colors.bulletinBackground},
      ]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          navigation.navigate(route.name);
        };

        return (
          <Pressable
            key={index}
            android_ripple={{
              color: 'lightgray',
              borderless: false,
              radius: moderateScale(12),
            }}
            onPress={onPress}
            style={styles.tab}>
            <Animated.Image
              source={routeIcons[route.name]}
              style={[
                styles.tabBarIcon,
                {tintColor: isFocused ? colors.border : colors.icon},
              ]}
            />
            <Animated.Text
              style={[
                styles.tabBarLabel,
                {
                  color: isFocused ? colors.border : colors.icon,
                  fontFamily: getFontFamily(isFocused ? 'semibold' : 'normal'),
                },
              ]}>
              {route.name}
            </Animated.Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default BottomTab;
