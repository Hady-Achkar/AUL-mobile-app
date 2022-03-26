import React, { useCallback } from "react"
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { IEvent } from "../../Types/Models/Event"
import moment from "moment"
import { Theme } from "../../Constants"
import { ISuggestion } from "../../Types/Models/Suggestion"
import { AntDesign } from "@expo/vector-icons"
import { AddVote } from "../../Services/Suggestions"
import { SCREEN_WIDTH } from "../../Constants/Metrics"

interface IProps {
  suggestion: ISuggestion
  handleVote: (suggestionId: string) => void
}
const SuggestionCard: React.FC<IProps> = ({ suggestion, handleVote }) => {
  return (
    <Card style={styles.container}>
      <Card.Content
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Title style={styles.title}>{suggestion.course.title}</Title>
          <Paragraph>{suggestion.votes.length} votes</Paragraph>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleVote(suggestion._id)}>
            {suggestion.isVoted ? (
              <AntDesign name='like1' size={24} color={Theme.colors.primary} />
            ) : (
              <AntDesign name='like2' size={24} color={Theme.colors.primary} />
            )}
          </TouchableOpacity>
        </View>
      </Card.Content>
    </Card>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: SCREEN_WIDTH,
  },
  title: {
    color: Theme.colors.primary,
  },
  date: {
    color: Theme.colors.muted,
  },
})
export default SuggestionCard
