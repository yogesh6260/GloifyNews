import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: horizontalScale(20),
  },
  newsHeadlineList: {
    gap: verticalScale(15),
    paddingBottom: verticalScale(20),
  },
});

export default styles;
