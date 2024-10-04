import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {ICONS} from '../../../../constants';
import {useNavigation, useTheme} from '@react-navigation/native';
import {horizontalScale} from '../../../../styles/metrics';

const Header = ({
  searchQuery,
  searchType,
  setSearchQuery,
  handleSearch,
  handleSearchTypeChange,
}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView>
      <View style={[styles.searchHeader, {backgroundColor: colors.background}]}>
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
            placeholder="Publishers, categories or topics"
            style={[styles.searchInput, {color: colors.icon}]}
            maxLength={searchQuery?.length > 30 ? 40 : 30}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            onChange={() => handleSearch()}
            placeholderTextColor={'lightgray'}
          />
          {searchQuery ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setSearchQuery('')}>
              <Image
                source={ICONS.CLOSE_ROUND}
                style={[styles.searchIcon, {tintColor: colors.icon}]}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        {searchQuery?.length > 30 ? null : (
          <Text
            style={[styles.cancelText, {color: colors.text}]}
            onPress={() => navigation.goBack()}>
            Cancel
          </Text>
        )}
      </View>
      {/* <View style={styles.searchType}>
        <Text style={{color: colors.text}}>Search By: </Text>
        <Text
          style={[
            styles.searchTypeText,
            {
              color: colors.text,
              backgroundColor: colors.tileBackground,
              borderColor:
                searchType === 'q' ? colors.border : colors.background,
            },
          ]}
          onPress={() => handleSearchTypeChange('q')}>
          Topic
        </Text>
        <Text
          style={[
            styles.searchTypeText,
            {
              color: colors.text,
              backgroundColor: colors.tileBackground,
              borderColor:
                searchType === 'category' ? colors.border : colors.background,
            },
          ]}
          onPress={() => handleSearchTypeChange('category')}>
          Category
        </Text>
        <Text
          style={[
            styles.searchTypeText,
            {
              color: colors.text,
              backgroundColor: colors.tileBackground,
              borderColor:
                searchType === 'source' ? colors.border : colors.background,
            },
          ]}
          onPress={() => handleSearchTypeChange('source')}>
          Source
        </Text>
      </View> */}
    </KeyboardAvoidingView>
  );
};

export default Header;
