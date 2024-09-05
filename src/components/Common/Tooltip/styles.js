import {StyleSheet} from 'react-native';
import {FONT_SIZE_12} from '../../../styles/fontSize';
import {getFontFamily} from '../../../utils/fontFamily';

const styles = StyleSheet.create({
  tooltip: {
    position: 'absolute',
    right: -10,
    // top: -30, need to change based on placement
    display: 'flex',
    // backgroundColor: 'orange',
    // width: 150,
    // height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    zIndex: 5,
    opacity: 1,
    margin: 0,
    padding: 5,
    flexWrap: 'wrap',
  },
  tooltipPin: {
    position: 'absolute',
    // top: 0,
    right: 10,

    width: 0,
    height: 0,
    borderLeftWidth: 16,
    borderLeftColor: 'transparent',
    borderRightWidth: 16,
    borderRightColor: 'transparent',
    // borderTopColor: 'orange',
    borderTopWidth: 18,
  },
  text: {
    fontSize: FONT_SIZE_12,
    fontFamily: getFontFamily('normal'),
    // color: 'white',
  },
});

export default styles;
