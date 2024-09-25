import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const styles = StyleSheet.create({
  dropDownContainer: {
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    shadowOffset: {width: 0, height: verticalScale(4)},
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(4),
    elevation: 5,
    position: 'absolute',
    top: verticalScale(50),
    right: 0,
    zIndex: 1000,
  },
  dropDownItemList: {
    gap: verticalScale(10),
  },
});

export default styles;
