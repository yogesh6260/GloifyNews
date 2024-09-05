import {StyleSheet} from 'react-native';
import {FONT_SIZE_14} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  menuIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  tabBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  tabBarLink: {
    borderBottomWidth: 3,
    paddingBottom: 5,
  },
  tabBarLinkLabel: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
  },
});

export default styles;
