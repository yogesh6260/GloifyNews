import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {getFontFamily} from '../../../utils/fontFamily';
import {
  FONT_SIZE_13,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_18,
} from '../../../styles/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: verticalScale(60),
    paddingHorizontal: horizontalScale(20),
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_18,
  },
  backIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: horizontalScale(7),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    height: verticalScale(50),
  },
  searchIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  searchInput: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('normal'),
    flex: 1,
    height: verticalScale(50),
  },
  qrCodeIcon: {
    width: horizontalScale(30),
    height: verticalScale(30),
    resizeMode: 'contain',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
    width: '100%',
    gap: horizontalScale(10),
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  cancelText: {
    color: '#BF1D2D',
    fontFamily: getFontFamily('normal'),
    fontSize: FONT_SIZE_13,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
  },
  listHeader: {
    flexDirection: 'row',
    gap: horizontalScale(10),
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  trendIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
    tintColor: 'black',
  },
  listHeadText: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('semibold'),
    color: '#333',
  },
  list: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  listContent: {
    paddingBottom: verticalScale(50),
    flexDirection: 'row',
    gap: horizontalScale(25),
    flexWrap: 'wrap',
    paddingTop: verticalScale(10),
  },
  brandContainer: {
    width: horizontalScale(150),
    height: verticalScale(120),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: 'lightgray',
    alignItems: 'center',
  },
  brandImg: {
    resizeMode: 'contain',
    flex: 1,
    width: '60%',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    paddingVertical: verticalScale(7),
    borderBottomStartRadius: moderateScale(10),
    borderBottomEndRadius: moderateScale(10),
  },
  brandText: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
    color: '#333',
    textAlign: 'center',
  },
  searchResults: {
    gap: verticalScale(10),
    padding: 20,
  },

  brandLink: {
    color: '#333',
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('semibold'),
  },
});

export default styles;
