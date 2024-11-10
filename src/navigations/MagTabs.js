import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MagazineScreen, NewspaperScreen} from '../screens/Mags/Tabs';
import {Header} from '../components/Common';
import {useTranslation} from 'react-i18next';

const renderCustomHeader = props => {
  return <Header {...props} />;
};

const MagTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName={'Magazines'}
      tabBar={props => renderCustomHeader(props)}
      screenOptions={{
        swipeEnabled: false,
        // lazy: true,
        animationEnabled: true,
        // lazyPlaceholder: <Loader />,
      }}>
      <Tab.Screen name={'Magazines'} component={MagazineScreen} />
      <Tab.Screen name={'Newspapers'} component={NewspaperScreen} />
    </Tab.Navigator>
  );
};

export default MagTabs;
