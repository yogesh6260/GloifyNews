import {StyleSheet} from 'react-native';
import {FONT_SIZE_16, FONT_SIZE_26, FONT_SIZE_14} from '../../styles/fontSize';
import {getFontFamily} from '../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupForm: {
    width: '100%',
    marginVertical: 50,
    display: 'flex',
    gap: 10,
  },
  loginInput: {
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  eyeIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  passwordWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  passwordInput: {
    width: '80%',
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
