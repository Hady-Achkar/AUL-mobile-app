import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List } from 'react-native-paper';
import { INotification } from '../../Types/Models/Notification';
import moment from 'moment';
interface IProps {
  notification: INotification;
}
const NotificationItem: React.FC<IProps> = ({ notification }) => {
  return (
    <List.Item
      title={notification.title}
      description={moment(notification.createdAt).fromNow()}
    />
  );
};

export default NotificationItem;

const styles = StyleSheet.create({});
