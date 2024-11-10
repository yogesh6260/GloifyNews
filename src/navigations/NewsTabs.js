import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SummaryScreen, HeadlineScreen} from '../screens/News';
import {Header} from '../components/Common';
import {useTranslation} from 'react-i18next';

const renderCustomHeader = props => {
  return <Header {...props} />;
};

const NewsTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName={t('components.tab.title.summary')}
      tabBar={props => renderCustomHeader(props)}
      screenOptions={{
        swipeEnabled: false,
        // lazy: true,
        animationEnabled: true,
        // lazyPlaceholder: <Loader />,
      }}>
      <Tab.Screen
        name={t('components.tab.title.summary')}
        component={SummaryScreen}
      />
      <Tab.Screen
        name={t('components.tab.title.headlines')}
        component={HeadlineScreen}
      />
    </Tab.Navigator>
  );
};

export default NewsTabs;
