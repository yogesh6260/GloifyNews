import {Dimensions, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../styles/metrics';
import {getFontFamily} from '../../utils/fontFamily';
import {FONT_SIZE_20} from '../../styles/fontSize';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1%',
    paddingHorizontal: horizontalScale(20),
  },
  backBtn: {},
  backIcon: {
    width: horizontalScale(28),
    height: verticalScale(28),
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_20,
  },
});

export default styles;
