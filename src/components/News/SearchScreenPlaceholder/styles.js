import {StyleSheet, Dimensions} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../../styles/metrics';
import {
  FONT_SIZE_12,
  FONT_SIZE_13,
  FONT_SIZE_14,
  FONT_SIZE_15,
  FONT_SIZE_16,
  FONT_SIZE_18,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
  },
  contentContainer: {
    paddingBottom: verticalScale(40),
  },
  section: {
    marginTop: verticalScale(20),
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(10),
  },
  heading: {
    fontSize: FONT_SIZE_18,
    fontFamily: getFontFamily('bold'),
    marginBottom: verticalScale(10),
  },
  trendingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  trendingIcon: {
    width: horizontalScale(18),
    height: verticalScale(18),
    resizeMode: 'contain',
    tintColor: 'white',
  },
  trendingItem: {
    borderRadius: moderateScale(20),
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    marginRight: horizontalScale(10),
    marginBottom: verticalScale(10),
  },
  trendingText: {
    fontSize: FONT_SIZE_14,
  },
  magazineItem: {
    marginRight: horizontalScale(15),
    width: width * 0.4,
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
  },
  magazineImage: {
    width: '100%',
    height: verticalScale(200),
    borderRadius: moderateScale(10),
    resizeMode: 'contain',
  },
  magazineTitle: {
    marginTop: verticalScale(8),
    fontSize: FONT_SIZE_14,
    textAlign: 'center',
  },
  magazineDate: {
    fontSize: FONT_SIZE_12,
    marginTop: verticalScale(4),
    textAlign: 'center',
  },
  newspaperItem: {
    marginRight: horizontalScale(15),
    width: width * 0.3,
    alignItems: 'center',

    borderRadius: moderateScale(10),
    gap: verticalScale(5),
    height: verticalScale(200),
  },
  newspaperImage: {
    width: '100%',
    height: verticalScale(100),
    resizeMode: 'contain',
  },
  newspaperTitle: {
    marginTop: verticalScale(8),
    fontSize: FONT_SIZE_14,
    textAlign: 'center',
  },
  newspaperDate: {
    fontSize: FONT_SIZE_12,
    marginTop: verticalScale(4),
    textAlign: 'center',
  },
  seeMoreBtn: {
    width: verticalScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
    gap: verticalScale(10),
  },
  seeMoreText: {
    fontSize: FONT_SIZE_15,
    fontFamily: getFontFamily('semibold'),
    gap: verticalScale(10),
  },
  seeMoreIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
});

export default styles;
