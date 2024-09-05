import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../components/Common/CustomDrawer';
import NewsTabs from './NewsTabs';
import AudioScreen from '../screens/News/AudioScreen';
import SearchScreen from '../screens/News/SearchScreen';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  
  return (
    <Drawer.Navigator
      initialRouteName="NewsTab"
      screenOptions={{
        drawerStyle: {
          width: '100%',
        },
        drawerPosition: 'right',
        headerShown: false,
        swipeEnabled: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="NewsTab" component={NewsTabs} />
      <Drawer.Screen name="AudioTab" component={AudioScreen} />
      <Drawer.Screen name="SearchTab" component={SearchScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
