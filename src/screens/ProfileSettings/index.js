import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {ICONS} from '../../constants';
import {CustomDropDown} from '../../components/Common';
import {useTheme} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {changeCategory} from '../../redux/actions/user/userActions';

const ProfileSettings = ({navigation}) => {
  const {colors} = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector(state => state.user) || {};

  // Account settings data for the dropdown
  const accountSettings = [
    {label: 'Name', input: user.data.name},
    {label: 'Email', input: user.data.email},
    {label: 'Contact', input: user.data.contact},
  ];

  const handleCategoryPress = () => {
    dispatch(changeCategory(true));
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={ICONS.BACK}
            style={[styles.backIcon, {tintColor: colors.text}]}
          />
        </TouchableOpacity>
        <Text style={[styles.headerText, {color: colors.text}]}>
          Profile Settings
        </Text>
      </View>

      {/* Account Settings Section */}
      <View style={styles.section}>
        <Text style={[styles.title, {color: colors.text}]}>
          Account Settings
        </Text>
        <TouchableOpacity
          style={styles.dropDownButton}
          onPress={() => setIsOpen(!isOpen)}>
          <Text style={[styles.dropDownButtonText, {color: colors.text}]}>
            {isOpen ? 'Hide Details' : 'Show Details'}
          </Text>
          <Image
            source={isOpen ? ICONS.UP_ARROW : ICONS.DOWN_ARROW}
            style={[styles.arrowIcon, {tintColor: colors.text}]}
          />
        </TouchableOpacity>
        <CustomDropDown isOpen={isOpen} settings={accountSettings} />
      </View>

      {/* Categories Section */}
      {isOpen ? null : (
        <View style={styles.section}>
          <Text style={[styles.title, {color: colors.text}]}>
            Change Categories
          </Text>
          <TouchableOpacity
            style={[
              styles.categoryButton,
              {backgroundColor: colors.btnBackground},
            ]}
            activeOpacity={0.7}
            onPress={handleCategoryPress}>
            <Text style={[styles.categoryButtonText, {color: colors.text}]}>
              Change Categories
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ProfileSettings;
