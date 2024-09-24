import {StyleSheet} from 'react-native';
import {FONT_SIZE_14, FONT_SIZE_16} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
import {horizontalScale, verticalScale} from '../../../styles/metrics';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(10),
  },
  menuIcon: {
    width: horizontalScale(22),
    height: verticalScale(22),
    resizeMode: 'contain',
  },
  searchIcon: {
    width: horizontalScale(22),
    height: verticalScale(22),
    resizeMode: 'contain',
  },
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: verticalScale(20),
  },
  tabBarLink: {
    borderBottomWidth: horizontalScale(2),
    paddingBottom: verticalScale(5),
  },
  tabBarLinkLabel: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('semibold'),
  },
});

export default styles;
