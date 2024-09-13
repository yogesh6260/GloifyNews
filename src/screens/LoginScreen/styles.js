import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/fontFamily';
import {FONT_SIZE_14, FONT_SIZE_16, FONT_SIZE_26} from '../../styles/fontSize';
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
  loginForm: {
    marginVertical: verticalScale(20),
    marginHorizontal: horizontalScale(20),
    gap: verticalScale(15),
  },
  formHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(30),
  },
  loginInput: {
    width: horizontalScale(320),
    borderWidth: horizontalScale(1),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
  },
  logoContainer: {
    width: horizontalScale(200),
    height: verticalScale(200),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    aspectRatio: 1 / 3,
    resizeMode: 'contain',
    marginBottom: verticalScale(10),
  },
  eyeIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  passwordWrapper: {
    width: horizontalScale(320),
    height: verticalScale(55),
    borderWidth: horizontalScale(1),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passwordInput: {
    width: horizontalScale(270),
    height: verticalScale(50),
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
  },
  linkTxt: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
});

export default styles;
