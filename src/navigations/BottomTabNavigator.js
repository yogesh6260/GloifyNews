import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsTabs from './NewsTabs';
import MagTabs from './MagTabs';
import TvTabs from './TvTabs';
import {BottomTab} from '../components/Common';
import Coupon from '../screens/Coupon';

const renderCustomTab = props => {
  return <BottomTab {...props} />;
};

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="NewsTab"
      tabBar={props => renderCustomTab(props)}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="News" component={NewsTabs} />
      <Tab.Screen name="Mags & Papers" component={MagTabs} />
      <Tab.Screen name="TV & Videos" component={TvTabs} />
      <Tab.Screen name="Coupons" component={Coupon} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
