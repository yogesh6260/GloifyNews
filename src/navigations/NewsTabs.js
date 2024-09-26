import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SummaryScreen from '../screens/News/SummaryScreen';
import HeadlineScreen from '../screens/News/HeadlineScreen';
import Header from '../components/Common/Header';

const renderCustomHeader = props => {
  return <Header {...props} />;
};

const NewsTabs = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Summary"
      tabBar={props => renderCustomHeader(props)}
      screenOptions={{
        swipeEnabled: false,
        lazy: true,
        animationEnabled: true,
        // lazyPlaceholder: <Loader />,
      }}>
      <Tab.Screen name="Summary" component={SummaryScreen} />
      <Tab.Screen name="Headlines" component={HeadlineScreen} />
    </Tab.Navigator>
  );
};

export default NewsTabs;
