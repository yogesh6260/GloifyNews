import {View, Image, Animated, Pressable} from 'react-native';
import React from 'react';
import {ICONS} from '../../../constants';
import styles from './styles';
import {useNavigation, useTheme} from '@react-navigation/native';
import {moderateScale} from '../../../styles/metrics';

const Header = props => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  const {state, descriptors, position} = props;

  const activeScreen = state.routeNames[state.index];

  const isShortVideosScreen = activeScreen === 'Short Videos';

  return (
    <View
      style={[
        isShortVideosScreen
          ? styles.transparentHeaderContainer
          : styles.headerContainer,
        {
          backgroundColor: isShortVideosScreen
            ? 'transparent'
            : colors.background,
        },
      ]}>
      <Pressable
        android_ripple={{
          color: 'lightgray',
          borderless: false,
          radius: moderateScale(22),
        }}
        style={styles.menuBtn}
        onPress={() => navigation.navigate('Drawer')}>
        <Image
          source={ICONS.MENU}
          style={[
            styles.menuIcon,
            {tintColor: isShortVideosScreen ? 'white' : colors.headerLabel},
          ]}
        />
      </Pressable>

      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            navigation.navigate(route.name);
          };

          const onLongPress = () => {
            navigation.navigate(route.name);
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0.9)),
          });
          return (
            <Pressable
              android_ripple={{
                color: 'lightgray',
                borderless: false,
              }}
              key={index}
              style={[
                styles.tabBarLink,
                {
                  borderBottomColor: isFocused
                    ? colors.btnBackground
                    : isShortVideosScreen
                    ? 'transparent'
                    : colors.background,
                },
              ]}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Animated.Text
                style={[
                  styles.tabBarLinkLabel,
                  {
                    color: isFocused
                      ? colors.btnBackground
                      : isShortVideosScreen
                      ? 'white'
                      : colors.headerLabel,
                  },
                ]}>
                {label}
              </Animated.Text>
            </Pressable>
          );
        })}
      </View>
      <Pressable
        android_ripple={{
          color: 'lightgray',
          borderless: true,
          radius: moderateScale(45),
        }}
        style={styles.searchBtn}
        onPress={() => navigation.navigate('SearchTab')}>
        <Image
          source={ICONS.SEARCH}
          style={[
            styles.searchIcon,
            {tintColor: isShortVideosScreen ? 'white' : colors.drawerIcon},
          ]}
        />
      </Pressable>
    </View>
  );
};

export default Header;
