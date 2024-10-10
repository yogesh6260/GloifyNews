import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useRef, useState, useMemo} from 'react';
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
import {moderateScale, verticalScale} from '../../../styles/metrics';
import Share from 'react-native-share';
import Snackbar from '../Snackbar';

const CustomDrawer = () => {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [settingDropDown, setSettingDropDown] = useState(false);
  const [aboutDropDown, setAboutDropDown] = useState(false);
  const {colors} = useTheme();

  const currentTheme = useMemo(() => {
    // Memoize the theme to prevent unnecessary re-renders
    return colors.theme;
  }, [colors]);

  const user = useSelector(state => state.user) || {};

  const userTheme = user.preference.theme;

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const bottomSheetRef = useRef();

  const settings = [
    {
      label: 'Category',
      onPress: () => {
        dispatch(beforeScreen('settings'));
        dispatch(changeCategory(true));
      },
    },
    {
      label: 'Language',
      onPress: () => {
        navigation.navigate('Language');
      },
    },
    {
      label: 'Manage Live Ticker',
      onPress: () => {
        navigation.navigate('ManageLiveTicker');
      },
    },
    {
      label: 'Storage Preference',
      onPress: () => {
        navigation.navigate('StoragePreference');
      },
    },
  ];

  const aboutItems = [
    {
      label: 'Terms of Service',
      onPress: () => {
        navigation.navigate('TOS');
      },
    },
    {
      label: 'Contact Us',
      onPress: () => {
        navigation.navigate('ContactUs');
      },
    },
    {
      label: 'Feedback',
      onPress: () => {
        navigation.navigate('Feedback');
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
    const newTheme = userTheme === 'light' ? 'dark' : 'light';
    dispatch(saveuserTheme(newTheme));
  };

  const handleInvite = () => {
    Share.open({
      title: "You're invited to GloifyNews",
      url: 'https://github.com/Gloifyogesh/NewsApp',
    })
      .then(res => {
        if (res.success) {
          setIsVisible(true);
          setMessage('Article Shared!');
        }
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  const handleLogout = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
    }
  };

  return (
    <>
      <View
        style={[styles.container, {backgroundColor: colors.drawerBackground}]}>
        <Pressable style={styles.contentWrapper} onPress={() => {}}>
          <View style={{width: '100%'}}>
            <View style={styles.header}>
              <Pressable
                android_ripple={{
                  color: 'lightgray',
                  borderless: true,
                  radius: moderateScale(50),
                }}
                style={styles.backBtn}
                onPress={() => navigation.goBack()}>
                <Image
                  source={ICONS.BACK}
                  style={[styles.backIcon, {tintColor: colors.text}]}
                />
              </Pressable>
              <Text style={[styles.headerTitle, {color: colors.text}]}>
                GloifyNews
              </Text>
            </View>
            <View style={styles.menu}>
              <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
                <Image
                  source={ICONS.MOON}
                  style={[styles.menuIcon, {tintColor: colors.drawerIcon}]}
                />
                <Text style={[styles.menuLabel, {color: colors.drawerLabel}]}>
                  {STRINGS.DARK_MODE}
                </Text>
                <Switch
                  style={styles.switch}
                  value={userTheme === 'dark'}
                  onValueChange={toggleTheme}
                  thumbColor={
                    userTheme === 'dark' ? colors.drawerLabel : 'white'
                  }
                  trackColor={{true: 'green', false: '#a0a0a0'}}
                />
              </TouchableOpacity>
              <Pressable
                style={styles.menuItem}
                android_ripple={{
                  color: 'lightgray',
                  borderless: false,
                }}
                onPress={() => navigation.navigate('Downloads')}>
                <Image
                  source={ICONS.DOWNLOAD}
                  style={[styles.menuIcon, {tintColor: colors.drawerIcon}]}
                />
                <Text style={[styles.menuLabel, {color: colors.drawerLabel}]}>
                  {STRINGS.DOWNLOADS}
                </Text>
              </Pressable>
              <Pressable
                style={styles.menuItem}
                android_ripple={{
                  color: 'lightgray',
                  borderless: false,
                }}
                onPress={() => navigation.navigate('Polls')}>
                <Image
                  source={ICONS.POLL}
                  style={[styles.menuIcon, {tintColor: colors.drawerIcon}]}
                />
                <Text style={[styles.menuLabel, {color: colors.drawerLabel}]}>
                  {STRINGS.POLLS}
                </Text>
              </Pressable>
              <View style={{width: '100%'}}>
                <Pressable
                  style={styles.menuItem}
                  android_ripple={{
                    color: 'lightgray',
                    borderless: false,
                  }}
                  onPress={() => {
                    setAboutDropDown(false);
                    setSettingDropDown(!settingDropDown);
                  }}>
                  <Image
                    source={ICONS.SETTING}
                    style={[styles.menuIcon, {tintColor: colors.drawerIcon}]}
                  />
                  <Text style={[styles.menuLabel, {color: colors.drawerLabel}]}>
                    {STRINGS.PROFILE_SETTINGS}
                  </Text>
                  <Image
                    source={settingDropDown ? ICONS.DOWN_ARROW : ICONS.RIGHT}
                    style={[styles.rightIcon, {tintColor: colors.drawerIcon}]}
                  />
                </Pressable>
                <CustomDropDown
                  isOpen={settingDropDown}
                  dropDownItems={settings}
                />
              </View>
              <View style={{width: '100%'}}>
                <Pressable
                  style={styles.menuItem}
                  android_ripple={{
                    color: 'lightgray',
                    borderless: false,
                  }}
                  onPress={() => {
                    setSettingDropDown(false);
                    setAboutDropDown(!aboutDropDown);
                  }}>
                  <Image
                    source={ICONS.ABOUT}
                    style={[styles.menuIcon, {tintColor: colors.drawerIcon}]}
                  />
                  <Text style={[styles.menuLabel, {color: colors.drawerLabel}]}>
                    {STRINGS.ABOUT}
                  </Text>
                  <Image
                    source={aboutDropDown ? ICONS.DOWN_ARROW : ICONS.RIGHT}
                    style={[styles.rightIcon, {tintColor: colors.drawerIcon}]}
                  />
                </Pressable>
                <CustomDropDown
                  isOpen={aboutDropDown}
                  dropDownItems={aboutItems}
                />
              </View>

              <Pressable
                style={styles.menuItem}
                onPress={handleInvite}
                android_ripple={{
                  color: 'lightgray',
                  borderless: false,
                }}>
                <Image
                  source={ICONS.INVITE}
                  style={[styles.menuIcon, {tintColor: colors.drawerIcon}]}
                />
                <Text style={[styles.menuLabel, {color: colors.drawerLabel}]}>
                  {STRINGS.INVITE_FRIENDS}
                </Text>
              </Pressable>

              <Pressable
                android_ripple={{
                  color: 'lightgray',
                  borderless: false,
                }}
                style={styles.menuItem}
                onPress={handleLogout}>
                <Image
                  source={ICONS.LOGOUT}
                  style={[styles.menuIcon, {tintColor: colors.drawerIcon}]}
                />
                <Text style={[styles.menuLabel, {color: colors.drawerLabel}]}>
                  {STRINGS.LOGOUT}
                </Text>
              </Pressable>
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
              'GloifyNews is the easiest way to stay\nupdated - are you sure you want to leave?'
            }
            height={verticalScale(230)}
            btnHeight={verticalScale(60)}
          />
        </Pressable>
      </View>
      <Snackbar
        backgroundColor={colors.snackBar}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        message={message}
        actionText={'Dismiss'}
        onActionPress={() => setIsVisible(false)}
        position="bottom"
        textColor={colors.snackBarTxt}
        actionTextColor={colors.snackBar}
      />
    </>
  );
};

export default CustomDrawer;
