import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../../../styles/metrics';
import {FONT_SIZE_14} from '../../../../styles/fontSize';
import {getFontFamily} from '../../../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(10),
  },
  categoryHeader: {
    flexDirection: 'row',
    gap: verticalScale(5),
    marginVertical: verticalScale(5),
  },
  category: {
    borderRadius: moderateScale(20),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    borderWidth: horizontalScale(2),
  },
  categoryLabel: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_14,
  },
  videoList: {
    paddingVertical: verticalScale(20),
    paddingBottom: verticalScale(100),
  },
});

export default styles;
