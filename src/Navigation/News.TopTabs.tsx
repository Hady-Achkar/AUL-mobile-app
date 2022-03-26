import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SCREENS } from '../Constants';
import { EventsScreen, NewsScreen } from '../Screens';
const Tabs = createMaterialTopTabNavigator();
export const NewsEventsTabs = () => (
  <Tabs.Navigator initialRouteName={SCREENS.NEWS_STACK.name}>
    <Tabs.Screen {...SCREENS.NEWS_STACK} component={NewsScreen} />
    <Tabs.Screen {...SCREENS.EVENTS_STACK} component={EventsScreen} />
  </Tabs.Navigator>
);
