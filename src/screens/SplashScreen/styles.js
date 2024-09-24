import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: horizontalScale(400),
    height: horizontalScale(400),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    aspectRatio: 1 / 2,
    resizeMode: 'contain',
  },
});

export default styles;
