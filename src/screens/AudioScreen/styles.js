import {Dimensions, StyleSheet} from 'react-native';
import {getFontFamily} from '../../utils/fontFamily';
import {FONT_SIZE_20, FONT_SIZE_22} from '../../styles/fontSize';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../styles/metrics';
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
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_20,
  },
  btnClose: {},
  closeIcon: {
    width: horizontalScale(18),
    height: verticalScale(18),
    resizeMode: 'contain',
  },
  audioImg: {
    borderRadius: moderateScale(30),
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
    marginTop: verticalScale(30),
  },
  newsTitle: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_22,
    marginVertical: verticalScale(20),
  },
  audioTimeline: {
    width: '100%',
    marginVertical: verticalScale(10),
  },
  volumeSlider: {
    width: '70%',
  },
  audioControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(50),
    marginVertical: verticalScale(10),
  },
  volumeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(20),
  },
  controlIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  playIcon: {
    width: horizontalScale(50),
    height: verticalScale(50),
    resizeMode: 'contain',
  },
  volumeIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
});

export default styles;
