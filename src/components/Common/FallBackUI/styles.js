import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../utils/fontFamily';
import {FONT_SIZE_16} from '../../../styles/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackImg: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  fallbackMessage: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_16,
    paddingHorizontal: 20,
  },
});
export default styles;
