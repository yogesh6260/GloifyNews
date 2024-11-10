import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {FONT_SIZE_12} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
import Loader from '../Loader';
// import styles from './styles';

const Ticker = ({children, loader, poweredBy, background}) => {
  return (
    <ImageBackground
      style={[styles.banner]}
      source={background}
      resizeMode="cover"
      borderRadius={moderateScale(20)}>
      <Text style={styles.bannerTitle}>Powered by {poweredBy}</Text>
      {loader ? (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      ) : (
        <View style={styles.bannerContent}>{children}</View>
      )}
    </ImageBackground>
  );
};

export default Ticker;

const styles = StyleSheet.create({
  banner: {
    width: horizontalScale(330),
    height: verticalScale(230),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: moderateScale(20),
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    opacity: 1,
    zIndex: 5,
  },
});
