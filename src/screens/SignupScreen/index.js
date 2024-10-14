import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {ICONS, IMAGES} from '../../constants';
import {Button, Snackbar, Loader} from '../../components/Common';
import {saveUserToFirestore} from '../../utils/helpers';
import {
  validateContact,
  validateEmail,
  validatePassword,
} from '../../utils/validator';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../styles/metrics';
import {FONT_SIZE_16} from '../../styles/fontSize';
import {useTranslation} from 'react-i18next';

const SignupScreen = ({navigation}) => {
  const {colors} = useTheme();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
  });

  const [check, setCheck] = useState({
    name: false,
    email: false,
    password: false,
    contact: false,
  });
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [loader, setLoader] = useState(false);

  // SNACKBAR STATES
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const {t} = useTranslation();

  useEffect(() => {
    setCheck({...false});
  }, []);

  const handleInputChange = (text, name) => {
    setUser({...user, [name]: text});
    if (Object.values(user).every(value => value === '')) {
      setError({name: '', email: '', password: '', contact: ''});
      setCheck({name: false, email: false, password: false, contact: false});
    } else {
      validateInput(text, name);
    }
  };

  const validateInput = (text, name) => {
    switch (name) {
      case 'name':
        if (text === '') {
          setError({
            ...error,
            name: t('screens.signup.text.snackbar.full_name_error'),
          });
          setMessageType('error');
          setMessage(t('screens.signup.text.snackbar.full_name_error'));
          setIsVisible(true);
          setCheck({...check, name: false});
        } else {
          setError({...error, name: ''});

          setCheck({...check, name: true});
        }
        break;
      case 'email':
        if (!validateEmail(text)) {
          setError({
            ...error,
            email: t('screens.signup.text.snackbar.email_error'),
          });
          setMessageType('error');
          setMessage(error.email);
          setIsVisible(true);
          setCheck({...check, email: false});
        } else {
          setError({...error, email: ''});

          setCheck({...check, email: true});
        }
        break;
      case 'password':
        if (!validatePassword(text)) {
          setError({
            ...error,
            password: t('screens.signup.text.snackbar.password_error'),
          });
          setMessageType('error');
          setMessage(error.password);
          setIsVisible(true);
          setCheck({...check, password: false});
        } else {
          setError({...error, password: ''});

          setCheck({...check, password: true});
        }
        break;
      case 'contact':
        if (!validateContact(text)) {
          setError({
            ...error,
            contact: t('screens.signup.text.snackbar.contact_error'),
          });
          setMessageType('error');
          setMessage(error.contact);
          setIsVisible(true);
          setCheck({...check, contact: false});
        } else {
          setError({...error, contact: ''});

          setCheck({...check, contact: true});
        }
        break;
      default:
        break;
    }
  };

  const handleSignup = async () => {
    setLoader(true);
    const {name, email, password, contact} = user;
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      validateContact(contact) &&
      name !== ''
    ) {
      const response = await saveUserToFirestore(user);
      if (response.type === 'error') {
        setLoader(false);
        setMessageType('error');
        setIsVisible(true);
        setMessage(response.message);
        setUser({...''});
        setError({...''});
        setCheck({...false});
      } else {
        setLoader(false);
        setMessageType('success');
        setIsVisible(true);
        setMessage(response.message);
        navigation.navigate('Login');
      }
    } else {
      setLoader(false);
      setMessageType('error');
      setIsVisible(true);
      setMessage(
        t('screens.signup.text.snackbar.please_fill_all_the_fields_correctly'),
      );
      setError({...''});
      setCheck({...false});
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        style={[
          styles.container,
          {
            backgroundColor: colors.background,
            opacity: loader ? 0.5 : 1,
          },
        ]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.signupForm}>
          <View style={styles.centeredContainer}>
            <View style={styles.formHeader}>
              <View style={styles.logoContainer}>
                <Image source={IMAGES.LOGO} style={styles.logo} />
              </View>
              <View style={styles.formHeaderSubTitle}>
                <Text style={[styles.loginTxt, {color: colors.text}]}>
                  {t('screens.signup.title')}
                </Text>
                <Text style={[styles.loginSubTxt, {color: colors.text}]}>
                  {t('screens.signup.subtitle')}
                </Text>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputContainerContent}>
                <Text style={[styles.inputText, {color: colors.text}]}>
                  {t('screens.signup.text.input.full_name_label')}
                </Text>
                <View
                  style={[
                    styles.loginInput,
                    styles.passwordWrapper,
                    {backgroundColor: colors.inputBackground},
                  ]}>
                  <TextInput
                    style={[
                      styles.passwordInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    keyboardType="default"
                    value={user.name}
                    autoComplete="off"
                    onChangeText={text => handleInputChange(text, 'name')}
                    placeholder={t(
                      'screens.signup.text.input.full_name_placeholder',
                    )}
                    maxLength={30}
                    placeholderTextColor={colors.inputPlaceholder}
                    selectionColor="orange"
                    cursorColor="orange"
                  />
                  {error.name ? (
                    <TouchableOpacity>
                      <Image
                        source={ICONS.ERROR}
                        style={[styles.eyeIcon, {tintColor: colors.border}]}
                      />
                    </TouchableOpacity>
                  ) : check.name ? (
                    <TouchableOpacity>
                      <Image
                        source={ICONS.CORRECT}
                        style={[styles.eyeIcon, {tintColor: colors.border}]}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>

              <View style={styles.inputContainerContent}>
                <Text style={[styles.inputText, {color: colors.text}]}>
                  {t('screens.signup.text.input.email_label')}
                </Text>
                <View
                  style={[
                    styles.loginInput,
                    styles.passwordWrapper,
                    {backgroundColor: colors.inputBackground},
                  ]}>
                  <TextInput
                    style={[
                      styles.passwordInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    keyboardType="email-address"
                    value={user.email}
                    autoComplete="off"
                    onChangeText={text => handleInputChange(text, 'email')}
                    placeholder={t(
                      'screens.signup.text.input.email_placeholder',
                    )}
                    maxLength={30}
                    placeholderTextColor={colors.inputPlaceholder}
                  />
                  {error.email ? (
                    <TouchableOpacity>
                      <Image
                        source={ICONS.ERROR}
                        style={[styles.eyeIcon, {tintColor: colors.border}]}
                      />
                    </TouchableOpacity>
                  ) : check.email ? (
                    <TouchableOpacity>
                      <Image
                        source={ICONS.CORRECT}
                        style={[styles.eyeIcon, {tintColor: colors.border}]}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
              <View style={styles.inputContainerContent}>
                <Text style={[styles.inputText, {color: colors.text}]}>
                  {t('screens.signup.text.input.password_label')}
                </Text>
                <View
                  style={[
                    styles.loginInput,
                    styles.passwordWrapper,
                    {backgroundColor: colors.inputBackground},
                  ]}>
                  <TextInput
                    keyboardType="default"
                    secureTextEntry={isPasswordSecure}
                    value={user.password}
                    autoComplete="off"
                    onChangeText={text => handleInputChange(text, 'password')}
                    style={[
                      styles.passwordInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    placeholder={t(
                      'screens.signup.text.input.password_placeholder',
                    )}
                    maxLength={30}
                    placeholderTextColor={colors.inputPlaceholder}
                  />

                  {error.password ? (
                    <TouchableOpacity>
                      <Image
                        source={ICONS.ERROR}
                        style={[styles.eyeIcon, {tintColor: colors.border}]}
                      />
                    </TouchableOpacity>
                  ) : check.password ? (
                    <TouchableOpacity
                      onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                      <Image
                        source={isPasswordSecure ? ICONS.EYE_OFF : ICONS.EYE_ON}
                        style={[styles.eyeIcon, {tintColor: colors.border}]}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
              <View style={styles.inputContainerContent}>
                <Text style={[styles.inputText, {color: colors.text}]}>
                  {t('screens.signup.text.input.contact_label')}
                </Text>
                <View
                  style={[
                    styles.loginInput,
                    styles.passwordWrapper,
                    {backgroundColor: colors.inputBackground},
                  ]}>
                  <TextInput
                    style={[
                      styles.passwordInput,
                      {
                        color: colors.text,
                      },
                    ]}
                    keyboardType="number-pad"
                    value={user.contact}
                    autoComplete="off"
                    onChangeText={text => handleInputChange(text, 'contact')}
                    placeholder={t(
                      'screens.signup.text.input.contact_placeholder',
                    )}
                    maxLength={10}
                    placeholderTextColor={colors.inputPlaceholder}
                  />
                  {error.contact ? (
                    <TouchableOpacity>
                      <Image
                        source={ICONS.ERROR}
                        style={[styles.eyeIcon, {tintColor: colors.border}]}
                      />
                    </TouchableOpacity>
                  ) : check.contact ? (
                    <TouchableOpacity>
                      <Image
                        source={ICONS.CORRECT}
                        style={[styles.eyeIcon, {tintColor: colors.border}]}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.btnContainer}>
          <Button
            bgColor={colors.btnBackground}
            text={t('screens.signup.text.btn.signup')}
            textSize={FONT_SIZE_16}
            textColor={colors.btnText}
            width={horizontalScale(320)}
            height={verticalScale(60)}
            onPress={handleSignup}
            variant="elevated"
            borderRadius={moderateScale(30)}
          />
        </View>
        <View style={styles.footer}>
          <Text style={[styles.linkTxt, {color: colors.text}]}>
            {t('screens.signup.text.already_have_account')}
          </Text>
          <Button
            text={t('screens.signup.text.btn.login')}
            bgColor={colors.border}
            onPress={() => navigation.navigate('Login')}
            rippleColor={'transparent'}
            variant="text"
          />
        </View>
      </KeyboardAvoidingView>
      {loader ? (
        <View style={styles.absolute}>
          <Loader />
        </View>
      ) : null}
      <Snackbar
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        message={message}
        actionText={'Dismiss'}
        onActionPress={() => setIsVisible(false)}
        position="top"
        textColor={colors.snackBarTxt}
        type={messageType}
      />
    </>
  );
};

export default SignupScreen;
