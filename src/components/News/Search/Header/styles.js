import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../../utils/fontFamily';
import {FONT_SIZE_12, FONT_SIZE_14} from '../../../../styles/fontSize';

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#fff',
    width: '80%',
    height: 50,
    borderRadius: 30,
    padding: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  searchInput: {
    height: 40,
    padding: 10,
  },
  cancelText: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_14,
  },
  searchType: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchTypeText: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
