import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  dropDownContainer: {
    width: '100%',
    // height: 150,
    backgroundColor: 'transparent',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
  },
  dropDownItemList: {
    gap: 5,
  },
});

export default styles;
