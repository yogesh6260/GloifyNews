import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_15,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
import {horizontalScale, verticalScale} from '../../../styles/metrics';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: horizontalScale(200),
    height: verticalScale(200),
    marginBottom: verticalScale(16),
  },
  placeholderText: {
    fontSize: FONT_SIZE_15,
    fontFamily: getFontFamily('normal'),
    color: '#A1A1A1',
    textAlign: 'center',
  },
});

export default styles;
