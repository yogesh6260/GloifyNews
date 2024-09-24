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
    width: horizontalScale(330),
    height: 'auto',
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(15),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: verticalScale(10),
    borderRadius: moderateScale(20),
  },
  bulletinLeft: {
    gap: verticalScale(10),
    width: horizontalScale(200),
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
    width: horizontalScale(90),
  },
  moreIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  bulletinImg: {
    width: horizontalScale(90),
    height: verticalScale(100),
    resizeMode: 'cover',
    borderRadius: moderateScale(20),
  },
});

export default styles;
