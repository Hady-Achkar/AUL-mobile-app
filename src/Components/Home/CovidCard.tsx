import React from "react"
import { ViewStyle } from "react-native"
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native"
import { Theme } from "../../Constants"
import { SCREEN_WIDTH } from "../../Constants/Metrics"

interface IProps {
  uri: string
  text: string
}
const CovidCard: React.FC<IProps> = ({ uri, text }) => {
  return (
    <ImageBackground source={{ uri: uri }} style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.description}>
          <Text style={[styles.title]}>{text}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH,
    height: 150,
    marginBottom: 12,
  },
  imageBackground: {
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    color: Theme.colors.backdrop,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 10,
    color: "#fff",
  },
})
export default CovidCard
