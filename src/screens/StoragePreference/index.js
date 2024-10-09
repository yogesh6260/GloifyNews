import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {RadioButton} from 'react-native-radio-buttons-group';
import {ICONS} from '../../constants';
import {useTheme} from '@react-navigation/native';

const StoragePreference = ({navigation}) => {
  const [selectedRadio, setSelectedRadio] = useState(null);

  const {colors} = useTheme();

  const handleRadioButtonPress = id => {
    setSelectedRadio(id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, {tintColor: colors.text}]}
            source={ICONS.BACK}
          />
        </Pressable>
        <Text style={[styles.title, {color: colors.headerLabel}]}>
          Storage Preference
        </Text>
      </View>
      <View style={styles.containerContent}>
        <RadioButton
          id="1"
          size={20}
          label={'Internal Memory'}
          labelStyle={[styles.radioLabel, {color: colors.text}]}
          borderColor="gray"
          selected={selectedRadio === '1'}
          onPress={() => handleRadioButtonPress('1')}
          color={colors.icon}
        />
        <RadioButton
          id="2"
          size={20}
          label={'External Memory'}
          labelStyle={[styles.radioLabel, {color: colors.text}]}
          borderColor="gray"
          selected={selectedRadio === '2'}
          onPress={() => handleRadioButtonPress('2')}
          color={colors.icon}
        />
      </View>
    </View>
  );
};

export default StoragePreference;
