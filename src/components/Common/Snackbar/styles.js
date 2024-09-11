import {StyleSheet} from 'react-native';
import {FONT_SIZE_14} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: verticalScale(5),
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(10),
    position: 'absolute',
    zIndex: 5,
  },
  topContainer: {
    top: verticalScale(15),
  },
  bottomContainer: {
    bottom: verticalScale(15),
  },
  content: {
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
  },
  messageText: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
  },
  actionText: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
  },
});

export default styles;
