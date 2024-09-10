import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import {CustomDarkTheme, CustomDefaultTheme} from '../constants/Themes';
import DrawerNavigator from './DrawerNavigator';
import CategoryScreen from '../screens/News/CategoryScreen';
import {useSelector} from 'react-redux';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  const theme = useSelector(state => state.user.preference.theme);

  return (
    <ThemeProvider theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationContainer
        theme={theme === 'dark' ? CustomDarkTheme : CustomDefaultTheme}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="Dashboard" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigator;
