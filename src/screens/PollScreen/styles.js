import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../styles/metrics';
import {FONT_SIZE_16, FONT_SIZE_20} from '../../styles/fontSize';
import {getFontFamily} from '../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: horizontalScale(16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(16),
    justifyContent: 'space-between',
  },
  backButton: {
    fontSize: 24,
    color: '#000',
    marginRight: 8,
  },
  backIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  title: {
    fontSize: FONT_SIZE_20,
    fontFamily: getFontFamily('semibold'),
    alignSelf: 'center',
  },
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: verticalScale(2),
    borderBottomColor: '#DDD',
    marginTop: verticalScale(10),
  },
  tab: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: FONT_SIZE_16,
    paddingVertical: verticalScale(8),
    fontFamily: getFontFamily('semibold'),
  },
  activeTab: {
    bottom: -2,
    borderBottomWidth: verticalScale(2),
    borderBottomColor: '#BF1D2D',
  },
});

export default styles;
