import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { FabMenu, HorizontalCard } from '../../Components';
import HeaderOverlay from '../../Components/Common/HeaderOverlay';
import EventCard from '../../Components/EventCard/Index';
import { AppState } from '../../reducers';

const Index = () => {
  const News = useSelector((state: AppState) => state.news.news);

  const renderItem = (item: any) => {
    return <HorizontalCard item={item.item} />;
  };
  return (
    <View style={styles.container}>
      <HeaderOverlay
        uri="https://aul.edu.lb/ContentFiles/27HeaderImage.jpg"
        text="Latest News!"
      />
      <FlatList
        keyExtractor={() => Math.random().toString()}
        data={News}
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
