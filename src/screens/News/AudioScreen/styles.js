import {Dimensions, StyleSheet} from 'react-native';
import {getFontFamily} from '../../../utils/fontFamily';
import {
  FONT_SIZE_12,
  FONT_SIZE_20,
  FONT_SIZE_22,
  FONT_SIZE_8,
} from '../../../styles/fontSize';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  contentWrapper: {
    width: width * 0.9,
    zIndex: 2,
  },

  gradient: {
    ...StyleSheet.absoluteFillObject, // Ensure the gradient fills the entire background
    zIndex: 1, // Position it below the content
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_20,
  },
  btnClose: {
    width: horizontalScale(20),
    height: verticalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(12),
  },
  closeIcon: {
    width: horizontalScale(15),
    height: verticalScale(15),
    resizeMode: 'contain',
  },
  audioImg: {
    borderRadius: moderateScale(20),
    width: '100%',
    height: verticalScale(340),
    resizeMode: 'cover',
    marginTop: verticalScale(50),
  },
  audioIcon: {
    width: horizontalScale(200),
    height: verticalScale(200),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: verticalScale(150),
  },
  newsTitle: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_22,
    marginVertical: verticalScale(20),
  },
  audioTimeline: {
    width: '100%',
    marginTop: verticalScale(80),
  },
  volumeSlider: {
    width: '70%',
  },
  audioControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(50),
    marginTop: verticalScale(40),
  },
  volumeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(50),
  },
  controlIcon: {
    width: horizontalScale(28),
    height: verticalScale(28),
    resizeMode: 'contain',
  },
  playIcon: {
    width: horizontalScale(65),
    height: verticalScale(65),
    resizeMode: 'contain',
  },
  volumeIcon: {
    width: horizontalScale(30),
    height: verticalScale(30),
    resizeMode: 'contain',
  },
  timings: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(15),
  },
  duration: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('normal'),
    color: 'lightgray',
  },
});

export default styles;
