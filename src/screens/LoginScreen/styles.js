import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/fontFamily';
import {FONT_SIZE_14, FONT_SIZE_16, FONT_SIZE_26} from '../../styles/fontSize';

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
    width: '80%',
    display: 'flex',
    gap: 10,
  },
  formHeader: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  loginInput: {
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
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
    width: '90%',
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
  },
  linkTxt: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default styles;
