import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { SCREENS } from "../Constants"
import { NotificationsScreen } from "../Screens"
const Stack = createStackNavigator()
export const NotificationsStack = () => (
  <Stack.Navigator initialRouteName={SCREENS.NOTIFICATIONS_SCREEN.name}>
    <Stack.Screen
      {...SCREENS.NOTIFICATIONS_SCREEN}
      component={NotificationsScreen}
    />
  </Stack.Navigator>
)
