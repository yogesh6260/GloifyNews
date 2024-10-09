import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button} from '../../Common';
import {useTheme} from '@react-navigation/native';
import {ICONS} from '../../../constants';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const PlaceholderComponent = ({colors}) => {
  return (
    <View style={styles.contentContainer}>
      <Image source={ICONS.MAGAZINE} style={styles.icon} />
      <Text style={styles.placeholderText}>
        Looking for content to download?
      </Text>

      <Button
        text={'Explore Magazines'}
        bgColor={colors.btnBackground}
        variant="elevated"
        width={horizontalScale(220)}
        height={verticalScale(55)}
        borderRadius={moderateScale(30)}
      />
    </View>
  );
};

const Magazines = () => {
  const {colors} = useTheme();
  return <PlaceholderComponent colors={colors} />;
};

export default Magazines;
