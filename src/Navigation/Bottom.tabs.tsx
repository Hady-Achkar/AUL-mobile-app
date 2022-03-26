//@ts-nocheck
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { SCREENS, Theme } from "../Constants"
import { HomeStack } from "./Home.Stack"
import { AcademicsStack } from "./Academics.Stack"
import { NewsEventsTabs } from "./News.TopTabs"
import { SuggestionsStack } from "./Suggestions.Stack"
import AntDesign from "react-native-vector-icons/AntDesign"
import { FontAwesome } from "@expo/vector-icons"
import { Ionicons, Entypo } from "@expo/vector-icons"
const Tabs = createBottomTabNavigator()

export const BottomTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName={SCREENS.HOME_SCREEN.name}
      tabBarOptions={{
        activeTintColor: Theme.colors.primary,
        labelPosition: "below-icon",
      }}
    >
      <Tabs.Screen
        {...SCREENS.HOME_STACK}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Entypo name='home' color={Theme.colors.primary} size={24} />
          ),
        }}
        component={HomeStack}
      />
      <Tabs.Screen
        {...SCREENS.MAJORS_STACK}
        options={{
          tabBarLabel: "Academics",
          tabBarIcon: () => (
            <Ionicons name='school' size={24} color={Theme.colors.primary} />
          ),
        }}
        component={AcademicsStack}
      />
      <Tabs.Screen
        {...SCREENS.NEWS_EVENTS_TAB}
        options={{
          tabBarLabel: "News",
          tabBarIcon: () => (
            <Entypo name='news' color={Theme.colors.primary} size={25} />
          ),
        }}
        component={NewsEventsTabs}
      />
      <Tabs.Screen
        {...SCREENS.SUGGESTIONS_STACK}
        options={{
          tabBarLabel: "Suggestion",
          tabBarIcon: () => (
            <FontAwesome name='group' size={24} color={Theme.colors.primary} />
          ),
        }}
        component={SuggestionsStack}
      />
    </Tabs.Navigator>
  )
}
