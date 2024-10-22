import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {FONT_SIZE_14} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  videoPlayer: {
    width: '100%',
    height: verticalScale(320),
    gap: verticalScale(10),
    marginVertical: verticalScale(10),
    alignItems: 'center',
  },

  title: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('semibold'),
    textAlign: 'center',
    paddingHorizontal: horizontalScale(10),
  },
});

export default styles;
