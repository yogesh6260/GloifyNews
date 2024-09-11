import {StyleSheet} from 'react-native';
import {FONT_SIZE_14} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 30,
    gap: 20,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  report: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
  },
});

export default styles;
