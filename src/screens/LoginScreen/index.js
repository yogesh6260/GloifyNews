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
import {SCALE_10} from '../../styles/spacing';
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
        setMessage('Invalid credentials!');

        setCredentials({...''});
      }
    } else {
      setLoader(false);
      setIsVisible(true);
      setMessage('Please enter both email and password!');
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        style={[styles.container, {backgroundColor: colors.background}]}>
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
                  JioNews
                </Text>
                <Text style={[styles.loginSubTxt, {color: colors.text}]}>
                  Get Started
                </Text>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputContainerContent}>
                <Text style={[styles.inputText, {color: colors.text}]}>
                  Enter Email Address
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
                  placeholder="Email Address"
                  maxLength={30}
                  placeholderTextColor={colors.inputPlaceholder}
                />
              </View>
              <View style={styles.inputContainerContent}>
                <Text style={[styles.inputText, {color: colors.text}]}>
                  Enter Password
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
                    placeholder="Password"
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
            <View style={{marginTop: '2%'}}>{loader ? <Loader /> : null}</View>
            <View style={styles.btnContainer}>
              <Button
                bgColor={colors.btnBackground}
                text={'Login'}
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
                Don't have an account?{' '}
              </Text>
              <Button
                text={'Create One'}
                bgColor={colors.border}
                onPress={() => navigation.navigate('Signup')}
                rippleColor={'transparent'}
                variant="text"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
