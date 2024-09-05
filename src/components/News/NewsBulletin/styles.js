import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../utils/fontFamily';
import {FONT_SIZE_12, FONT_SIZE_14} from '../../../styles/fontSize';

const styles = StyleSheet.create({
  bulletin: {
    width: '100%',
    height: 'auto',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 30,
  },
  bulletinLeft: {
    gap: 10,
    width: '70%',
    marginLeft: 10,
  },
  bulletinHeading: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_14,
  },
  bulletinLeftBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bulletinSource: {
    fontFamily: getFontFamily('normal'),
    fontSize: FONT_SIZE_12,
  },
  bulletinSubLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bulletinReadTime: {
    fontFamily: getFontFamily('normal'),
    fontSize: FONT_SIZE_12,
  },
  bulletinRight: {
    width: '25%',
  },
  moreIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  bulletinImg: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
});

export default styles;
