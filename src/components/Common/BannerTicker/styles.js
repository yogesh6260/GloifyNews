import {Dimensions, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../styles/metrics';
import {
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
  FONT_SIZE_24,
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
    justifyContent: 'space-between',
  },
  topGainersandLosersName: {
    fontSize: FONT_SIZE_14,
    color: 'white',
    fontFamily: getFontFamily('semibold'),
  },
  topGainersandLosersSubContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topGainersandLosersChange: {
    fontSize: FONT_SIZE_16,
    color: 'white',
    fontFamily: getFontFamily('bold'),
  },
  topGainersandLosersIcon: {
    width: horizontalScale(12),
    height: verticalScale(12),
    marginLeft: horizontalScale(5),
  },
  topGainersandLosersPercentageChange: {
    fontSize: FONT_SIZE_12,
    color: '#32CD32',
    fontFamily: getFontFamily('normal'),
  },
  tickerContent: {
    flexDirection: 'row',
    gap: horizontalScale(12),
  },
});

export default styles;
