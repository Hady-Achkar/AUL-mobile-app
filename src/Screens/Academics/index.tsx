import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from '../../Components';
import { AppState } from '../../reducers';
import MajorsSection from '../../Components/Sections/Majors.Section';
import HeaderOverlay from '../../Components/Common/HeaderOverlay';
import CampusSection from '../Home/Campus.Section';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
const Index = () => {
  const Events = useSelector((state: AppState) => state.events.events);
  return (
    <View style={styles.container}>
      <HeaderOverlay
        uri="https://source.unsplash.com/random"
        text="Academics"
      />

      <View style={styles.section}>
        <CampusSection />
      </View>
      <View style={styles.section}>
        <MajorsSection />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    margin: 5,
  },
});
