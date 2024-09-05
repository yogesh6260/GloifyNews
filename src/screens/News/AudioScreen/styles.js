import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../../utils/fontFamily';
import {FONT_SIZE_20, FONT_SIZE_22} from '../../../styles/fontSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_20,
    marginLeft: 70,
  },
  btnClose: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  closeIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  audioImg: {
    borderRadius: 30,
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
    marginTop: 30,
  },
  newsTitle: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_22,
    marginVertical: 20,
  },
  audioTimeline: {
    width: '100%',
    marginVertical: 10,
  },
  volumeSlider: {
    width: '70%',
  },
  audioControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
    marginVertical: 10,
  },
  volumeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  controlIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  playIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  volumeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;
