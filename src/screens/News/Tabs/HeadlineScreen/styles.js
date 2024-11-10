import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsHeadlineList: {
    gap: verticalScale(15),
    paddingBottom: verticalScale(20),
  },
});

export default styles;
