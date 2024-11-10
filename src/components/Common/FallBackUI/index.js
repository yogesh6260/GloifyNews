import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {ICONS} from '../../../constants';
import {useTheme} from '@react-navigation/native';

const SearchFallback = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Image
        source={ICONS.NO_RESULTS}
        style={[styles.fallbackImg, {tintColor: colors.text}]}
      />
    </View>
  );
};

const DataFallback = ({errorMessage, iconWidth, iconHeight}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Image
        source={ICONS.ERROR}
        style={{width: iconWidth, height: iconHeight}}
      />
      <Text style={[styles.fallbackMessage, {color: colors.text}]}>
        {errorMessage}
      </Text>
    </View>
  );
};

const FallBackUI = ({fallbackType, errorMessage, iconWidth, iconHeight}) => {
  if (fallbackType === 'query') {
    return <SearchFallback />;
  }
  return (
    <DataFallback
      errorMessage={errorMessage}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
    />
  );
};

export default FallBackUI;
