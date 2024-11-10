import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_18,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: verticalScale(60),
    paddingRight: horizontalScale(20),
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
  },
  backBtn: {
    width: horizontalScale(60),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: FONT_SIZE_18,
    fontFamily: getFontFamily('semibold'),
  },
  date: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('semibold'),
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pdfView: {
    flex: 1,
  },
  pdf: {
    width: '100%',
    height: '85%',
  },
  absoluteBtn: {
    position: 'absolute',
    top: '40%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: horizontalScale(55),
    height: verticalScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(50),
  },
  btnIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
    tintColor: 'white',
  },
  pdfNavigator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(10),
  },
  miniPdf: {
    width: '100%',
    height: verticalScale(120),
  },
  thumbnailBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: moderateScale(8),
    alignItems: 'center',
  },

  thumbnailList: {
    paddingHorizontal: moderateScale(10),
  },

  thumbnailContainer: {
    width: moderateScale(60),
    height: moderateScale(80),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(4),
    borderRadius: moderateScale(12),
    borderWidth: 2,
  },

  thumbnailImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: moderateScale(5),
  },

  pageNumber: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
  },
});

export default styles;
