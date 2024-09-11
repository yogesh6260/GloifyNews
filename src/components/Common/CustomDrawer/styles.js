import {StyleSheet, Dimensions} from 'react-native';
import {FONT_SIZE_14, FONT_SIZE_20} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';
import {horizontalScale, verticalScale} from '../../../styles/metrics';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  contentWrapper: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(30),
  },
  headerTitle: {
    marginLeft: horizontalScale(100),
    fontSize: FONT_SIZE_20,
    fontFamily: getFontFamily('bold'),
  },
  menu: {
    justifyContent: 'center',
    gap: verticalScale(25),
    marginTop: verticalScale(30),
  },
  backIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: verticalScale(20),
  },
  menuIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
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
    marginTop: verticalScale(470),
    alignSelf: 'center',
  },
});

export default styles;
