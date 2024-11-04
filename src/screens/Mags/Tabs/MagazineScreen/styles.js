import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../styles/metrics';
import {getFontFamily} from '../../../../utils/fontFamily';
import {
  FONT_SIZE_10,
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_16,
} from '../../../../styles/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(20),
  },
  categoryHeader: {
    flexDirection: 'row',
    gap: verticalScale(5),
    paddingVertical: verticalScale(5),
    paddingBottom: verticalScale(10),
  },
  category: {
    borderRadius: moderateScale(20),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    borderWidth: horizontalScale(2),
  },
  categoryLabel: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_14,
  },
  section: {
    marginVertical: verticalScale(20),
  },
  heading: {
    marginBottom: verticalScale(10),
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_16,
  },
  languageTab: {
    width: horizontalScale(100),
    height: verticalScale(65),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  languageLabel: {
    fontFamily: getFontFamily('normal'),
    fontSize: FONT_SIZE_16,
  },
  magazineItem: {
    width: horizontalScale(110),
    height: verticalScale(250),
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(10),
    gap: verticalScale(5),
    marginVertical: verticalScale(10),
  },
  magazineImage: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    borderRadius: moderateScale(10),
  },
  magazineTitle: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_12,
  },
  magazineDate: {
    fontFamily: getFontFamily('normal'),
    fontSize: FONT_SIZE_10,
  },
  magazineContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: horizontalScale(12),
  },
  magazineContent: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  contentWrapper: {
    paddingBottom: verticalScale(50),
  },
});

export default styles;
