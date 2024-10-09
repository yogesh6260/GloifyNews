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

const Feedback = ({navigation}) => {
  const {colors} = useTheme();
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
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            source={ICONS.BACK}
            style={[styles.icon, {tintColor: colors.text}]}
          />
        </Pressable>
        <Text style={[styles.headerTitle, {color: colors.headerLabel}]}>
          Feedback
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
            Please share your rating for GloifyNews
          </Text>
          <View style={styles.starContainer}>{renderStars()}</View>

          <Text
            style={[
              styles.label,
              {marginTop: verticalScale(10), color: colors.text},
            ]}>
            Please describe your experience
          </Text>
          <TextInput
            style={[
              styles.feedbackInput,
              {backgroundColor: colors.inputBackground},
            ]}
            placeholder="Start writing..."
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
            Your Email
          </Text>
          <TextInput
            style={[
              styles.emailInput,
              {backgroundColor: colors.inputBackground},
            ]}
            placeholder="Write your Email ID..."
            placeholderTextColor="#CCCCCC"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
      </ScrollView>
      <View style={styles.btnWrapper}>
        <Button
          text={'Submit'}
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
