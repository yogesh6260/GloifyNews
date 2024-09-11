import {StyleSheet} from 'react-native';
import {FONT_SIZE_12} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const styles = StyleSheet.create({
  tooltip: {
    position: 'absolute',
    right: -horizontalScale(10),
    // top: -30, need to change based on placement
    display: 'flex',
    // backgroundColor: 'orange',
    // width: 150,
    // height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    zIndex: 5,
    opacity: 1,
    margin: 0,
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    flexWrap: 'wrap',
  },
  tooltipPin: {
    position: 'absolute',
    // top: 0,
    right: horizontalScale(10),

    width: 0,
    height: 0,
    borderLeftWidth: horizontalScale(16),
    borderLeftColor: 'transparent',
    borderRightWidth: horizontalScale(16),
    borderRightColor: 'transparent',
    // borderTopColor: 'orange',
    borderTopWidth: verticalScale(18),
  },
  text: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('normal'),
    // color: 'white',
  },
});

export default styles;
