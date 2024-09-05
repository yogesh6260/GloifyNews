import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../../utils/fontFamily';
import {FONT_SIZE_12, FONT_SIZE_14} from '../../../../styles/fontSize';

const styles = StyleSheet.create({
  categoryHeader: {
    flexDirection: 'row',
    gap: 5,
    marginVertical: 5,
  },
  category: {
    borderRadius: 30,
    padding: 10,
    borderWidth: 2,
  },
  categoryLabel: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_14,
  },
  newsChannels: {
    marginVertical: 10,
    height: 120,
  },
  newsChannelFlatlist: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  Circle: {
    width: 80,
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImg: {
    width: 65,
    height: 65,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  circleLabel: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('bold'),
  },
});

export default styles;
