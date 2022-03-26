import { useNavigation } from "@react-navigation/native"
import React, { useCallback } from "react"
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { SCREENS } from "../../Constants"
import { SCREEN_WIDTH } from "../../Constants/Metrics"
import { IEvent } from "../../Types/Models/Event"
interface IProps {
  event: IEvent
}
const EventImageCard: React.FC<IProps> = ({ event }) => {
  const navigation = useNavigation()
  const handleNavigate = useCallback(() => {
    navigation.navigate(SCREENS.EVENTS_SCREEN.name, { event })
  }, [])
  return (
    <ImageBackground
      source={{ uri: event.images[0] }}
      style={styles.container}
      imageStyle={{ borderRadius: 20 }}
    >
      <View style={styles.viewContainer}>
        <TouchableOpacity onPress={handleNavigate}>
          <Text style={styles.title}>{event.title}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default EventImageCard

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH / 3,
    margin: 20,
    padding: 20,
    borderRadius: 20,
    height: 150,
  },
  viewContainer: {
    backgroundColor: "rgba(10,10,10,0.7) ",
    width: SCREEN_WIDTH / 2,
    margin: 20,
    padding: 20,
    borderRadius: 20,
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
})
