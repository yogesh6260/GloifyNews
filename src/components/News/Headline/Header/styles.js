import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../../utils/fontFamily';
import {
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_18,
} from '../../../../styles/fontSize';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../styles/metrics';

const styles = StyleSheet.create({
  categoryHeader: {
    flexDirection: 'row',
    gap: verticalScale(5),
    marginVertical: verticalScale(5),
  },
  category: {
    borderRadius: moderateScale(20),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    borderWidth: horizontalScale(2),
  },
  categoryLabel: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_14,
  },

  // banner styles
  bannerContainer: {
    marginVertical: verticalScale(12),
  },
  banner: {
    height: verticalScale(200),
    width: horizontalScale(320),
    borderRadius: moderateScale(20),
    backgroundColor: 'black',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
  },
  bannerSideText: {
    color: 'lightgray',
    alignSelf: 'flex-end',
    fontSize: FONT_SIZE_12,
  },
  bannerContent: {
    display: 'flex',
    marginTop: verticalScale(12),
    gap: verticalScale(20),
  },
  bannerHeading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  stockName: {
    color: 'white',
    fontSize: FONT_SIZE_14,
  },
  stockPrice: {
    color: 'white',
    fontSize: FONT_SIZE_18,
    fontFamily: getFontFamily('bold'),
    marginLeft: horizontalScale(12),
  },
  changeDigit: {
    color: 'green',
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('semibold'),
  },
  changePercentage: {
    color: 'green',
    fontSize: FONT_SIZE_14,
  },
  bannerIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    tintColor: 'green',
    marginLeft: horizontalScale(12),
  },
});

export default styles;
