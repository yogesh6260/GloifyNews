import {View, Text, Image, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ICONS} from '../../../constants/Icons';
import {STRINGS} from '../../../constants/Strings';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  saveuserTheme,
  setLogout,
} from '../../../redux/actions/user/userActions';

const CustomDrawer = () => {
  const {colors} = useTheme();

  const user = useSelector(state => state.user) || {};
  const theme = user.preference.theme;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(saveuserTheme(newTheme));
  };

  const handleLogout = () => {
    dispatch(setLogout());
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View
      style={[styles.container, {backgroundColor: colors.drawerBackground}]}>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={ICONS.BACK}
              style={[styles.backIcon, {tintColor: colors.text}]}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, {color: colors.text}]}>
            News App
          </Text>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={ICONS.MOON}
              style={[styles.menuIcon, {tintColor: colors.drawerLabel}]}
            />
            <Text style={[styles.menuLabel, {color: colors.text}]}>
              {STRINGS.DARK_MODE}
            </Text>
            <Switch
              style={styles.switch}
              value={theme === 'dark'}
              onValueChange={toggleTheme}
              thumbColor={theme === 'dark' ? colors.drawerLabel : 'lightgray'}
              trackColor={{true: 'gray', false: 'gray'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('SettingTab')}>
            <Image
              source={ICONS.SETTING}
              style={[styles.menuIcon, {tintColor: colors.drawerLabel}]}
            />
            <Text style={[styles.menuLabel, {color: colors.drawerLabel}]}>
              {STRINGS.PROFILE_SETTINGS}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Image
              source={ICONS.LOGOUT}
              style={[styles.menuIcon, {tintColor: colors.drawerLabel}]}
            />
            <Text style={[styles.menuLabel, {color: colors.drawerLabel}]}>
              {STRINGS.LOGOUT}
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.menuLabel,
            styles.footer,
            {color: colors.drawerLabel},
          ]}>
          {'V-1.0'}
        </Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
