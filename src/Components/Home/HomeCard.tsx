import React from "react"
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper"
import { StyleSheet, Text } from "react-native"
import { IEvent } from "../../Types/Models/Event"
import moment from "moment"
import { Theme } from "../../Constants"

interface IProps {
  title: string
  body: string
}

const HomeCard: React.FC<IProps> = ({ title, body }) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title style={styles.title}>{title}</Title>
        <Paragraph>{body}</Paragraph>
      </Card.Content>
    </Card>
  )
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: Theme.colors.primary,
  },
  date: {
    color: Theme.colors.muted,
  },
})
export default HomeCard
