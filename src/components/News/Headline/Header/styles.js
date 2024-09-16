import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../../utils/fontFamily';
import {FONT_SIZE_12, FONT_SIZE_14} from '../../../../styles/fontSize';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../styles/metrics';

const styles = StyleSheet.create({
  categoryHeader: {
    flexDirection: 'row',
    gap: verticalScale(5),
    marginVertical: verticalScale(5),
  },
  category: {
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    borderWidth: horizontalScale(2),
  },
  categoryLabel: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_14,
  },
  newsChannels: {
    marginVertical: verticalScale(10),
    height: verticalScale(120),
  },
  newsChannelFlatlist: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: verticalScale(10),
  },
  Circle: {
    width: horizontalScale(80),
    gap: verticalScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImg: {
    width: horizontalScale(65),
    height: verticalScale(65),
    borderRadius: moderateScale(50),
    resizeMode: 'contain',
  },
  circleLabel: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('bold'),
  },
});

export default styles;
