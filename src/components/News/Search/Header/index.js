import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Pressable,
  StatusBar,
} from 'react-native';
import styles from './styles';
import {ICONS} from '../../../../constants';
import {useNavigation, useTheme} from '@react-navigation/native';
import {horizontalScale, moderateScale} from '../../../../styles/metrics';
import {useTranslation} from 'react-i18next';

const Header = ({searchQuery, setSearchQuery, handleSearch}) => {
  const {colors, dark} = useTheme();
  const navigation = useNavigation();
  const {t} = useTranslation();

  const changeStatusBar = () => {
    StatusBar.setBackgroundColor(colors.tileBackground, true);
    StatusBar.setBarStyle(dark ? 'light-content' : 'dark-content', true);
  };

  useEffect(() => {
    changeStatusBar();
    return () => {
      // Reset the status bar to its original state when the component is unmounted
      StatusBar.setBackgroundColor(colors.background, true);
      StatusBar.setBarStyle(dark ? 'light-content' : 'dark-content', true);
    };
  }, []);

  return (
    <KeyboardAvoidingView>
      <View
        style={[styles.searchHeader, {backgroundColor: colors.tileBackground}]}>
        <View
          style={[
            styles.searchBar,
            {
              backgroundColor: colors.bulletinBackground,
              width:
                searchQuery?.length > 30
                  ? horizontalScale(350)
                  : horizontalScale(290),
            },
          ]}>
          <Image
            source={ICONS.SEARCH}
            style={[styles.searchIcon, {tintColor: colors.icon}]}
          />
          <TextInput
            placeholder={t('components.search_header.text.input.placeholder')}
            style={[styles.searchInput, {color: colors.text}]}
            maxLength={searchQuery?.length > 30 ? 40 : 30}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            onChange={() => handleSearch()}
            placeholderTextColor={'gray'}
          />
          {searchQuery ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setSearchQuery('')}>
              <Image
                source={ICONS.CLOSE_ROUND}
                style={[styles.searchIcon, {tintColor: colors.text}]}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {searchQuery?.length > 30 ? null : (
          <Pressable
            android_ripple={{
              color: 'lightgray',
              borderless: true,
              radius: moderateScale(50),
            }}
            style={styles.cancelBtn}
            onPress={() => navigation.goBack()}>
            <Text style={[styles.cancelText, {color: colors.text}]}>
              {t('components.search_header.text.cancel')}
            </Text>
          </Pressable>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Header;
