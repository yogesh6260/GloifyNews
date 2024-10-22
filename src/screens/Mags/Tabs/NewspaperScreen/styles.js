import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../styles/metrics';

const styles = StyleSheet.create({
  newspaperItem: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    width: horizontalScale(170),
    height: verticalScale(170),
    gap: verticalScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  newspaperImage: {
    width: horizontalScale(150),
    height: verticalScale(150),
    flex: 1,
    resizeMode: 'cover',
  },
  newspaperContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
