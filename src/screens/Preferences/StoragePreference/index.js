import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {RadioButton} from 'react-native-radio-buttons-group';
import {ICONS} from '../../../constants';
import {useTheme} from '@react-navigation/native';
import {moderateScale} from '../../../styles/metrics';
import {useTranslation} from 'react-i18next';

const StoragePreference = ({navigation}) => {
  const [selectedRadio, setSelectedRadio] = useState(null);

  const {colors} = useTheme();
  const {t} = useTranslation();

  const handleRadioButtonPress = id => {
    setSelectedRadio(id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          android_ripple={{
            color: 'lightgray',
            borderless: true,
            radius: moderateScale(50),
          }}
          style={styles.backBtn}
          onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon, {tintColor: colors.text}]}
            source={ICONS.BACK}
          />
        </Pressable>
        <Text style={[styles.title, {color: colors.headerLabel}]}>
          {t('screens.storage_preference.title')}
        </Text>
      </View>
      <View style={styles.containerContent}>
        <RadioButton
          id="1"
          size={20}
          label={t('screens.storage_preference.radio.internal_memory')}
          labelStyle={[styles.radioLabel, {color: colors.text}]}
          borderColor="gray"
          selected={selectedRadio === '1'}
          onPress={() => handleRadioButtonPress('1')}
          color={colors.icon}
        />
        <RadioButton
          id="2"
          size={20}
          label={t('screens.storage_preference.radio.external_memory')}
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
