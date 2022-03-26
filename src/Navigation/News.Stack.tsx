import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../Constants';
import {NewsScreen, NotificationsScreen} from '../Screens';

const Stack = createStackNavigator();
export const NewsStack = () => (
    <Stack.Navigator initialRouteName={SCREENS.NEWS_SCREEN.name}>
        <Stack.Screen {...SCREENS.NEWS_SCREEN} component={NewsScreen}/>
        <Stack.Screen {...SCREENS.NOTIFICATIONS_SCREEN} component={NotificationsScreen}/>
    </Stack.Navigator>
);
