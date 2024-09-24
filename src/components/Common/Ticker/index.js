import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {FONT_SIZE_12} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
// import styles from './styles';

const Ticker = ({children}) => {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerTitle}>Powered by Yahoo Finance</Text>
      <View style={styles.bannerContent}>{children}</View>
    </View>
  );
};

export default Ticker;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: 'black',
    width: horizontalScale(330),
    height: verticalScale(230),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    borderRadius: moderateScale(20),
  },
  bannerTitle: {
    color: 'lightgray',
    alignSelf: 'flex-end',
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('normal'),
  },
  bannerContent: {
    flexDirection: 'column',
    gap: verticalScale(20),
  },
});
