import {StyleSheet} from 'react-native';
import {FONT_SIZE_14} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSheetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  report: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
  },
});

export default styles;
