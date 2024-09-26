import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../styles/metrics';
import {getFontFamily} from '../../utils/fontFamily';
import { FONT_SIZE_26} from '../../styles/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: verticalScale(12),
  },
  imageContainer: {
    alignSelf: 'center',
  },
  textContainer: {
    alignSelf: 'center',
  },
  logo: {
    width: horizontalScale(80),
    height: horizontalScale(80),
    resizeMode: 'contain',
  },
  appName: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_26,
  },
});

export default styles;
