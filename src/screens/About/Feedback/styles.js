import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_20,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {},
  icon: {
    width: horizontalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: FONT_SIZE_20,
    fontFamily: getFontFamily('bold'),
    flex: 1,
    textAlign: 'center',
  },
  label: {
    fontSize: FONT_SIZE_16,
    fontFamily: getFontFamily('semibold'),
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: verticalScale(10),
    gap: horizontalScale(10),
  },
  starButton: {},
  star: {
    width: horizontalScale(50),
    height: verticalScale(50),
    resizeMode: 'contain',
  },
  feedbackInput: {
    marginVertical: verticalScale(10),
    height: verticalScale(150),
    borderRadius: moderateScale(12),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),

    textAlignVertical: 'top',
    color: '#333333',
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_14,
  },
  emailInput: {
    height: verticalScale(50),
    marginVertical: verticalScale(10),
    borderRadius: moderateScale(30),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),

    color: '#333333',
    fontFamily: getFontFamily('semibold'),
    fontSize: FONT_SIZE_14,
  },
  submitButton: {
    height: 50,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnWrapper: {
    marginVertical: verticalScale(20),
  },
});

export default styles;
