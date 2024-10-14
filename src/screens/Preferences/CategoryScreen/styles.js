import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_12,
  FONT_SIZE_16,
  FONT_SIZE_22,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    gap: verticalScale(30),
  },
  closeBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: FONT_SIZE_22,
    fontFamily: getFontFamily('semibold'),
  },
  subTitle: {
    marginTop: verticalScale(20),
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('semibold'),
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: verticalScale(10),
    height: verticalScale(430),
  },
  categoryCard: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: moderateScale(30),
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(15),
    borderWidth: horizontalScale(2),
  },
  categoryText: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('bold'),
  },
  btnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: verticalScale(15),
    right: 0,
    left: 0,
  },
});
export default styles;
