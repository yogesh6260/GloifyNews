import {StyleSheet, Dimensions} from 'react-native';
import {
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_20,
} from '../../../styles/fontSize';
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
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
  },
  header: {
    flexDirection: 'row',
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
    width: horizontalScale(19),
    height: verticalScale(19),
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
    alignSelf: 'center',
  },
  rightIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
    marginRight: 0,
    marginLeft: 'auto',
  },
});

export default styles;
