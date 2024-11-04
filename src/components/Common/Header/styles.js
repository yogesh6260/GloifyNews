import {StyleSheet} from 'react-native';
import {FONT_SIZE_16} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
import {horizontalScale, verticalScale} from '../../../styles/metrics';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: verticalScale(50),
    // marginTop: '1%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(10),
  },

  transparentHeaderContainer: {
    width: '100%',
    height: verticalScale(50),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(10),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },

  menuBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: horizontalScale(22),
    height: verticalScale(22),
    resizeMode: 'contain',
  },
  searchIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: verticalScale(25),
    justifyContent: 'center',
  },
  tabBarLink: {
    height: verticalScale(35),
    borderBottomWidth: horizontalScale(2),
    paddingBottom: verticalScale(5),
  },
  tabBarLinkLabel: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('semibold'),
  },
});

export default styles;
