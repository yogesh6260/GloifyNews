import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../utils/fontFamily';
import {FONT_SIZE_16} from '../../../styles/fontSize';
import {moderateScale, verticalScale} from '../../../styles/metrics';

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: verticalScale(60),
    borderRadius: moderateScale(10),
  },
  btnText: {
    fontFamily: getFontFamily('medium'),
    fontSize: FONT_SIZE_16,
  },
});
export default styles;
