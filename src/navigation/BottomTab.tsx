import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import AccountScreen from 'src/screens/account';
import HomeScreen from 'src/screens/home';
import SettingScreen from 'src/screens/setting';
import {TabName, TabParam} from './type';

const BottomTab = createBottomTabNavigator<TabParam>();

export const BottomTabRouter = () => {
  return (
    <BottomTab.Navigator initialRouteName={TabName.HOME} backBehavior={'none'}>
      <BottomTab.Screen name={TabName.HOME} component={HomeScreen} />
      <BottomTab.Screen name={TabName.SETTING} component={SettingScreen} />
      <BottomTab.Screen name={TabName.ACCOUNT} component={AccountScreen} />
    </BottomTab.Navigator>
  );
};
