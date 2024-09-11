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
import {IMAGES} from '../../constants/Images';
import {ICONS} from '../../constants/Icons';
import Button from '../../components/Common/Button';
import {SCALE_10} from '../../styles/spacing';
import {saveUserToFirestore} from '../../utils/helpers';
import {
  validateContact,
  validateEmail,
  validatePassword,
} from '../../utils/validator';
import Tooltip from '../../components/Common/Tooltip';
import Snackbar from '../../components/Common/Snackbar';

const SignupScreen = ({navigation}) => {
  const {colors, dark} = useTheme();
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
  const [tooltip, setTooltip] = useState({
    name: false,
    email: false,
    password: false,
    contact: false,
  });
  const [check, setCheck] = useState({
    name: false,
    email: false,
    password: false,
    contact: false,
  });
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCheck({...false});
  }, []);

  const handleInputChange = (text, name) => {
    setUser({...user, [name]: text});
    validateInput(text, name);
  };

  const validateInput = (text, name) => {
    switch (name) {
      case 'name':
        if (text === '') {
          setError({...error, name: 'Please enter your name'});
          setCheck({...check, name: false});
        } else {
          setError({...error, name: ''});
          setTooltip({...tooltip, name: false});
          setCheck({...check, name: true});
        }
        break;
      case 'email':
        if (!validateEmail(text)) {
          setError({...error, email: 'Invalid email address'});
          setCheck({...check, email: false});
        } else {
          setError({...error, email: ''});
          setTooltip({...tooltip, email: false});
          setCheck({...check, email: true});
        }
        break;
      case 'password':
        if (!validatePassword(text)) {
          setError({
            ...error,
            password: 'Password must be at least 8 characters',
          });
          setCheck({...check, password: false});
        } else {
          setError({...error, password: ''});
          setTooltip({...tooltip, password: false});
          setCheck({...check, password: true});
        }
        break;
      case 'contact':
        if (!validateContact(text)) {
          setError({...error, contact: 'Invalid contact number'});
          setCheck({...check, contact: false});
        } else {
          setError({...error, contact: ''});
          setTooltip({...tooltip, contact: false});
          setCheck({...check, contact: true});
        }
        break;
      default:
        break;
    }
  };

  const handleSignup = () => {
    const {name, email, password, contact} = user;
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      validateContact(contact) &&
      name !== ''
    ) {
      saveUserToFirestore(user);
      navigation.navigate('Login');
    } else {
      setIsVisible(true);
      setMessage('Please fill all the fields correctly!');
    }
  };

  return (
    <>
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
            <Tooltip
              isVisible={tooltip.name}
              content={error.name}
              placementTop={-30}
              pinPlacementTop={0}
              pinXPosition={-10}
            />
            <View
              style={[
                styles.loginInput,
                styles.passwordWrapper,
                {
                  borderColor: colors.border,
                },
              ]}>
              <TextInput
                style={styles.passwordInput}
                keyboardType="default"
                value={user.name}
                autoComplete="off"
                onChangeText={text => handleInputChange(text, 'name')}
                placeholder="Full Name"
              />
              {error.name ? (
                <TouchableOpacity
                  onPress={() => setTooltip({...tooltip, name: !tooltip.name})}>
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
            <Tooltip
              isVisible={tooltip.email}
              content={error.email}
              placementTop={50}
              pinPlacementTop={70}
              pinXPosition={-10}
            />
            <View
              style={[
                styles.loginInput,
                styles.passwordWrapper,
                {
                  borderColor: colors.border,
                },
              ]}>
              <TextInput
                style={styles.passwordInput}
                keyboardType="email-address"
                value={user.email}
                autoComplete="off"
                onChangeText={text => handleInputChange(text, 'email')}
                placeholder="Email"
              />
              {error.email ? (
                <TouchableOpacity
                  onPress={() =>
                    setTooltip({...tooltip, email: !tooltip.email})
                  }>
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
            <Tooltip
              isVisible={tooltip.password}
              content={error.password}
              placementTop={120}
              pinPlacementTop={140}
              pinXPosition={-25}
            />
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
                style={styles.passwordInput}
                placeholder="Password"
              />
              {error.password ? (
                <TouchableOpacity
                  onPress={() =>
                    setTooltip({...tooltip, password: !tooltip.password})
                  }>
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
              <TouchableOpacity
                onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                <Image
                  source={isPasswordSecure ? ICONS.EYE_OFF : ICONS.EYE_ON}
                  style={[styles.eyeIcon, {tintColor: colors.border}]}
                />
              </TouchableOpacity>
            </View>
            <Tooltip
              isVisible={tooltip.contact}
              content={error.contact}
              placementTop={190}
              pinPlacementTop={210}
              pinXPosition={-10}
            />
            <View
              style={[
                styles.loginInput,
                styles.passwordWrapper,
                {
                  borderColor: colors.border,
                },
              ]}>
              <TextInput
                style={styles.passwordInput}
                keyboardType="number-pad"
                value={user.contact}
                autoComplete="off"
                onChangeText={text => handleInputChange(text, 'contact')}
                placeholder="Contact"
                maxLength={10}
              />
              {error.contact ? (
                <TouchableOpacity
                  onPress={() =>
                    setTooltip({...tooltip, contact: !tooltip.contact})
                  }>
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
            <View style={{marginVertical: SCALE_10}} />
            <Button
              bgColor={colors.btnBackground}
              text={'Sign up'}
              textColor={colors.btnText}
              width={300}
              onPress={handleSignup}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Snackbar
        backgroundColor={colors.snackBar}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        message={message}
        actionText={'Dismiss'}
        onActionPress={() => setIsVisible(false)}
        position="bottom"
        textColor={colors.text}
        actionTextColor={colors.text}
      />
    </>
  );
};

export default SignupScreen;
