import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button} from '../../Common';
import {useNavigation, useTheme} from '@react-navigation/native';
import {ICONS} from '../../../constants';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {useTranslation} from 'react-i18next';

const PlaceholderComponent = ({colors, t, navigation}) => {
  return (
    <View style={styles.contentContainer}>
      <Image source={ICONS.NEWSPAPER} style={styles.icon} />
      <Text style={styles.placeholderText}>
        {t('components.newspapers.text.placeholder_text')}
      </Text>

      <Button
        text={t('components.newspapers.text.btn.explore_newspapers')}
        bgColor={colors.btnBackground}
        variant="elevated"
        width={horizontalScale(220)}
        height={verticalScale(55)}
        borderRadius={moderateScale(30)}
        onPress={() => navigation.navigate('Newspapers')}
      />
    </View>
  );
};

const Newspapers = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  return <PlaceholderComponent colors={colors} t={t} navigation={navigation} />;
};

export default Newspapers;
