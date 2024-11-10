import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../styles/metrics';
import {getFontFamily} from '../../../utils/fontFamily';
import {
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_16,
} from '../../../styles/fontSize';

const styles = StyleSheet.create({
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
});

export default styles;
