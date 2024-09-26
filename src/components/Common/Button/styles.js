import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../utils/fontFamily';
import {FONT_SIZE_16} from '../../../styles/fontSize';
import {moderateScale} from '../../../styles/metrics';

const styles = StyleSheet.create({
  btnView: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',

    overflow: 'hidden',
  },
  btn: {
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  btnText: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('bold'),
  },
});
export default styles;
