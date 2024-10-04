import {Dimensions, StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {
  FONT_SIZE_10,
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
  FONT_SIZE_24,
  FONT_SIZE_8,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    marginVertical: verticalScale(10),
    height: verticalScale(250),
  },
  stockDataContainer: {
    marginTop: verticalScale(15),
  },
  stockDataContent: {
    flexDirection: 'row',
    gap: horizontalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  stockDataName: {
    fontSize: FONT_SIZE_14,
    color: 'white',
    fontFamily: getFontFamily('semibold'),
  },
  stockDataPrice: {
    fontSize: FONT_SIZE_16,
    color: 'white',
    fontFamily: getFontFamily('bold'),
  },
  stockDataSubContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stockDataIcon: {
    width: horizontalScale(15),
    height: verticalScale(15),
  },
  stockDataChange: {
    fontSize: FONT_SIZE_14,
  },
  stockDataChangePercentage: {
    fontSize: FONT_SIZE_14,
  },
  topGainersandLosersContainer: {
    flexDirection: 'column',
    gap: verticalScale(16),
  },
  topGainersandLosersHeading: {
    alignSelf: 'center',
    fontSize: FONT_SIZE_16,
    color: 'white',
    fontFamily: getFontFamily('semibold'),
  },
  topGainersandLosersContent: {},
  topGainersandLosersContentRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  topGainersandLosersName: {
    fontSize: FONT_SIZE_14,
    color: 'white',
    fontFamily: getFontFamily('semibold'),
    textAlign: 'justify',
  },
  topGainersandLosersSubContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topGainersandLosersChange: {
    fontSize: FONT_SIZE_16,
    color: 'white',
    fontFamily: getFontFamily('bold'),
    textAlign: 'justify',
  },
  topGainersandLosersIcon: {
    width: horizontalScale(12),
    height: verticalScale(12),
    marginLeft: horizontalScale(5),
    textAlign: 'justify',
  },
  topGainersandLosersPercentageChange: {
    fontSize: FONT_SIZE_12,
    color: '#32CD32',
    fontFamily: getFontFamily('normal'),
    textAlign: 'justify',
  },
  tickerContent: {
    flexDirection: 'row',
    gap: horizontalScale(12),
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
});

export default styles;
