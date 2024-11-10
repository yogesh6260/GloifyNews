import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../styles/metrics';
import {
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_20,
} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(16),
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
  contentContainer: {
    marginTop: verticalScale(10),
    width: '100%',
    paddingBottom: verticalScale(50),
  },
  contentContainerHeader: {
    backgroundColor: '#EEEDEB',
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
    color: 'black',
  },
  sectionContainer: {
    gap: verticalScale(10),
  },
  sectionHeader: {
    fontSize: FONT_SIZE_14,
    fontFamily: getFontFamily('bold'),
    marginLeft: horizontalScale(5),
    marginBottom: verticalScale(5),
  },
  sectionContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: horizontalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  sectionBullet: {
    fontFamily: getFontFamily('bold'),
    fontSize: FONT_SIZE_12,
  },
  sectionText: {
    fontSize: FONT_SIZE_12,
    marginRight: horizontalScale(15),
    textAlign: 'justify',
  },
});

export default styles;
