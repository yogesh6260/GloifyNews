import {StyleSheet} from 'react-native';
import {FONT_SIZE_14, FONT_SIZE_16, FONT_SIZE_18, FONT_SIZE_20} from '../../styles/fontSize';
import {getFontFamily} from '../../utils/fontFamily';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  backIcon: {
    width: horizontalScale(24),
    height: verticalScale(24),
    marginRight: horizontalScale(10),
  },
  headerText: {
    fontSize: FONT_SIZE_18,
    fontFamily: getFontFamily('bold'),
  },
  section: {
    marginVertical: verticalScale(20),
  },
  title: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
    marginBottom: verticalScale(10),
  },
  dropDownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(16),
    borderWidth: horizontalScale(1),
    borderColor: '#ccc',
    borderRadius: moderateScale(8),
  },
  dropDownButtonText: {
    fontSize: FONT_SIZE_14,
  },
  arrowIcon: {
    width: horizontalScale(16),
    height: verticalScale(16),
  },
  categoryButton: {
    paddingVertical: verticalScale(14),
    paddingHorizontal: horizontalScale(16),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButtonText: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('semibold'),
  },
});

export default styles;
