import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {
  FONT_SIZE_14,
  FONT_SIZE_18,
  FONT_SIZE_22,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
    alignItems: 'center',
  },
  brandLogo: {
    width: horizontalScale(180),
    height: verticalScale(180),
    resizeMode: 'contain',
  },
  couponHead: {},
  couponName: {
    fontSize: FONT_SIZE_18,
    fontFamily: getFontFamily('semibold'),
  },
  couponContainer: {
    width: '90%',
    backgroundColor: '#FEF9F2',
    borderRadius: moderateScale(12),
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(12),
    borderColor: 'lightpink',
    borderWidth: 1,
    marginVertical: verticalScale(30),
  },
  couponId: {
    letterSpacing: 3,
    fontSize: FONT_SIZE_22,
    fontFamily: getFontFamily('bold'),
    marginBottom: verticalScale(25),
  },
  couponContent: {
    backgroundColor: '#F5F5F7',
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(5),
    borderRadius: moderateScale(12),
  },
  couponDetails: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
    lineHeight: 30,
    color: '#333',
  },
});

export default styles;
