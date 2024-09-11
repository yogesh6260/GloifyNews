import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../utils/fontFamily';
import {FONT_SIZE_12, FONT_SIZE_14} from '../../../styles/fontSize';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const styles = StyleSheet.create({
  bulletin: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: verticalScale(10),
    borderRadius: moderateScale(30),
  },
  bulletinLeft: {
    gap: verticalScale(10),
    width: '70%',
    marginLeft: horizontalScale(10),
  },
  bulletinHeading: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_14,
  },
  bulletinLeftBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bulletinSource: {
    fontFamily: getFontFamily('normal'),
    fontSize: FONT_SIZE_12,
  },
  bulletinSubLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bulletinReadTime: {
    fontFamily: getFontFamily('normal'),
    fontSize: FONT_SIZE_12,
  },
  bulletinRight: {
    width: '25%',
  },
  moreIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  bulletinImg: {
    width: horizontalScale(80),
    height: verticalScale(80),
    resizeMode: 'cover',
    borderRadius: moderateScale(40),
  },
});

export default styles;
