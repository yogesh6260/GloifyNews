import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {getFontFamily} from '../../../utils/fontFamily';
import {FONT_SIZE_14} from '../../../styles/fontSize';

const styles = StyleSheet.create({
  modalContainer: {
    gap: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {},
  btnContainer: {
    flexDirection: 'row',
    gap: horizontalScale(20),
  },
  modalText: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_14,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default styles;
