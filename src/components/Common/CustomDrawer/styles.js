import {StyleSheet, Dimensions} from 'react-native';
import {
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
    width: width,
    height: height,
    justifyContent: 'space-between',

    paddingVertical: verticalScale(20),
  },
  header: {
    flexDirection: 'row',
    marginBottom: verticalScale(30),
    paddingHorizontal: horizontalScale(20),
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: horizontalScale(100),
    fontSize: FONT_SIZE_20,
    fontFamily: getFontFamily('bold'),
  },
  menu: {
    width: '100%',
    marginTop: verticalScale(30),
  },
  backBtn: {
    width: horizontalScale(30),
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  menuItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: verticalScale(20),
    height: verticalScale(50),
    paddingHorizontal: horizontalScale(20),
  },
  menuIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  menuLabel: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('medium'),
  },
  switch: {
    marginRight: 0,
    marginLeft: 'auto',
  },
  footer: {
    alignSelf: 'center',
  },
  rightIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
    marginRight: 0,
    marginLeft: 'auto',
  },
});

export default styles;
