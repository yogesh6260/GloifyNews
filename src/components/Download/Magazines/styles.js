import {StyleSheet} from 'react-native';
import { FONT_SIZE_16 } from '../../../styles/fontSize';
import { getFontFamily } from '../../../utils/fontFamily';
import { verticalScale } from '../../../styles/metrics';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  placeholderText: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
    color: '#A1A1A1',
    marginBottom: verticalScale(16),
  },
  button: {
    backgroundColor: '#BF1D2D',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
