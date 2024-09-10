import {StyleSheet} from 'react-native';
import {
  FONT_SIZE_12,
  FONT_SIZE_18,
  FONT_SIZE_24,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 30,
  },
  closeBtn: {
    marginLeft: 'auto',
    marginRight: 15,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: FONT_SIZE_24,
    fontFamily: getFontFamily('semibold'),
    marginLeft: 'auto',
  },
  subTitle: {
    marginTop: 20,
    fontSize: FONT_SIZE_18,
    fontFamily: getFontFamily('semibold'),
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    height: '55%',
  },
  categoryCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 2,
  },
  categoryText: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('bold'),
  },
});
export default styles;
