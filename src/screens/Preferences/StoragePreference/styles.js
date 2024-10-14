import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../styles/metrics';
import {FONT_SIZE_16, FONT_SIZE_20} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(15),
  },
  icon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(16),
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: FONT_SIZE_20,
    fontFamily: getFontFamily('semibold'),
    textAlign: 'center',
  },
  containerContent: {
    marginTop: verticalScale(30),
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: verticalScale(20),
  },
  radioLabel: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('semibold'),
  },
});

export default styles;
