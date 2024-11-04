import {Dimensions, StyleSheet} from 'react-native';
import {FONT_SIZE_14} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
import {horizontalScale, verticalScale} from '../../../styles/metrics';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: verticalScale(60),
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(20),
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(7),
    position: 'absolute',
    zIndex: 1002,
  },
  topContainer: {
    top: verticalScale(0),
  },
  bottomContainer: {
    bottom: verticalScale(0),
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    width: horizontalScale(30),
    height: verticalScale(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
  },
  actionText: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
  },
  closeIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
});

export default styles;
