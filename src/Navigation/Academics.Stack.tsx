import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '../Constants';
import {
  CourseScreen,
  MajorScreen,
  AcademicsScreen,
  NotificationsScreen,
  CampusScreen,
  EventsScreen,
} from '../Screens';
const Stack = createStackNavigator();
export const AcademicsStack = () => (
  <Stack.Navigator
    initialRouteName={SCREENS.ACADEMICS_STACK.name}
    mode={'modal'}
  >
    <Stack.Screen {...SCREENS.ACADEMICS_STACK} component={AcademicsScreen} />
    <Stack.Screen {...SCREENS.MAJOR_SCREEN} component={MajorScreen} />
    <Stack.Screen {...SCREENS.CAMPUS_SCREEN} component={CampusScreen} />
    <Stack.Screen {...SCREENS.COURSE_SCREEN} component={CourseScreen} />
    <Stack.Screen {...SCREENS.EVENTS_SCREEN} component={EventsScreen} />
    <Stack.Screen
      {...SCREENS.NOTIFICATIONS_SCREEN}
      component={NotificationsScreen}
    />
  </Stack.Navigator>
);
