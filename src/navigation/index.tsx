import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {BottomTabRouter} from './BottomTab';
import {RouteName, RouteParam} from './type';

const Navigation = () => {
  const Stack = createNativeStackNavigator<RouteParam>();

  return (
    <>
      <SafeAreaView />
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#F00'}
        translucent={false}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={RouteName.HOME}>
        <Stack.Screen name={RouteName.BOTTOM_TAB} component={BottomTabRouter} />
      </Stack.Navigator>
    </>
  );
};

export default Navigation;
