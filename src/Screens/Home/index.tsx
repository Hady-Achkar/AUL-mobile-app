import React from "react"
import { View, StyleSheet } from "react-native"
import { FabMenu, Header } from "../../Components"
import AboutSection from "./About.Section"
import CampusSection from "./Campus.Section"
import DiscovermoreSection from "./Discovermore.Section"
import EventCard from "../../Components/EventCard/Index"
import EventsSection from "../../Components/Sections/Events.Section"
import { useNavigation } from "@react-navigation/native"
import { Card } from "react-native-paper"
import { ScrollView } from "react-native-gesture-handler"
import { HomeData } from "../../Data"
import HomeCard from "../../Components/Home/HomeCard"
import CovidCard from "../../Components/Home/CovidCard"
import { Theme } from "../../Constants"

const Index = () => {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <FabMenu navigation={navigation} />
      <AboutSection />
      <HomeCard
        title={HomeData.AUL_MISSION.title}
        body={HomeData.AUL_MISSION.body}
      />
      <CovidCard
        uri='https://images.unsplash.com/photo-1618495293261-3dbcaf9079e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        text={HomeData.COVID_NEWS.text}
      />
      <HomeCard title={HomeData.ALUMNI.title} body={HomeData.ALUMNI.body} />
      <CovidCard
        uri='https://img2.beirut.com/GetImage/jadra/article/58649'
        text=''
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  section: {
    marginVertical: 20,
  },
})
export default Index
