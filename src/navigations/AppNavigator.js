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
import CategoryScreen from '../screens/CategoryScreen';
import {useSelector} from 'react-redux';
import NewsTabs from './NewsTabs';
import AudioScreen from '../screens/AudioScreen';
import SearchScreen from '../screens/SearchScreen';
import NewsScreen from '../screens/NewsScreen';
import CustomDrawer from '../components/Common/CustomDrawer';
import ProfileSettings from '../screens/ProfileSettings';

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  const theme = useSelector(state => state.user.preference.theme);

  return (
    <ThemeProvider theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationContainer
        theme={theme === 'dark' ? CustomDarkTheme : CustomDefaultTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            presentation: 'formSheet',
            animation: 'slide_from_right',
          }}
          initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
          <Stack.Screen name="NewsTab" component={NewsTabs} />
          <Stack.Screen name="AudioTab" component={AudioScreen} />
          <Stack.Screen name="SearchTab" component={SearchScreen} />
          <Stack.Screen name="NewsRead" component={NewsScreen} />
          <Stack.Screen name="Drawer" component={CustomDrawer} />
          <Stack.Screen name="SettingTab" component={ProfileSettings} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigator;
