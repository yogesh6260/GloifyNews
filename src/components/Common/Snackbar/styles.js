import {StyleSheet} from 'react-native';
import {FONT_SIZE_14} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    padding: 5,
    borderRadius: 10,
    position: 'absolute',
    zIndex: 5,
  },
  topContainer: {
    top: 15,
  },
  bottomContainer: {
    bottom: 15,
  },
  content: {
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  messageText: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
  },
  actionText: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
  },
});

export default styles;
