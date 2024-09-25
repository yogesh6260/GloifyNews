import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../styles/metrics';
import {getFontFamily} from '../../utils/fontFamily';
import {FONT_SIZE_24} from '../../styles/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(12),
  },
  logo: {
    width: horizontalScale(150),
    height: horizontalScale(150),
    resizeMode: 'contain',
  },
  appName: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_24,
  },
});

export default styles;
