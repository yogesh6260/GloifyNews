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
import {SCALE_10} from '../../styles/spacing';
import {saveUserToFirestore} from '../../utils/helpers';
import {
  validateContact,
  validateEmail,
  validatePassword,
} from '../../utils/validator';
import {horizontalScale, verticalScale} from '../../styles/metrics';

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
          setError({...error, name: 'Please enter your name!'});
          setMessageType('error');
          setMessage('Please enter your name!');
          setIsVisible(true);
          setCheck({...check, name: false});
        } else {
          setError({...error, name: ''});

          setCheck({...check, name: true});
        }
        break;
      case 'email':
        if (!validateEmail(text)) {
          setError({...error, email: 'Invalid email address'});
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
            password:
              'Password should match format azAZ19@$# and atleast 8 characters',
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
          setError({...error, contact: 'Invalid contact number'});
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
      setMessage('Please fill all the fields correctly!');
      setError({...''});
      setCheck({...false});
    }
  };

  return (
    <>
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
      <KeyboardAvoidingView
        behavior="padding"
        style={[styles.container, {backgroundColor: colors.background}]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollWrapper}>
          <Image source={IMAGES.LOGO} style={styles.logo} />
          <Text style={[styles.loginTxt, {color: colors.text}]}>
            Sign up for Daily News
          </Text>
          <Text style={[styles.loginSubTxt, {color: colors.text}]}>
            {'Signup to create your account!'}
          </Text>
          <View style={styles.signupForm}>
            <View
              style={[
                styles.loginInput,
                styles.passwordWrapper,
                {
                  borderColor: colors.border,
                },
              ]}>
              <TextInput
                style={[styles.passwordInput, {color: colors.text}]}
                keyboardType="default"
                value={user.name}
                autoComplete="off"
                onChangeText={text => handleInputChange(text, 'name')}
                placeholder="Full Name"
                maxLength={30}
                placeholderTextColor={'lightgray'}
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

            <View
              style={[
                styles.loginInput,
                styles.passwordWrapper,
                {
                  borderColor: colors.border,
                },
              ]}>
              <TextInput
                style={[styles.passwordInput, {color: colors.text}]}
                keyboardType="email-address"
                value={user.email}
                autoComplete="off"
                onChangeText={text => handleInputChange(text, 'email')}
                placeholder="Email"
                maxLength={30}
                placeholderTextColor={'lightgray'}
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

            <View
              style={[
                styles.loginInput,
                styles.passwordWrapper,
                {
                  borderColor: colors.border,
                },
              ]}>
              <TextInput
                keyboardType="default"
                secureTextEntry={isPasswordSecure}
                value={user.password}
                autoComplete="off"
                onChangeText={text => handleInputChange(text, 'password')}
                style={[styles.passwordInput, {color: colors.text}]}
                placeholder="Password"
                maxLength={30}
                placeholderTextColor={'lightgray'}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                <Image
                  source={isPasswordSecure ? ICONS.EYE_OFF : ICONS.EYE_ON}
                  style={[styles.eyeIcon, {tintColor: colors.border}]}
                />
              </TouchableOpacity>
              {error.password ? (
                <TouchableOpacity>
                  <Image
                    source={ICONS.ERROR}
                    style={[styles.eyeIcon, {tintColor: colors.border}]}
                  />
                </TouchableOpacity>
              ) : check.password ? (
                <TouchableOpacity>
                  <Image
                    source={ICONS.CORRECT}
                    style={[styles.eyeIcon, {tintColor: colors.border}]}
                  />
                </TouchableOpacity>
              ) : null}
            </View>

            <View
              style={[
                styles.loginInput,
                styles.passwordWrapper,
                {
                  borderColor: colors.border,
                },
              ]}>
              <TextInput
                style={[styles.passwordInput, {color: colors.text}]}
                keyboardType="number-pad"
                value={user.contact}
                autoComplete="off"
                onChangeText={text => handleInputChange(text, 'contact')}
                placeholder="Contact"
                maxLength={10}
                placeholderTextColor={'lightgray'}
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
            {loader ? <Loader /> : <View style={{marginVertical: SCALE_10}} />}

            <Button
              bgColor={colors.btnBackground}
              text={'Sign up'}
              textColor={colors.btnText}
              width={horizontalScale(320)}
              height={verticalScale(50)}
              onPress={handleSignup}
            />
          </View>
          <View style={styles.footer}>
            <Text style={[styles.loginText, {color: colors.text}]}>
              Already have an account?
            </Text>
            <Button
              text={'Login'}
              textColor={colors.border}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignupScreen;
