import React, { useCallback } from "react"
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native"
import { ICampus } from "../../Types/Models/Branch"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../Constants/Metrics"
import { SCREENS, Theme } from "../../Constants"
import { useNavigation } from "@react-navigation/native"

interface IProps {
  campus: ICampus
}

const CampusCard: React.FC<IProps> = ({ campus }) => {
  const navigation = useNavigation()
  const image = campus?.image
  const handleNavigation = useCallback(() => {
    navigation.navigate(SCREENS.CAMPUS_SCREEN.name, { campus })
  }, [])
  return (
    <TouchableOpacity style={styles.wrapper} onPress={handleNavigation}>
      {/* <View style={styles.container}> */}
      <ImageBackground
        source={{ uri: image }}
        style={styles.imageContainer}
        imageStyle={styles.imageBackground}
        resizeMode={"cover"}
      >
        <Text style={styles.text}>{campus.location}</Text>
      </ImageBackground>
      {/* </View> */}
    </TouchableOpacity>
  )
}
export default CampusCard
const styles = StyleSheet.create({
  imageBackground: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  container: {
    flex: 1,
    width: SCREEN_WIDTH / 2,
    height: 150,
    padding: 5,
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  wrapper: {
    borderRadius: 50,
    width: SCREEN_WIDTH / 3,
    height: 150,
    padding: 5,
    shadowOffset: {
      width: 0,
      height: -0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
})
