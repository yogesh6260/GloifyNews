import {FONT_SIZE_16, FONT_SIZE_18} from '../../../styles/fontSize';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {getFontFamily} from '../../../utils/fontFamily';

import {StyleSheet} from 'react-native';

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
  helpIcon: {
    width: horizontalScale(35),
    height: verticalScale(35),
    resizeMode: 'contain',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: verticalScale(80),
    backgroundColor: 'white',
    gap: horizontalScale(15),
    paddingHorizontal: horizontalScale(20),
    zIndex: 2,
  },
  subHeaderText: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('semibold'),
    color: '#333',
    flex: 1,
  },
  qrScannerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraStyle: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },

  overlaySideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  scanText: {
    color: 'white',
    fontSize: FONT_SIZE_18,
    fontFamily: getFontFamily('bold'),
    textAlign: 'center',
  },
  offerText: {
    color: 'white',
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('regular'),
    textAlign: 'center',
  },

  overlayTop: {
    position: 'absolute',
    width: '100%',
    height: verticalScale(120),
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: verticalScale(140),
    left: 0,
    right: 0,
  },
  overlayBottom: {
    position: 'absolute',
    width: '85.2%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    bottom: verticalScale(60),
    left: horizontalScale(28),
    right: horizontalScale(10),
    height: verticalScale(150),
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayLeft: {
    position: 'absolute',
    width: verticalScale(31),
    height: '100%',
    left: 0,
    top: verticalScale(260),
    bottom: verticalScale(200),
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  overlayRight: {
    position: 'absolute',
    width: verticalScale(30),
    height: '100%',
    right: 0,
    top: verticalScale(260),
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default styles;
