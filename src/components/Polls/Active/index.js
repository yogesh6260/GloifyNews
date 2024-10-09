import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {ICONS} from '../../../constants';
import {useTheme} from '@react-navigation/native';

const PlaceholderComponent = ({colors}) => {
  return (
    <View style={styles.contentContainer}>
      <Image source={ICONS.POLLS} style={[styles.icon, {tintColor: 'white'}]} />
      <Text style={styles.placeholderText}>
        {'No active polls to show \n Check again later for active polls'}
      </Text>
    </View>
  );
};

const Active = () => {
  const {colors} = useTheme();
  return <PlaceholderComponent colors={colors} />;
};

export default Active;
