import {ActivityIndicator} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const Loader = () => {
  const {colors} = useTheme();

  return <ActivityIndicator size={'large'} color={colors.border} />;
};

export default Loader;
