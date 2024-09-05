import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import React from 'react';
import {ICONS} from '../../../constants/Icons';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const Header = props => {
  const {colors} = useTheme();
  const {state, descriptors, navigation, position} = props;

  return (
    <View
      style={[styles.headerContainer, {backgroundColor: colors.background}]}>
      <TouchableOpacity
        style={styles.menuBtn}
        onPress={() => navigation.openDrawer()}>
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
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
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
