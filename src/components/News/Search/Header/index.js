import React from 'react';
import {View, Text, Image, TextInput, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import {ICONS} from '../../../../constants';
import {useNavigation, useTheme} from '@react-navigation/native';

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
      <View
        style={[styles.searchHeader, {backgroundColor: colors.tileBackground}]}>
        <View style={styles.searchBar}>
          <Image source={ICONS.SEARCH} style={styles.searchIcon} />
          <TextInput
            placeholder="Publishers, categories or topics"
            style={styles.searchInput}
            maxLength={20}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            onChange={() => handleSearch()}
          />
        </View>
        <Text
          style={[styles.cancelText, {color: colors.text}]}
          onPress={() => navigation.goBack()}>
          Cancel
        </Text>
      </View>
      <View style={styles.searchType}>
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
      </View>
    </KeyboardAvoidingView>
  );
};

export default Header;
