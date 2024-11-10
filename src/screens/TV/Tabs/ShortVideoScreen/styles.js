import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  shortContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default styles;
