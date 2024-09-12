import {StyleSheet} from 'react-native';
import {FONT_SIZE_16, FONT_SIZE_26, FONT_SIZE_14} from '../../styles/fontSize';
import {getFontFamily} from '../../utils/fontFamily';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  loginTxt: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_26,
  },
  loginSubTxt: {
    fontFamily: getFontFamily('regular'),
    fontSize: FONT_SIZE_14,
  },
  scrollWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupForm: {
    marginVertical: verticalScale(50),
    gap: verticalScale(10),
  },
  loginInput: {
    width: horizontalScale(280),
    height: verticalScale(70),
    borderWidth: horizontalScale(1),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
  },
  logo: {
    width: horizontalScale(150),
    height: verticalScale(150),
    resizeMode: 'contain',
    marginVertical: verticalScale(20),
  },
  eyeIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  passwordWrapper: {
    width: horizontalScale(320),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passwordInput: {
    width: horizontalScale(250),
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
