import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../styles/metrics';
import {FONT_SIZE_12, FONT_SIZE_14} from '../../../../styles/fontSize';
import {getFontFamily} from '../../../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TV: {
    marginTop: verticalScale(10),
  },
  info: {
    backgroundColor: 'white',
    height: verticalScale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('semibold'),
    textAlign: 'center',
  },
  channelList: {
    marginTop: verticalScale(30),
    width: '100%',
    height: verticalScale(120),
  },
  channelBtn: {
    width: horizontalScale(100),
    height: verticalScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    elevation: 5,
    borderRadius: moderateScale(50),
  },
  channelImg: {
    width: horizontalScale(50),
    height: verticalScale(50),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  channelContainer: {
    gap: horizontalScale(5),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  channelName: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('semibold'),
    textAlign: 'center',
  },
  placeholder: {
    marginTop: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(20),
  },
  placeholderText: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
  },
  pin: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    top: 0,
    tintColor: 'white',
    borderRadius: moderateScale(30),
    zIndex: 5,
  },
});

export default styles;
