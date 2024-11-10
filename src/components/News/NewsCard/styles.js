import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_12,
  FONT_SIZE_13,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_18,
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
    width: '100%',
    height: verticalScale(600),
    gap: verticalScale(5),
    borderRadius: moderateScale(25),
  },
  cardContent: {
    width: '100%',
    height: '52%',
    paddingHorizontal: horizontalScale(20),
    justifyContent: 'center',
    gap: verticalScale(5),
  },
  cardTitle: {
    fontSize: FONT_SIZE_18,
    fontFamily: getFontFamily('bold'),
  },
  cardSubTitle: {
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
    paddingHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImg: {
    width: '100%',
    height: '45%',
    borderRadius: moderateScale(25),
    resizeMode: 'cover',
  },
  cardReactIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  reactionIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),

    // shadowColor: '#000',
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
    // elevation: 5,
  },

  reactionIconWrapper: {
    // marginBottom: 10,
  },

  reactionIcon: {
    width: horizontalScale(15),
    height: verticalScale(15),
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
  },
  cardDesc: {
    flex: 1,
    fontSize: FONT_SIZE_13,
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
    marginTop: verticalScale(5),
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
    gap: horizontalScale(5),
    alignItems: 'center',
  },
  cardReactCount: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_16,
  },
});

export default styles;
