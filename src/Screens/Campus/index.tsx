import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import HeaderOverlay from '../../Components/Common/HeaderOverlay';
import EventImageCard from './Event.image.card';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { SCREEN_WIDTH } from '../../Constants/Metrics';
import { List } from 'react-native-paper';
import { Theme } from '../../Constants';
interface IProps {
  route: any;
}
const index: React.FC<IProps> = ({ route }) => {
  const {
    params: { campus },
  } = route;
  const renderItem = useCallback((item) => {
    return <EventImageCard event={item.item} />;
  }, []);
  const keyExtractor = useCallback((item) => item._id, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderOverlay uri={campus.image} text={campus.title} />
      <FlatList
        data={campus.events}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View>
        <List.Item
          title="Location"
          description={campus.location}
          left={(props) => (
            <List.Icon {...props} icon="map" color={Theme.colors.primary} />
          )}
        />
        <List.Item
          title="Phone"
          description={campus.phone}
          left={(props) => (
            <List.Icon {...props} icon="phone" color={Theme.colors.primary} />
          )}
        />
        <List.Item
          title="Fax"
          description={campus.fax}
          left={(props) => (
            <List.Icon {...props} icon="fax" color={Theme.colors.primary} />
          )}
        />
        <List.Item
          title="Email"
          description={campus.email}
          left={(props) => (
            <List.Icon {...props} icon="email" color={Theme.colors.primary} />
          )}
        />
      </View>

      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 33.8774976,
            longitude: 35.4959696,
            latitudeDelta: 0.0005,
            longitudeDelta: 0.001,
          }}
        ></MapView>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {},
  mapContainer: {
    height: 200,
    width: SCREEN_WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
