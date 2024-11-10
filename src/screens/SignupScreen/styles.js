import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_16,
  FONT_SIZE_26,
  FONT_SIZE_14,
  FONT_SIZE_24,
  FONT_SIZE_12,
  FONT_SIZE_22,
} from '../../styles/fontSize';
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
    paddingBottom: '5%',
  },
  centeredContainer: {
    flex: 1,
    marginTop: '5%',
    alignItems: 'center',
  },
  formHeader: {
    gap: verticalScale(5),
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  formHeaderSubTitle: {
    gap: verticalScale(30),
    alignItems: 'center',
  },
  loginTxt: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_24,
  },
  loginSubTxt: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_24,
  },
  scrollWrapper: {
    flexGrow: 1,
  },
  signupForm: {
    flexGrow: 1,
  },
  inputContainer: {
    marginTop: '10%',
    gap: verticalScale(20),
  },
  inputContainerContent: {
    gap: verticalScale(10),
  },
  inputText: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_12,
    marginLeft: '5%',
  },
  loginInput: {
    width: horizontalScale(320),
    borderRadius: moderateScale(30),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
  },
  logo: {
    width: horizontalScale(80),
    height: verticalScale(80),
    resizeMode: 'contain',
  },
  eyeIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  passwordWrapper: {
    width: horizontalScale(320),
    height: verticalScale(55),
    borderRadius: moderateScale(30),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passwordInput: {
    width: horizontalScale(270),
    height: verticalScale(50),
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
  },
  btnContainer: {
    marginTop: '5%',
  },
  linkTxt: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(5),
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    zIndex: 5,
  },
});
export default styles;
