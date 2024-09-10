import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SummaryScreen from '../screens/News/SummaryScreen';
import HeadlineScreen from '../screens/News/HeadlineScreen';
import Header from '../components/Common/Header';

const Tab = createMaterialTopTabNavigator();

const renderCustomHeader = props => {
  return <Header {...props} />;
};

const NewsTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Summary"
      tabBar={props => renderCustomHeader(props)}
      screenOptions={{swipeEnabled: false}}>
      <Tab.Screen name="Summary" component={SummaryScreen} />
      <Tab.Screen name="Headline" component={HeadlineScreen} />
    </Tab.Navigator>
  );
};

export default NewsTabs;
