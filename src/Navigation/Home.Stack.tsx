import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '../Constants';
import { ApplyScreen, HomeScreen, NotificationsScreen } from '../Screens';
import { NotificationsStack } from './Notifications.Stack';
const Stack = createStackNavigator();
export const HomeStack = () => (
  <Stack.Navigator initialRouteName={SCREENS.HOME_SCREEN.name} mode="modal">
    <Stack.Screen {...SCREENS.HOME_SCREEN} component={HomeScreen} />
    <Stack.Screen
      {...SCREENS.NOTIFICATIONS_STACK}
      component={NotificationsStack}
    />
    <Stack.Screen {...SCREENS.APPLY_NOW} component={ApplyScreen} />
  </Stack.Navigator>
);
