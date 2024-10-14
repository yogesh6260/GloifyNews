import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ICONS, STRINGS} from '../../../constants';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../styles/metrics';
import {FONT_SIZE_16} from '../../../styles/fontSize';
import {useTheme} from '@react-navigation/native';
import {Button} from '../../../components/Common';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage} from '../../../redux/actions/user/userActions';

const languages = [
  {code: 'en', name: 'English'},
  {code: 'hi', name: 'हिंदी'},
  {code: 'ta', name: 'தமிழ்'},
  {code: 'bn', name: 'বাংলা'},
  {code: 'gu', name: 'ગુજરાતી'},
  {code: 'mr', name: 'मराठी'},
  {code: 'kn', name: 'ಕನ್ನಡ'},
  {code: 'ur', name: 'اردو'},
  {code: 'pa', name: 'ਪੰਜਾਬੀ'},
  {code: 'te', name: 'తెలుగు'},
  {code: 'or', name: 'ଓଡ଼ିଆ'},
  {code: 'as', name: 'অসমীয়া'},
  {code: 'ml', name: 'മലയാളം'},
];

const LanguageScreen = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const dispatch = useDispatch();
  const language = useSelector(state => state.user.preference.language);
  const {colors} = useTheme();
  const {i18n, t} = useTranslation();

  useEffect(() => {
    if (language) {
      setSelectedLanguage(language);
    }
  }, [language]);

  const handleDonePress = () => {
    dispatch(setLanguage(selectedLanguage));
    i18n.changeLanguage(selectedLanguage);
    navigation.goBack();
  };
  const renderLanguageItem = ({item}) => (
    <TouchableOpacity
      key={item.code}
      style={[
        styles.languageButton,
        {
          backgroundColor: colors.tileBackground,
          borderColor:
            selectedLanguage === item.code ? colors.border : colors.background,
        },
      ]}
      onPress={() => setSelectedLanguage(item.code)}>
      <Text style={[styles.languageText, {color: colors.tileText}]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Pressable
          android_ripple={{
            color: 'lightgray',
            borderless: true,
            radius: moderateScale(50),
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={ICONS.BACK}
            style={[styles.icon, {tintColor: colors.text}]}
          />
        </Pressable>
        <Text style={[styles.title, {color: colors.headerLabel}]}>
          {t('screens.language.title')}
        </Text>
      </View>
      <Text style={[styles.subtitle, {color: colors.text}]}>
        {t('screens.language.subtitle')}
      </Text>

      <FlatList
        data={languages}
        renderItem={renderLanguageItem}
        numColumns={2}
        contentContainerStyle={styles.languageList}
      />

      <View style={styles.btnWrapper}>
        <Button
          bgColor={colors.btnBackground}
          text={t('screens.language.text.btn.done')}
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
