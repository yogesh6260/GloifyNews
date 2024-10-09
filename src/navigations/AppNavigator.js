import React, {useEffect, useState} from 'react';
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

import DownloadScreen from '../screens/DownloadScreen';
import PollScreen from '../screens/PollScreen';
import LanguageScreen from '../screens/LanguageScreen';
import ManageLiveTicker from '../screens/ManageLiveTicker';
import StoragePreference from '../screens/StoragePreference';
import TOS from '../screens/About/TOS';
import ContactUs from '../screens/About/ContactUs';
import Feedback from '../screens/About/Feedback';

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  const Stack = createNativeStackNavigator();

  const user = useSelector(state => state.user);
  const theme = useSelector(state => state.user.preference.theme);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationContainer
        theme={theme === 'dark' ? CustomDarkTheme : CustomDefaultTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            presentation: 'formSheet',
            animation: 'slide_from_right',
          }}>
          {isLoggedIn ? (
            <>
              {user.preference.newsTopics.length === 0 ||
              user.isCategoryChange ? (
                <Stack.Screen
                  name="Category"
                  component={CategoryScreen}
                  initialParams={{navigateFrom: user.screenBeforeCategory}}
                />
              ) : (
                <>
                  <Stack.Screen name="NewsTab" component={NewsTabs} />
                  <Stack.Screen name="AudioTab" component={AudioScreen} />
                  <Stack.Screen name="SearchTab" component={SearchScreen} />
                  <Stack.Screen name="NewsRead" component={NewsScreen} />
                  <Stack.Screen name="Drawer" component={CustomDrawer} />
                  <Stack.Screen name="Downloads" component={DownloadScreen} />
                  <Stack.Screen name="Polls" component={PollScreen} />
                  <Stack.Screen name="Language" component={LanguageScreen} />
                  <Stack.Screen
                    name="ManageLiveTicker"
                    component={ManageLiveTicker}
                  />
                  <Stack.Screen
                    name="StoragePreference"
                    component={StoragePreference}
                  />
                  <Stack.Screen name="TOS" component={TOS} />
                  <Stack.Screen name="ContactUs" component={ContactUs} />
                  <Stack.Screen name="Feedback" component={Feedback} />
                </>
              )}
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigator;
