import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_20,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const styles = StyleSheet.create({
  card: {
    // elevation: 1,
    height: verticalScale(600),
    display: 'flex',
    gap: verticalScale(5),
    borderRadius: moderateScale(30),
  },
  cardContent: {
    paddingHorizontal: horizontalScale(20),
    display: 'flex',
    gap: verticalScale(5),
  },
  cardTitle: {
    fontSize: FONT_SIZE_20,
    fontFamily: getFontFamily('bold'),
  },
  cardSubTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardSubTitleLeft: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('normal'),
  },
  cardSubTitleRight: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('bold'),
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    backgroundColor: 'lightgray',
    borderRadius: moderateScale(20),
  },
  cardImg: {
    width: '100%',
    height: verticalScale(250),
    borderRadius: moderateScale(30),
  },
  cardReactIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  reactionIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(20),
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  reactionIconWrapper: {
    // marginBottom: 10,
  },

  reactionIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    borderRadius: moderateScale(50),
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
  },
  cardDesc: {
    marginTop: verticalScale(20),
    height: verticalScale(100),
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('normal'),
  },
  cardReadMore: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('normal'),
    color: 'lightgray',
  },
  authorName: {
    fontFamily: getFontFamily('bold'),
  },
  cardActionTab: {
    marginTop: verticalScale(20),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: verticalScale(15),
  },
  cardReact: {
    display: 'flex',
    flexDirection: 'row',
    gap: verticalScale(10),
    alignItems: 'center',
  },
  cardReactCount: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_16,
  },
});

export default styles;
