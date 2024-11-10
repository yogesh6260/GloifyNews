import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const styles = StyleSheet.create({
  reactionContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: verticalScale(50), // Adjust based on where you want it to appear
    left: horizontalScale(20),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(20),
    shadowOffset: {width: 0, height: verticalScale(2)},
    shadowOpacity: 0.8,
    shadowRadius: moderateScale(2),
    elevation: 5,
  },
  reactionButton: {
    marginHorizontal: horizontalScale(5),
  },
  reactionIcon: {
    width: horizontalScale(30),
    height: verticalScale(30),
  },
});

export default styles;
