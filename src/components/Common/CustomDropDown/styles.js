import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const styles = StyleSheet.create({
  dropDownContainer: {
    borderRadius: moderateScale(10), // Rounded corners
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    // shadowColor: '#000',
    shadowOffset: {width: 0, height: verticalScale(4)},
    shadowOpacity: 0.2, // Subtle shadow for a card effect
    shadowRadius: moderateScale(4),
    elevation: 5, // For Android shadow
    position: 'absolute', // Drop down should overlay over other elements
    top: verticalScale(100), // Adjust based on where you want to position the dropdown
    right: 0,
    zIndex: 1000, // Ensure it appears above other elements
  },
  dropDownItemList: {
    gap: verticalScale(10),
  },
});

export default styles;
