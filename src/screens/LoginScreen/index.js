import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  BackHandler,
} from 'react-native';
import {Button, Snackbar} from '../../components/Common';
import React, {useState} from 'react';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import styles from './styles';
import {ICONS, IMAGES} from '../../constants';
import {loginUser} from '../../utils/helpers';
import Loader from '../../components/Common/Loader';
import {useDispatch} from 'react-redux';
import {saveUserData, setLogin} from '../../redux/actions/user/userActions';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../styles/metrics';
import {FONT_SIZE_16} from '../../styles/fontSize';
import {useTranslation} from 'react-i18next';

const LoginScreen = ({navigation}) => {
  const {colors} = useTheme();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [loader, setLoader] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const {t} = useTranslation();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => {
        subscription.remove();
      };
    }, []),
  );

  const handleInputChange = (text, name) => {
    setCredentials({...credentials, [name]: text});
  };

  const handleLogin = async () => {
    setLoader(true);
    const {email, password} = credentials;
    if (email && password) {
      const result = await loginUser(credentials);
      if (result.data) {
        const {name, email, contact, id} = result.data;
        dispatch(
          saveUserData({
            id,
            name,
            email,
            contact,
          }),
        );
        dispatch(setLogin());

        setLoader(false);
      } else {
        setLoader(false);
        setIsVisible(true);
        setMessage(t('screens.login.text.snackbar.invalid_credentials'));

        setCredentials({...''});
      }
    } else {
      setLoader(false);
      setIsVisible(true);
      setMessage(
        t('screens.login.text.snackbar.please_enter_both_email_and_password'),
      );
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        style={[
          styles.container,
          {backgroundColor: colors.background, opacity: loader ? 0.5 : 1},
        ]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.loginForm}>
          <View style={styles.centeredContainer}>
            <View style={styles.formHeader}>
              <View style={styles.logoContainer}>
                <Image source={IMAGES.LOGO} style={styles.logo} />
              </View>
              <View style={styles.formHeaderSubTitle}>
                <Text style={[styles.loginTxt, {color: colors.text}]}>
                  {t('screens.login.title')}
                </Text>
                <Text style={[styles.loginSubTxt, {color: colors.text}]}>
                  {t('screens.login.subtitle')}
                </Text>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputContainerContent}>
                <Text style={[styles.inputText, {color: colors.text}]}>
                  {t('screens.login.text.input.email_label')}
                </Text>
                <TextInput
                  style={[
                    styles.loginInput,
                    {
                      color: colors.text,
                      backgroundColor: colors.inputBackground,
                    },
                  ]}
                  keyboardType="email-address"
                  value={credentials.email}
                  autoComplete="off"
                  onChangeText={text => handleInputChange(text, 'email')}
                  placeholder={t('screens.login.text.input.email_placeholder')}
                  maxLength={30}
                  placeholderTextColor={colors.inputPlaceholder}
                />
              </View>
              <View style={styles.inputContainerContent}>
                <Text style={[styles.inputText, {color: colors.text}]}>
                  {t('screens.login.text.input.password_label')}
                </Text>
                <View
                  style={[
                    styles.passwordWrapper,
                    {
                      backgroundColor: colors.inputBackground,
                    },
                  ]}>
                  <TextInput
                    keyboardType="default"
                    secureTextEntry={isPasswordSecure}
                    value={credentials.password}
                    autoComplete="off"
                    onChangeText={text => handleInputChange(text, 'password')}
                    style={[styles.passwordInput, {color: colors.text}]}
                    placeholder={t(
                      'screens.login.text.input.password_placeholder',
                    )}
                    maxLength={30}
                    placeholderTextColor={colors.inputPlaceholder}
                  />
                  <TouchableOpacity
                    onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                    <Image
                      source={isPasswordSecure ? ICONS.EYE_OFF : ICONS.EYE_ON}
                      style={[styles.eyeIcon, {tintColor: colors.border}]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.btnContainer}>
              <Button
                bgColor={colors.btnBackground}
                text={t('screens.login.text.btn.login')}
                textSize={FONT_SIZE_16}
                textColor={colors.btnText}
                width={horizontalScale(320)}
                height={verticalScale(60)}
                onPress={handleLogin}
                variant="elevated"
                borderRadius={moderateScale(30)}
              />
            </View>

            <View style={styles.footer}>
              <Text style={[styles.linkTxt, {color: colors.text}]}>
                {t('screens.login.text.dont_have_account')}
              </Text>
              <Button
                text={t('screens.login.text.btn.create_one')}
                bgColor={colors.border}
                onPress={() => navigation.navigate('Signup')}
                rippleColor={'transparent'}
                variant="text"
              />
            </View>
          </View>
        </ScrollView>
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
        type={'error'}
      />
    </>
  );
};

export default LoginScreen;
