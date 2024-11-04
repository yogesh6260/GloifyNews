import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {
  FONT_SIZE_14,
  FONT_SIZE_18,
  FONT_SIZE_20,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(60),
    paddingHorizontal: horizontalScale(20),
  },
  backIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  headerText: {
    flex: 1,
    fontSize: FONT_SIZE_18,
    fontFamily: getFontFamily('semibold'),
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(320),
  },
  circle: {
    borderRadius: moderateScale(200),
    width: horizontalScale(150),
    height: verticalScale(170),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    position: 'absolute',
    top: verticalScale(120),
    shadowColor: 'white',
    zIndex: 1000,
  },
  animatedImage: {
    width: '65%',
    height: '65%',
    resizeMode: 'contain',
  },
  animatedCoupon: {
    width: horizontalScale(40),
    height: verticalScale(40),
    resizeMode: 'contain',
    marginVertical: verticalScale(50),
  },
  couponDetails: {
    alignItems: 'center',
    gap: verticalScale(15),
  },
  couponStatus: {
    fontSize: FONT_SIZE_20,
    fontFamily: getFontFamily('semibold'),
    textAlign: 'center',
  },
  couponName: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
    textAlign: 'center',
  },
  animatedBadge: {
    position: 'absolute',
    zIndex: 10001,
  },
  logoBadge: {
    borderRadius: moderateScale(120),
    backgroundColor: '#FEF9F2',
    width: horizontalScale(50),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
  fyndLogo: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  badge: {
    width: horizontalScale(50),
    height: verticalScale(50),
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -30,
    right: -30,
  },
  linkText: {
    marginTop: verticalScale(100),
    alignItems: 'center',
  },
});

export default styles;
