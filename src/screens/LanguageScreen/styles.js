import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../styles/metrics';
import {FONT_SIZE_16, FONT_SIZE_20} from '../../styles/fontSize';
import {getFontFamily} from '../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(15),
  },
  icon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(16),
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontSize: FONT_SIZE_20,
    fontFamily: getFontFamily('semibold'),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: FONT_SIZE_16,
    marginVertical: verticalScale(10),
    fontFamily: getFontFamily('semibold'),
  },
  languageList: {
    paddingVertical: verticalScale(20),
  },
  languageButton: {
    width: horizontalScale(160),
    height: verticalScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
    marginHorizontal: horizontalScale(5),
    marginVertical: verticalScale(5),
  },
  selectedLanguageButton: {
    borderColor: '#b71c1c',
    backgroundColor: '#fff',
  },
  languageText: {
    fontSize: FONT_SIZE_16,
  },
  selectedLanguageText: {
    color: '#b71c1c',
    fontWeight: 'bold',
  },
  btnWrapper: {
    marginVertical: verticalScale(20),
  },
});

export default styles;
