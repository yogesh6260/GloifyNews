import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CouponSplash from '../screens/Coupon/CouponSplash';
import CouponWebView from '../screens/Coupon/CouponWebView';
import CouponScan from '../screens/Coupon/CouponScan';
import Coupon from '../screens/Coupon';

const CouponStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Coupon"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Coupon" component={Coupon} />
      <Stack.Screen name="CouponSplash" component={CouponSplash} />
      <Stack.Screen name="CouponWebView" component={CouponWebView} />
      <Stack.Screen name="CouponScan" component={CouponScan} />
    </Stack.Navigator>
  );
};

export default CouponStack;
