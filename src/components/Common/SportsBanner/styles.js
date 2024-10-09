import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_10,
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_20,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const styles = StyleSheet.create({
  sportDataContainer: {
    gap: verticalScale(5),
  },
  sportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sportHeaderLeft: {
    gap: verticalScale(5),
  },
  sportHeaderRight: {},
  matchDetail: {
    color: 'white',
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_12,
  },
  placeDetail: {
    color: 'white',
    fontFamily: getFontFamily('normal'),
    fontSize: FONT_SIZE_10,
  },
  matchStatus: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),

    borderRadius: moderateScale(20),
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_10,
  },
  sportMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: verticalScale(5),
  },
  sportFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(5),
  },
  flagSymbol: {
    color: 'white',
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_14,
  },
  versus: {
    color: 'white',
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_20,
  },
  score: {
    color: 'white',
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_12,
  },
  sportFooter: {
    marginTop: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sportFooterText: {
    alignSelf: 'center',
    color: 'white',
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_12,
  },
  dot: {
    backgroundColor: 'gray',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});

export default styles;
