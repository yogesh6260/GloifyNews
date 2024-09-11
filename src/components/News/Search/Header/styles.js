import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../../utils/fontFamily';
import {FONT_SIZE_12, FONT_SIZE_14} from '../../../../styles/fontSize';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../styles/metrics';

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: 'row',
    height: horizontalScale(100),
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
    gap: verticalScale(10),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: verticalScale(8),
    backgroundColor: '#fff',
    width: '80%',
    height: verticalScale(50),
    borderRadius: moderateScale(30),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  searchIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  searchInput: {
    height: verticalScale(40),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
  cancelText: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_14,
  },
  searchType: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    gap: verticalScale(5),
    paddingHorizontal: horizontalScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchTypeText: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_12,
    borderWidth: horizontalScale(2),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(20),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
