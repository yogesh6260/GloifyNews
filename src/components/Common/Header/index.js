import {View, TouchableOpacity, Image, Animated} from 'react-native';
import React from 'react';
import {ICONS} from '../../../constants/Icons';
import styles from './styles';
import {useNavigation, useTheme} from '@react-navigation/native';

const Header = props => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const {state, descriptors, position} = props;

  return (
    <View
      style={[styles.headerContainer, {backgroundColor: colors.background}]}>
      <TouchableOpacity
        style={styles.menuBtn}
        onPress={() => navigation.navigate('Drawer')}>
        <Image
          source={ICONS.MENU}
          style={[styles.menuIcon, {tintColor: colors.text}]}
        />
      </TouchableOpacity>
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
            <TouchableOpacity
              key={index}
              style={[
                styles.tabBarLink,
                {
                  borderBottomColor: isFocused
                    ? colors.border
                    : colors.background,
                },
              ]}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Animated.Text
                style={[styles.tabBarLinkLabel, {color: colors.text, opacity}]}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        style={styles.searchBtn}
        onPress={() => navigation.navigate('SearchTab')}>
        <Image
          source={ICONS.SEARCH}
          style={[styles.searchIcon, {tintColor: colors.text}]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
