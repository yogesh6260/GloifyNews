import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    paddingLeft: horizontalScale(20),
  },
  newsHeadlineList: {
    paddingRight: horizontalScale(10),
    gap: verticalScale(10),
    paddingBottom: verticalScale(20),
  },
});

export default styles;
