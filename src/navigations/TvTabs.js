import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TVScreen, VideoScreen, ShortVideoScreen} from '../screens/TV/Tabs';
import {Header} from '../components/Common';
import {useTranslation} from 'react-i18next';

const renderCustomHeader = props => {
  return <Header {...props} />;
};

const TvTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName={'TV'}
      tabBar={props => renderCustomHeader(props)}
      screenOptions={{
        swipeEnabled: false,
        // lazy: true,
        animationEnabled: true,
        // lazyPlaceholder: <Loader />,
      }}>
      <Tab.Screen name={'TV'} component={TVScreen} />
      <Tab.Screen name={'Videos'} component={VideoScreen} />
      <Tab.Screen name={'Short Videos'} component={ShortVideoScreen} />
    </Tab.Navigator>
  );
};

export default TvTabs;
