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
import React, {useState} from 'react';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import styles from './styles';
import Button from '../../components/Common/Button';
import {IMAGES} from '../../constants/Images';
import {SCALE_10} from '../../styles/spacing';
import {ICONS} from '../../constants/Icons';
import {loginUser} from '../../utils/helpers';
import Loader from '../../components/Common/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {saveUserData, setLogin} from '../../redux/actions/user/userActions';
import Snackbar from '../../components/Common/Snackbar';

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

  // const user = useSelector(state => state.user);
  // const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
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

        // if (isLoggedIn) {
        setLoader(false);
        navigation.navigate('Category', {navigateFromScreen: 'login'});
        // }
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
        <Snackbar
          backgroundColor={colors.snackBar}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          message={message}
          actionText={'Dismiss'}
          onActionPress={() => setIsVisible(false)}
          position="bottom"
          textColor={colors.snackBarTxt}
          actionTextColor={colors.text}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.loginForm}>
          <View style={styles.formHeader}>
            <View style={styles.logoContainer}>
              <Image source={IMAGES.LOGO} style={styles.logo} />
            </View>
            <Text style={[styles.loginTxt, {color: colors.text}]}>
              One Time Login
            </Text>
            <Text style={[styles.loginSubTxt, {color: colors.text}]}>
              Sign in with your credentials!
            </Text>
          </View>
          <TextInput
            style={[styles.loginInput, {borderColor: colors.border}]}
            keyboardType="email-address"
            value={credentials.email}
            autoComplete="off"
            onChangeText={text => handleInputChange(text, 'email')}
            placeholder="Email"
            maxLength={30}
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
              value={credentials.password}
              autoComplete="off"
              onChangeText={text => handleInputChange(text, 'password')}
              style={styles.passwordInput}
              placeholder="Password"
              maxLength={30}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
              <Image
                source={isPasswordSecure ? ICONS.EYE_OFF : ICONS.EYE_ON}
                style={[styles.eyeIcon, {tintColor: colors.border}]}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: SCALE_10}} />
          {loader ? <Loader /> : null}
          <Button
            bgColor={colors.btnBackground}
            text={'Login'}
            textColor={colors.btnText}
            width={300}
            onPress={handleLogin}
          />

          <Text style={[styles.linkTxt, {color: colors.text}]}>
            Don't have an account?{' '}
            <Text
              style={{color: colors.border}}
              onPress={() => navigation.navigate('Signup')}>
              Create One
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;
