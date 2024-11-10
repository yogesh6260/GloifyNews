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
    marginVertical: verticalScale(5),
  },
  newspaperImage: {
    width: horizontalScale(150),
    height: verticalScale(150),
    flex: 1,
    resizeMode: 'contain',
  },
  newspaperContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    paddingBottom: verticalScale(50),
  },
});

export default styles;
