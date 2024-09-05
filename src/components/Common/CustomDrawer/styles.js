import {StyleSheet, Dimensions} from 'react-native';
import {FONT_SIZE_14, FONT_SIZE_20} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    padding: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    marginLeft: 100,
    fontSize: FONT_SIZE_20,
    fontFamily: getFontFamily('bold'),
  },
  menu: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: 25,
    marginTop: 30,
  },
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  menuIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  menuLabel: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
  },
  switch: {
    marginRight: 0,
    marginLeft: 'auto',
  },
  footer: {
    marginTop: 400,
    alignSelf: 'center',
  },
});

export default styles;
