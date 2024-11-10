import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {ICONS} from '../../../constants';
import {moderateScale, verticalScale} from '../../../styles/metrics';
import {FONT_SIZE_16} from '../../../styles/fontSize';
import {useTheme} from '@react-navigation/native';
import {Button} from '../../../components/Common';
import styles from './styles';
import {useTranslation} from 'react-i18next';

const Feedback = ({navigation}) => {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => setRating(i)}
          style={styles.starButton}>
          <Image
            source={i <= rating ? ICONS.STAR_FILL : ICONS.STAR}
            style={[styles.star, i <= rating ? {} : {tintColor: 'lightgray'}]}
          />
        </TouchableOpacity>,
      );
    }
    return stars;
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.header}>
        <Pressable
          android_ripple={{
            color: 'lightgray',
            borderless: true,
            radius: moderateScale(50),
          }}
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            source={ICONS.BACK}
            style={[styles.icon, {tintColor: colors.text}]}
          />
        </Pressable>
        <Text style={[styles.headerTitle, {color: colors.headerLabel}]}>
          {t('screens.feedback.title')}
        </Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text
            style={[
              styles.label,
              {
                color: colors.text,
                marginVertical: verticalScale(30),
              },
            ]}>
            {t('screens.feedback.subtitle')}
          </Text>
          <View style={styles.starContainer}>{renderStars()}</View>

          <Text
            style={[
              styles.label,
              {marginTop: verticalScale(10), color: colors.text},
            ]}>
            {t('screens.feedback.text.input.experience_label')}
          </Text>
          <TextInput
            style={[
              styles.feedbackInput,
              {backgroundColor: colors.inputBackground},
            ]}
            placeholder={t(
              'screens.feedback.text.input.experience_placeholder',
            )}
            placeholderTextColor="#CCCCCC"
            multiline
            onChangeText={text => setFeedback(text)}
            value={feedback}
            maxLength={200}
          />

          <Text
            style={[
              styles.label,
              {marginTop: verticalScale(10), color: colors.text},
            ]}>
            {t('screens.feedback.text.input.email_label')}
          </Text>
          <TextInput
            style={[
              styles.emailInput,
              {backgroundColor: colors.inputBackground},
            ]}
            placeholder={t('screens.feedback.text.input.email_placeholder')}
            placeholderTextColor="#CCCCCC"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
      </ScrollView>
      <View style={styles.btnWrapper}>
        <Button
          text={t('screens.feedback.text.btn.submit')}
          bgColor={colors.btnBackground}
          width={'100%'}
          height={verticalScale(55)}
          variant="elevated"
          borderRadius={moderateScale(30)}
          textSize={FONT_SIZE_16}
          weight="bold"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Feedback;
