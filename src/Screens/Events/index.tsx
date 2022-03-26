import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { HorizontalCard } from '../../Components';
import HeaderOverlay from '../../Components/Common/HeaderOverlay';
import EventCard from '../../Components/EventCard/Index';
import { AppState } from '../../reducers';

const Index = () => {
  const Events = useSelector((state: AppState) => state.events.events);

  const renderItem = (item: any) => {
    return <HorizontalCard item={item.item} />;
  };
  return (
    <View style={styles.container}>
      <HeaderOverlay
        uri="https://aul.edu.lb/ContentFiles/27HeaderImage.jpg"
        text="Latest Events!"
      />
      <FlatList
        keyExtractor={() => Math.random().toString()}
        data={Events}
        renderItem={renderItem}
        contentContainerStyle={{ marginVertical: 15 }}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    margin: 5,
  },
});
