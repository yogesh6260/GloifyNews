import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_20,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  card: {
    // elevation: 1,
    height: 550,
    display: 'flex',
    gap: 5,
    borderRadius: 30,
  },
  cardContent: {
    paddingHorizontal: 20,
    display: 'flex',
    gap: 5,
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
    padding: 5,
    backgroundColor: 'lightgray',
    borderRadius: 20,
  },
  cardImg: {
    width: '100%',
    height: 200,
    borderRadius: 30,
  },
  cardReactIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  reactionIconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },

  reactionIconWrapper: {
    // marginBottom: 10,
  },

  reactionIcon: {
    width: 20,
    height: 20,
    borderRadius: 50,
    padding: 5,
  },
  cardDesc: {
    marginTop: 20,
    height: 100,
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
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  cardReact: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  cardReactCount: {
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_16,
  },
});

export default styles;
