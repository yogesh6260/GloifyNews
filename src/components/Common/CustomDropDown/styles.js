import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';

const styles = StyleSheet.create({
  dropDownContainer: {
    backgroundColor: 'transparent',
    borderColor: '#ddd',
    borderWidth: horizontalScale(1),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    marginVertical: verticalScale(5),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  dropDownItemList: {
    gap: verticalScale(5),
  },
});

export default styles;
