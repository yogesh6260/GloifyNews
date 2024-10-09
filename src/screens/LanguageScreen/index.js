import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {ICONS, STRINGS} from '../../constants';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../styles/metrics';
import {FONT_SIZE_16} from '../../styles/fontSize';
import {useTheme} from '@react-navigation/native';
import {Button} from '../../components/Common';
import styles from './styles';

const languages = [
  'English',
  'हिंदी',
  'தமிழ்',
  'বাংলা',
  'ગુજરાતી',
  'मराठी',
  'ಕನ್ನಡ',
  'اردو',
  'ਪੰਜਾਬੀ',
  'తెలుగు',
  'ଓଡ଼ିଆ',
  'অসমীয়া',
  'മലയാളം',
];

const LanguageScreen = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const {colors} = useTheme();

  const handleDonePress = () => {};
  const renderLanguageItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.languageButton,
        {
          backgroundColor: colors.tileBackground,
          borderColor:
            selectedLanguage === item ? colors.border : colors.background,
        },
      ]}
      onPress={() => setSelectedLanguage(item)}>
      <Text style={[styles.languageText, {color: colors.tileText}]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={ICONS.BACK}
            style={[styles.icon, {tintColor: colors.text}]}
          />
        </Pressable>
        <Text style={[styles.title, {color: colors.headerLabel}]}>
          Language
        </Text>
      </View>
      <Text style={[styles.subtitle, {color: colors.text}]}>
        Please select your preferred language
      </Text>

      <FlatList
        data={languages}
        renderItem={renderLanguageItem}
        keyExtractor={item => item}
        numColumns={2}
        contentContainerStyle={styles.languageList}
      />

      <View style={styles.btnWrapper}>
        <Button
          bgColor={colors.btnBackground}
          text={STRINGS.DONE}
          textColor={colors.btnText}
          textSize={FONT_SIZE_16}
          width={horizontalScale(320)}
          height={verticalScale(60)}
          onPress={handleDonePress}
          variant={'elevated'}
          borderRadius={moderateScale(30)}
        />
      </View>
    </View>
  );
};

export default LanguageScreen;
