import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { IEvent } from '../../Types/Models/Event';
import moment from 'moment';
import { Theme } from '../../Constants';
import { INews } from '../../Types/Models/News';
import { SCREEN_WIDTH } from '../../Constants/Metrics';

interface IProps {
  item: INews | IEvent;
}

const HorizontalCard: React.FC<IProps> = ({ item }) => {
  return (
    <Card style={styles.container}>
      <Card.Content style={styles.content}>
        <View style={{ marginBottom: 10 }}>
          <Title style={styles.title}>{item.title}</Title>
          <Paragraph style={[styles.title, { color: 'grey' }]}>
            {item.description}
          </Paragraph>
        </View>
        <View>
          <Text style={styles.date}>
            Posted: {moment(item.createdAt).fromNow()}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: SCREEN_WIDTH,
  },
  title: {
    color: Theme.colors.primary,
    textAlign: 'justify',
  },
  date: {
    color: Theme.colors.muted,
  },
  content: {},
});
export default HorizontalCard;
