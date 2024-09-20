import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../styles/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchResults: {
    marginVertical: verticalScale(30),
    marginHorizontal: horizontalScale(10),
    gap: verticalScale(10),
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(5),
    paddingBottom: verticalScale(50), // Ensures padding at the bottom
  },
  footerPadding: {
    height: verticalScale(30), // Space at the bottom for better spacing
  },
});

export default styles;
