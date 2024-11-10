import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {FONT_SIZE_10} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
const styles = StyleSheet.create({
  bottomTabContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: verticalScale(60),
    borderTopStartRadius: moderateScale(20),
    borderTopEndRadius: moderateScale(20),
    zIndex: 1000,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBarIcon: {
    width: horizontalScale(23),
    height: verticalScale(23),
    resizeMode: 'contain',
  },
  tab: {
    alignItems: 'center',
    gap: verticalScale(3),
    justifyContent: 'center',
  },
  tabBarLabel: {
    fontSize: FONT_SIZE_10,
    fontFamily: getFontFamily('normal'),
  },
});

export default styles;
