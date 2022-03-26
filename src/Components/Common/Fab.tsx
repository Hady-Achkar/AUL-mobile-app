import React from "react"
import { FAB, Portal, Provider } from "react-native-paper"
import { SCREENS, Theme } from "../../Constants"
import { StyleSheet } from "react-native"
interface IProps {
  navigation: any
}
const FabMenu: React.FC<IProps> = ({ navigation }) => {
  const [state, setState] = React.useState({ open: false })

  const onStateChange = ({ open }) => setState({ open })
  const { open } = state

  return (
    <Portal>
      <FAB.Group
        open={open}
        visible={true}
        style={styles.fab}
        icon={open ? "minus" : "menu"}
        actions={[
          {
            icon: "account",
            label: "Apply Now!",
            onPress: () => navigation.navigate(SCREENS.APPLY_NOW.name),
          },
          {
            icon: "bell",
            label: "Notifications!",
            onPress: () =>
              navigation.navigate(SCREENS.NOTIFICATIONS_STACK.name),
          },
          {
            icon: "whatsapp",
            label: "Email",
            onPress: () => console.log("Pressed email"),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </Portal>
  )
}
const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 100,
  },
})
export default FabMenu
