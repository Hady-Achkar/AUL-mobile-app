import moment from 'moment';
import React, { useCallback } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { List } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { Theme } from '../../Constants';
import { AppState } from '../../reducers';
import NotificationItem from './Notification.item';

const NotificationsScreen = () => {
  const Notifications = useSelector(
    (state: AppState) => state.notifications.notifications
  );
  const keyExtractor = useCallback((item) => item._id, []);
  const renderItem = useCallback((item) => {
    const { title, createdAt } = item.item;
    return (
      <List.Item
        title={title}
        titleNumberOfLines={2}
        titleStyle={{
          fontSize: 12,
          color: Theme.colors.primary,
          fontWeight: 'bold',
        }}
        description={moment(createdAt).fromNow()}
      />
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={Notifications}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default NotificationsScreen;
