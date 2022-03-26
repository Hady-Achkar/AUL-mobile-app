import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { SCREENS } from "../Constants"
import { SuggestionsScreen } from "../Screens"
const Stack = createStackNavigator()
export const SuggestionsStack = () => (
  <Stack.Navigator initialRouteName={SCREENS.SUGGESTIONS_SCREEN.name}>
    <Stack.Screen
      {...SCREENS.SUGGESTIONS_SCREEN}
      component={SuggestionsScreen}
    />
  </Stack.Navigator>
)
