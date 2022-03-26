import React, { useCallback } from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import EventCard from '../EventCard/Index';
import LoadingContainer from '../Loading/Loading.Container';
import AboutSection from '../../Screens/Home/About.Section';

const EventsSection = () => {
  const Events = useSelector((state: AppState) => state.events.events);
  const keyExtractor = useCallback((item) => item._id, []);

  if (Events.length === 0) {
    return <LoadingContainer />;
  }
  return (
    <FlatList
      data={Events}
      renderItem={(item) => <EventCard event={item.item} />}
      keyExtractor={keyExtractor}
      ListHeaderComponent={<AboutSection />}
      ListEmptyComponent={<RefreshControl refreshing={Events.length === 0} />}
    />
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default EventsSection;
