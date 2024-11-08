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
import {useSelector} from 'react-redux';

const PlaceholderComponent = ({colors, t, navigation}) => {
  return (
    <View style={styles.contentContainer}>
      <Image source={ICONS.MAGAZINE} style={styles.icon} />
      <Text style={styles.placeholderText}>
        {t('components.magazines.text.placeholder_text')}
      </Text>

      <Button
        text={t('components.magazines.text.btn.explore_magazines')}
        bgColor={colors.btnBackground}
        variant="elevated"
        width={horizontalScale(220)}
        height={verticalScale(55)}
        borderRadius={moderateScale(30)}
        onPress={() =>
          navigation.navigate('BottomTab', {
            screen: 'Mags & Papers',
            params: {
              screen: 'Magazines', // Targeting the Magazines tab
            },
          })
        }
      />
    </View>
  );
};

const Magazines = () => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const magazines = useSelector(
    state => state.user.additional.downloads.magazines,
  );
  console.log(magazines);

  // console.log(magazines);
  return <PlaceholderComponent colors={colors} t={t} navigation={navigation} />;
};

export default Magazines;
