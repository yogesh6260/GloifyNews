import {View, Text, Image, Switch, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './styles';
import {ICONS, STRINGS} from '../../../constants';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  beforeScreen,
  changeCategory,
  saveuserTheme,
  setLogout,
} from '../../../redux/actions/user/userActions';
import CustomDropDown from '../CustomDropDown';
import ConfirmationModal from '../ConfirmationModal';
import {verticalScale} from '../../../styles/metrics';

const CustomDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {colors} = useTheme();

  const user = useSelector(state => state.user) || {};

  const theme = user.preference.theme;

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const bottomSheetRef = useRef();

  const accountSettings = [
    {
      label: 'Change Category',
      onPress: () => {
        dispatch(beforeScreen('settings'));
        dispatch(changeCategory(true));
      },
    },
  ];

  const handleCancel = () => {
    bottomSheetRef.current.close();
  };
  const handleConfirm = () => {
    dispatch(setLogout());
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(saveuserTheme(newTheme));
  };

  const handleLogout = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
    }
  };

  return (
    <View
      style={[styles.container, {backgroundColor: colors.drawerBackground}]}>
      <View style={styles.contentWrapper}>
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={ICONS.BACK}
                style={[styles.backIcon, {tintColor: colors.text}]}
              />
            </TouchableOpacity>
            <Text style={[styles.headerTitle, {color: colors.text}]}>
              Jio News
            </Text>
          </View>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
              <Image
                source={ICONS.MOON}
                style={[styles.menuIcon, {tintColor: colors.drawerIcon}]}
              />
              <Text style={[styles.menuLabel, {color: colors.text}]}>
                {STRINGS.DARK_MODE}
              </Text>
              <Switch
                style={styles.switch}
                value={theme === 'dark'}
                onValueChange={toggleTheme}
                thumbColor={theme === 'dark' ? colors.drawerLabel : 'lightgray'}
                trackColor={{true: 'green', false: 'gray'}}
              />
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => setIsOpen(!isOpen)}
                activeOpacity={0.8}>
                <Image
                  source={ICONS.SETTING}
                  style={[styles.menuIcon, {tintColor: colors.drawerIcon}]}
                />
                <Text style={[styles.menuLabel, {color: colors.drawerLabel}]}>
                  {STRINGS.PROFILE_SETTINGS}
                </Text>
                <Image
                  source={ICONS.RIGHT}
                  style={[styles.rightIcon, {tintColor: colors.drawerIcon}]}
                />
              </TouchableOpacity>
              <CustomDropDown isOpen={isOpen} settings={accountSettings} />
            </View>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={handleLogout}
              activeOpacity={0.8}>
              <Image
                source={ICONS.LOGOUT}
                style={[styles.menuIcon, {tintColor: colors.drawerIcon}]}
              />
              <Text style={[styles.menuLabel, {color: colors.drawerLabel}]}>
                {STRINGS.LOGOUT}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={[
              styles.menuLabel,
              styles.footer,
              {color: colors.drawerLabel},
            ]}>
            {'V-1.0'}
          </Text>
        </View>
        <ConfirmationModal
          ref={bottomSheetRef}
          handleCancel={handleCancel}
          handleConfirm={handleConfirm}
          actionText={'Log Out'}
          confirmText={
            'JioNews is the easiest way to stay\nupdated - are you sure you want to leave?'
          }
          height={verticalScale(230)}
          btnHeight={verticalScale(60)}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;
