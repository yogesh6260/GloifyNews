import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../styles/metrics';
import {getFontFamily} from '../../utils/fontFamily';
import {
  FONT_SIZE_12,
  FONT_SIZE_13,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_18,
} from '../../styles/fontSize';

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
  checkIcon: {
    width: horizontalScale(17),
    height: verticalScale(17),
    resizeMode: 'contain',
  },
  logo: {
    width: horizontalScale(120),
    height: verticalScale(50),
    resizeMode: 'contain',
  },
  subHeader: {
    paddingVertical: verticalScale(20),
    flexDirection: 'row',
    width: '100%',
    gap: horizontalScale(15),
    paddingHorizontal: horizontalScale(12),
    alignItems: 'center',
    borderBottomWidth: verticalScale(2),
    borderBottomColor: 'lightgrey',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: horizontalScale(7),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
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
    overflow: 'hidden',
  },
  qrCodeIcon: {
    width: horizontalScale(30),
    height: verticalScale(30),
    resizeMode: 'contain',
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
  },
  sideScroll: {
    width: '30%',
    height: '100%',
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(10),
  },
  sideScrollContent: {
    gap: verticalScale(20),
    paddingBottom: verticalScale(100),
  },
  brandItem: {
    alignItems: 'center',
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    justifyContent: 'center',
  },
  brandLogo: {
    width: horizontalScale(70),
    height: verticalScale(70),
    resizeMode: 'contain',
  },
  brandHead: {
    display: 'flex',
    borderBottomColor: 'lightgrey',
    marginTop: verticalScale(20),
    flexDirection: 'row',
  },
  couponHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(7),
  },
  brandNameInsideCoupon: {
    fontSize: FONT_SIZE_13,
    fontFamily: getFontFamily('semibold'),
    color: 'gray',
  },
  verifiedLabel: {
    color: 'green',
  },
  couponCount: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('semibold'),
    marginBottom: verticalScale(5),
  },
  brandName: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('semibold'),
  },
  contentScroll: {
    width: '70%',
    height: '100%',
    paddingBottom: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
  },
  contentScrollContent: {
    gap: verticalScale(20),
    paddingBottom: verticalScale(100),
  },
  couponItem: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(15),
    borderWidth: 1,
    borderColor: 'lightpink',
    borderRadius: moderateScale(10),
    backgroundColor: '#FEF9F2',
  },
  couponName: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('semibold'),
  },
  couponDetails: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
  },
  btnContainer: {
    paddingVertical: verticalScale(13),
    borderBottomColor: 'orange',
    borderStyle: 'dashed',
    borderBottomWidth: 1,
  },
  expandedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: verticalScale(13),
    gap: horizontalScale(5),
  },
  showDetails: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('semibold'),
  },
  dropDownIcon: {
    width: horizontalScale(18),
    height: verticalScale(18),
    resizeMode: 'contain',
  },
  footerContainer: {
    marginTop: verticalScale(20),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(12),
    backgroundColor: '#FFBD73',
  },
});

export default styles;
