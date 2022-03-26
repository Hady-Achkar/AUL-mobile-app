import React from "react"
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native"
import { SCREEN_WIDTH } from "../../Constants/Metrics"

const AboutSection = () => {
  return (
    <ImageBackground
      source={{ uri: "https://aul.edu.lb/ContentFiles/1026Image.jpeg" }}
      style={styles.container}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.description}>
          <Text style={styles.title}>Welcome to AUL</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,100,184,0.55) ",
    width: SCREEN_WIDTH,
    height: 200,
  },
  imageBackground: {
    alignItems: "center",
    paddingBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 60,
    color: "#fff",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 10,
    color: "#fff",
  },
})
export default AboutSection
