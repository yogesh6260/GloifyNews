import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {
  FONT_SIZE_12,
  FONT_SIZE_13,
  FONT_SIZE_14,
  FONT_SIZE_16,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: verticalScale(60),
    paddingRight: horizontalScale(20),
  },
  backBtn: {
    width: horizontalScale(60),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('semibold'),
  },
  magzineContainer: {
    width: '92%',
    marginHorizontal: horizontalScale(12),
    borderRadius: moderateScale(20),
    height: verticalScale(300),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    flexDirection: 'row',
    marginVertical: verticalScale(20),
    gap: horizontalScale(12),
  },
  posterContainer: {
    width: '60%',
    height: '100%',
    borderRadius: moderateScale(12),
  },
  poster: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: moderateScale(12),
  },
  subContainerRight: {
    width: '40%',
    height: '100%',
  },
  date: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('normal'),
  },
  textContainer: {
    marginTop: verticalScale(10),
    gap: verticalScale(3),
  },
  label: {
    fontSize: FONT_SIZE_13,
    fontFamily: getFontFamily('semibold'),
  },
  text: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('normal'),
  },
  reactionContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
    gap: horizontalScale(5),
    alignItems: 'center',
  },
  reactionIcon: {
    width: horizontalScale(23),
    height: verticalScale(23),
    resizeMode: 'contain',
  },
  borderRight: {
    borderRightWidth: 1,
    marginHorizontal: horizontalScale(5),
    height: verticalScale(12),
  },
});

export default styles;
