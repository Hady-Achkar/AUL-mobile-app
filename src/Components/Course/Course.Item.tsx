import React, { useCallback } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { List } from "react-native-paper"
import { ICourse } from "../../Types/Models/Course"
import { useNavigation } from "@react-navigation/native"
import { SCREENS, Theme } from "../../Constants"

interface IProps {
  course: ICourse
}

const CourseItem: React.FC<IProps> = ({ course }) => {
  const navigation = useNavigation()
  const handleNavigate = useCallback(() => {
    navigation.navigate(SCREENS.COURSE_SCREEN.name, { course })
  }, [navigation])
  return (
    <TouchableOpacity onPress={handleNavigate}>
      <List.Item
        style={styles.item}
        titleStyle={styles.text}
        title={`${course.code} ${course.title}`}
        right={() => {
          return (
            <View>
              <Text>{course.credits} Credits</Text>
            </View>
          )
        }}
      />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    color: Theme.colors.primary,
  },
})
export default CourseItem
