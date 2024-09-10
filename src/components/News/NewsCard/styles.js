import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_12,
  FONT_SIZE_14,
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
  },
});

export default styles;
