import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {StyleSheet, Text} from "react-native";
import {IEvent} from "../../Types/Models/Event";
import moment from 'moment'
import {Theme} from '../../Constants';

interface IProps {
    event: IEvent
}

const EventCard: React.FC<IProps> = ({event}) => {
    return (
        <Card style={styles.container}>
            <Card.Content>
                <Title style={styles.title}>{event.title}</Title>
                <Paragraph>{event.description}</Paragraph>
            </Card.Content>
            <Card.Actions style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.date}>{moment(event.createdAt).fromNow()}</Text>
            </Card.Actions>
        </Card>
    )
};
const styles = StyleSheet.create({
    container: {
        height: 200,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    title: {
        color: Theme.colors.primary
    },
    date: {
        color: Theme.colors.muted
    }
})
export default EventCard;
