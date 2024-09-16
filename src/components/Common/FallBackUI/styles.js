import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../utils/fontFamily';
import {FONT_SIZE_16} from '../../../styles/fontSize';
import {horizontalScale, verticalScale} from '../../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackImg: {
    width: horizontalScale(200),
    height: verticalScale(200),
    resizeMode: 'contain',
  },
  fallbackMessage: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_16,
    paddingHorizontal: horizontalScale(20),
  },
});
export default styles;
