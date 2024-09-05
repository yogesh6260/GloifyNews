import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../Button';
import {useTheme} from '@react-navigation/native';

const CustomDropDown = ({settings, isOpen}) => {
  const {colors} = useTheme();
  if (!isOpen) {
    return null;
  }
  return (
    <View style={styles.dropDownContainer}>
      <FlatList
        data={settings}
        renderItem={({item, index}) => {
          return (
            <Button
              key={index}
              text={`${item.label}${item.input ? `: ${item.input}` : ''}`}
              bgColor={colors.background}
              onPress={item.onPress}
              width={'100%'}
              textColor={colors.text}
            />
          );
        }}
        contentContainerStyle={styles.dropDownItemList}
      />
    </View>
  );
};

export default CustomDropDown;
